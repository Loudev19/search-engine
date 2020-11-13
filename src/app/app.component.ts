import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from "./results.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-engine';

  results: boolean = false;
  message: String = "";

  words = "";
  input = { "words": [] };
  words_map: Map<String, String[]> = new Map<String, String[]>();

  constructor(private _service: ResultsService, private _router: Router,) { }

  result: any;

  split() {
    this.input.words = this.words.split(" ");
  }

  getlist(key: String) {
    return this.words_map.get(key);
  }

  mapping(res: any) {
    let result: Map<String, number> = new Map<String, number>();

    for (let it in res) {
      res[it].forEach(element => {
        if (!result[element[0]]) {
          result.set(element[0], parseFloat(element[1]));
        }
        if (this.words_map.has(element[0])) {
          let array = this.words_map.get(element[0]);
          array.push(it);
          this.words_map.set(element[0], array);
        } else {
          this.words_map.set(element[0], [it]);
        }
      });
    }

    if (result.size != 0) {
      this.result = new Array([...result.entries()].sort((a, b) => b[1] - a[1]));
    } else {
      this.message = "No hay coincidencias encontradas";
    }
  }

  getCoincidences() {
    this.split();
    //console.log(this.input);
    this._service.getAllTasks(this.input).subscribe(
      res => {
        console.log(res)
        this.words_map.clear();
        this.result = [];
        this.mapping(res);
        this.results = true;
        this.message = "";
      },
      error => {
        console.log(error);
      }
    )
  }
}

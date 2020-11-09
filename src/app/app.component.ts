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

  words = "";
  input = { "words": [] };

  constructor(private _service: ResultsService, private _router: Router,) { }

  result: any;

  split() {
    this.input.words = this.words.split(" ");
  }

  mapping(res: any) {
    let result: Map<String, number> = new Map<String, number>();
    for (let it in res) {
      res[it].forEach(element => {
        if (!result[element[0]]) {
          result.set(element[0], parseFloat(element[1]));
        }
      });
    }
    this.result = new Map([...result.entries()].sort((a, b) => b[1] - a[1]));
    console.log(this.result);
  }

  getCoincidences() {
    this.split();
    console.log(this.input);
    this._service.getAllTasks(this.input).subscribe(
      res => {
        this.mapping(res);
        this.results = true;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }
}

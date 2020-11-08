import { Component } from '@angular/core';
import { ResultsService } from "./results.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-engine';

  words = { "words": ["aaron"] };
  //{"words": ["hola", "a"]}

  constructor(private _service: ResultsService) { }

  result: any;

  getCoincidences() {
    this._service.getAllTasks(this.words).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }
}

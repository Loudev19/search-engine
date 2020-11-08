import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url = 'https://us-central1-prismatic-vial-174715.cloudfunctions.net/searchWords';

  constructor(private http: HttpClient) { }

  getAllTasks(words) {
    return this.http.post(this._url, words);
  }
}

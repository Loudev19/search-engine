import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private _url = 'http://localhost:8000/code/';

  constructor(private http: HttpClient) { }

  getAllTasks(words) {
    let body = '';
    for (let w of words['words']) {
      body += w + ' ';
    }
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this._url, body, { headers: headers, responseType: "text" });
  }
}

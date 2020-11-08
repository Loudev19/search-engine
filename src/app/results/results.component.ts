import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() page: number;

  active = 0;

  pages

  constructor() {
    this.pages = Array(5).fill(0).map((x, i) => i);
    this.pages.pop()

  }

  ngOnInit() { }

  get currentPage() {
    return this.active;
  }
}

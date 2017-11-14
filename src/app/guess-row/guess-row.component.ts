import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guess-row',
  templateUrl: './guess-row.component.html',
  styleUrls: ['./guess-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuessRowComponent implements OnInit {

  first: string;
  second: string;
  third: string;
  fourth: string;

  constructor() { }

  ngOnInit() {
  }

}

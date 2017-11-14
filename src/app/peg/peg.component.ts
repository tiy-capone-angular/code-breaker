import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface ChosenClass {
  red?: boolean;
  goldenrod?: boolean;
  cyan?: boolean
}

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.css']
})
export class PegComponent implements OnInit {

  showOptions: boolean;
  chosenClass: ChosenClass;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.showOptions = !this.showOptions;
  }

  handleRed() {
    this.chosenClass = { red: true };
    this.showOptions = false;
  }

  handleGoldenrod() {
    this.chosenClass = { goldenrod: true };
    this.showOptions = false;
  }

  handleCyan() {
    this.chosenClass = { cyan: true };
    this.showOptions = false;
  }

}

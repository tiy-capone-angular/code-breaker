import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.css']
})
export class PegComponent implements OnInit {

  showOptions: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.showOptions = !this.showOptions;
  }

}

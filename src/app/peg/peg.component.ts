import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { PegClickService } from '../peg-click/peg-click.service';

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

  @Input()
  color: string;

  @Output()
  colorChange: EventEmitter<string>;

  showOptions: boolean;

  constructor(
    private clickService: PegClickService
  ) {
    this.colorChange = new EventEmitter<string>();
  }

  ngOnInit() {
    this.clickService
      .pegClicked
      .subscribe(
        value => this.showOptions = false
      );
  }

  get chosenClass(): ChosenClass {
    return { [this.color]: true };
  }

  handleClick() {
    this.clickService.clickHappened(this);
    this.showOptions = !this.showOptions;
  }

  handleRed() {
    this.color = 'red';
    this.showOptions = false;
    this.colorChange.emit(this.color);
  }

  handleGoldenrod() {
    this.color = 'goldenrod';
    this.showOptions = false;
    this.colorChange.emit(this.color);
  }

  handleCyan() {
    this.color = 'cyan';
    this.showOptions = false;
    this.colorChange.emit(this.color);
  }

}

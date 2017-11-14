import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Guess } from '../models/guess';
import { PegClickService } from '../peg-click/peg-click.service';

@Component({
  selector: 'app-guess-row',
  templateUrl: './guess-row.component.html',
  styleUrls: ['./guess-row.component.css']
})
export class GuessRowComponent implements OnInit {

  @Input()
  guess: Guess;

  @Output()
  heyGuessMade: EventEmitter<Guess>;

  guessMade: boolean;

  constructor(
    private clickService: PegClickService
  ) {
    this.guess = new Guess();
    this.heyGuessMade = new EventEmitter<Guess>();
  }

  ngOnInit() {
  }

  makeGuess() {
    this.guessMade = true;
    this.clickService.clickHappened();
    this.heyGuessMade.emit(this.guess);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Guess } from '../models/guess';
import { Answer } from '../models/answer';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {

  limit: number;
  guesses: Guess[];
  answer: Answer;
  gameOver: string;

  constructor() {
    this.limit = 3;
    this.guesses = [ new Guess() ];
    this.answer = new Answer();
  }

  ngOnInit() {
  }

  checkGuess() {
    let guess = this.guesses[this.guesses.length - 1];
    let result = this.answer.checkGuess(guess);
    if (result.every(x => x === 'orange')) {
      this.gameOver = 'You WON!';
    } else if (this.guesses.length === this.limit) {
      this.gameOver = 'You LOST! Get a new job.';
    } else {
      guess.result = result;
      this.guesses.push(new Guess());
    }
  }

}

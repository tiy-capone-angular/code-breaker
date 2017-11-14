import { Guess } from "./guess";

export class Answer {

  static choices = [ 'red', 'cyan', 'goldenrod' ];
  colors: string[];

  constructor() {
    this.colors = [];
    for (let i = 0; i < 4; i += 1) {
      let index = Math.floor(Math.random() * 3);
      this.colors.push(Answer.choices[index]);
    }
  }

  checkGuess(guess: Guess): string[] {
    let result = [];
    result.push(this.determineOrange(0, guess.first));
    result.push(this.determineOrange(1, guess.second));
    result.push(this.determineOrange(2, guess.third));
    result.push(this.determineOrange(3, guess.fourth));
    return result;
  }

  private determineOrange(index, guessValue): string {
    if (this.colors[index] === guessValue) {
      return 'orange';
    } else {
      return null;
    }
  }

}

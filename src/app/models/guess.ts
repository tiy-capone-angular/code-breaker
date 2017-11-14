export class Guess {

  first: string;
  second: string;
  third: string;
  fourth: string;
  result: string[];

  isValid(): boolean {
    return this.first !== undefined
        && this.second !== undefined
        && this.third !== undefined
        && this.fourth !== undefined;
  }
}


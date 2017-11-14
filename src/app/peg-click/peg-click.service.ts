import { Injectable } from '@angular/core';
import { PegComponent } from '../peg/peg.component';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PegClickService {

  pegClicked: Subject<PegComponent>;

  constructor() {
    this.pegClicked = new Subject<PegComponent>();
  }

  clickHappened(peg?: PegComponent): any {
    // Broadcast the click to all subscribers
    this.pegClicked.next(peg);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PegComponent } from './peg/peg.component';
import { PegClickService } from './peg-click/peg-click.service';
import { GuessRowComponent } from './guess-row/guess-row.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    GuessRowComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PegClickService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

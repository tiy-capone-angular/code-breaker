import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PegComponent } from './peg/peg.component';
import { PegClickService } from './peg-click/peg-click.service';


@NgModule({
  declarations: [
    AppComponent,
    PegComponent
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

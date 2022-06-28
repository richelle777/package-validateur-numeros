import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {IntlInputIsjIsiThreeModule} from 'intl-input-isj-isi-three'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntlInputIsjIsiThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

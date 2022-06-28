import { CommonModule, NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntlInputIsjIsiThreeComponent } from './intl-input-isj-isi-three.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IntlInputIsjIsiThreeComponent,
    PhonenumberComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    IntlInputIsjIsiThreeComponent,
    PhonenumberComponent
  ]
})
export class IntlInputIsjIsiThreeModule { }

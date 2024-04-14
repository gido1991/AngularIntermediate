import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';



@NgModule({
  exports: [
    JokeCardComponent
  ],
  declarations: [
    JokeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JokeDetailsModule { }

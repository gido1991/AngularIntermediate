import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { JokeDetailsRoutingModule } from './joke-details-routing.module';
import { JokeService } from './joke.service';



@NgModule({
  exports: [
    JokeCardComponent
  ],
  declarations: [
    JokeCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    JokeDetailsRoutingModule
  ],
  providers: [
    JokeService
  ]
})
export class JokeDetailsModule { }

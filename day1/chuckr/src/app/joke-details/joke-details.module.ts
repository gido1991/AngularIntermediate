import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { JokeDetailsRoutingModule } from './joke-details-routing.module';
import { JokeService } from './joke.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';


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
    JokeDetailsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    JokeService
  ]
})
export class JokeDetailsModule { }

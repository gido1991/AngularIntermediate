import { Component, Input, OnInit } from '@angular/core';
import { JokeModel } from '../JokeModel';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent implements OnInit {
  @Input() jokeTitle: string | undefined;

  joke: JokeModel | undefined;


  ngOnInit(): void {
    if (this.jokeTitle)
    this.joke = {
      title: this.jokeTitle,
      content: 'Chuck Norris can divide by zero.'
    }
  }



}

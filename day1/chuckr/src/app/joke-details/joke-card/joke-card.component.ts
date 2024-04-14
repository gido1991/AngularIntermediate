import { Component } from '@angular/core';
import { JokeModel } from '../JokeModel';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {
  joke: JokeModel = {
    title: 'Chuck Norris Joke',
    content: 'Chuck Norris can divide by zero.'
  }


}

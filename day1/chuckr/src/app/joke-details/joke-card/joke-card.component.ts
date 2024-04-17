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
  // no comments example
  // comments: string[] = [];

  // 1 comment example
  // comments: string[] = ['very funny'];

  // multiple comments example
  comments: string[] = ['very funny', '....', 'right on!'];

}

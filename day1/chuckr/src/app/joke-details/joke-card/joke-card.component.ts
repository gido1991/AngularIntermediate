import { Component } from '@angular/core';
import { JokeModel } from '../JokeModel';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {
  joke: JokeModel | undefined;
  // no comments example
  // comments: string[] = [];

  // 1 comment example
  // comments: string[] = ['very funny'];

  // multiple comments example
  comments: string[] = ['very funny', '....', 'right on!'];

  constructor(jokeService: JokeService) {
    this.joke = jokeService.getJokeDetails();
  }

}

import { Component } from '@angular/core';
import { JokeModel } from '../JokeModel';
import { JokeService } from '../joke.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {
  joke: JokeModel | undefined;
  commentText: string | undefined;
  authorText: string | undefined;

  // no comments example
  // comments: string[] = [];

  // 1 comment example
  // comments: string[] = ['very funny'];

  // multiple comments example
  comments: string[] = ['very funny', '....', 'right on!'];

  constructor(jokeService: JokeService) {
    this.joke = jokeService.getJokeDetails();
  }

  onSubmit() {
    if(this.commentText)
      this.comments.push(this.commentText);
  }

}

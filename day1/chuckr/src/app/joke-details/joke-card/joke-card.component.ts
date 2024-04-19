import { Component } from '@angular/core';
import { JokeModel } from '../JokeModel';
import { JokeService } from '../joke.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  jokeForm = new FormGroup({
    commentText:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    authorText: new FormControl('',[Validators.required])
  });

  constructor(jokeService: JokeService) {
    this.joke = jokeService.getJokeDetails();
  }

  onSubmit() {
    const comment = this.jokeForm.get('commentText')?.value;
    if(comment)
      this.comments.push(comment);
  }

}

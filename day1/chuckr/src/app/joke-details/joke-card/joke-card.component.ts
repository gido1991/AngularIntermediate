import { Component } from '@angular/core';
import { JokeModel } from '../JokeModel';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  // no comments example
  // comments: string[] = [];

  // 1 comment example
  // comments: string[] = ['very funny'];

  // multiple comments example
  comments: string[] = ['very funny', '....', 'right on!'];

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // this.joke = {
    //   ...this.joke,
    //   title: `${this.joke.title} : ${id}`,
    // };
    this.router.navigateByUrl('');
  }

}

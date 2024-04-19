import { Injectable } from '@angular/core';
import { JokeModel } from './JokeModel';
import { Observable, of } from 'rxjs';

@Injectable()
export class JokeService {

  constructor() { }

  getJokeDetails(): Observable<JokeModel> {
    return of({
      title: 'Chuck Norris Joke',
      content: 'Chuck Norris can divide by zero.'
    });
  }
}

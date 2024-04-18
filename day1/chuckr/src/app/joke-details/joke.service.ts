import { Injectable } from '@angular/core';
import { JokeModel } from './JokeModel';

@Injectable()
export class JokeService {

  constructor() { }

  getJokeDetails(): JokeModel {
    return {
      title: 'Chuck Norris Joke',
      content: 'Chuck Norris can divide by zero.'
    };
  }
}

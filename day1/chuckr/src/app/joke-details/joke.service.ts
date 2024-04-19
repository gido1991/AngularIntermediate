import { Injectable } from '@angular/core';
import { JokeModel } from './JokeModel';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JokeApiModel } from './jokeApiModel';

@Injectable()
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokeDetails(): Observable<JokeModel> {
    return this.http.get<JokeApiModel>('https://api.chucknorris.io/jokes/random')
      .pipe(map(joke => {
        return { title: joke.id, content: joke.value }
      }));
  }
}

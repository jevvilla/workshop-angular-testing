import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  template: ` <div class="jumbotron">
                <h1>{{title}}</h1>
                <h6>{{joke}}</h6>
                <button id="mybtn" class="btn btn-primary btn-lg" (click)="getJoke()">Get next joke</button>
              </div>
            `
})
export class JokeComponent implements OnInit {

  joke: string;
  title = 'Chuck Norris Jokes';

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke()
      .subscribe(joke => this.joke = joke);
  }

}

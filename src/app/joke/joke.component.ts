import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
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

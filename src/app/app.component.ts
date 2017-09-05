import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
                <app-joke></app-joke>
              </div>
            `
})
export class AppComponent implements OnInit {
  
  title = 'Chuck Norris Jokes';
  constructor(){}
  ngOnInit(): void {
  }

}

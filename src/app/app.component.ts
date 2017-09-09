import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
                <app-joke></app-joke>
              </div>
            `
})
export class AppComponent {

  title = 'Chuck Norris Jokes';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeService } from './joke.service';
import { JokeComponent } from './joke/joke.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ JokeService ]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }

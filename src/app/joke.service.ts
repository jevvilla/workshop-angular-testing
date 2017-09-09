import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  url = 'http://api.icndb.com/jokes/random';

  constructor(private http: Http) { }

  getJoke(): Observable<any> {
    return this.http.get(this.url)
      .map(response => response.json().value.joke);
  }
}

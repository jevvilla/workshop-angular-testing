// 1. import TestBed and async utilities
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const component = new AppComponent();
  const truly = true;

  // 2. create a function beforeEach using async function as wrapper for its parameter
  beforeEach(async(() => {

    // 3. use configureTestingModule TestBed Method to make your own @ngModule for testing
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: []
    }).compileComponents();
  }));

  it('should evaluate truly variable to return true', () => {
    // expect(truly).toBeTruthy();
    expect(truly).toBe(true);
  });

  it('should have as title "Chuck Norris Jokes"', () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });
});

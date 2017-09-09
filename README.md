# Your First Unit Test in Angular
:cold_sweat: Challenge #3 was tough, I know. :cold_sweat: If you did it, this is how your `app.component.spec.ts` file must look like:

```js
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
```

As you already know, you have to learn something new to be able to solve each challenge, let's see:

## 1. ComponentFixture

It provides you access to the `component` instance itself, and everything attached to the `component` such as `DOM elements`, `dependencies` etc. `ComponentFixture<T>` takes as argument the component class. e.g. `ComponentFixture<AppComponent>`.

## 2. TestBed.createComponent()

`createComponent` method basically helps you to create a `component` for testing, it takes the `component` class name as the argument and returns a `ComponentFixture<T>`.

## 3. ComponentFixture<T>.componentInstance

It allows you to create an instance of the `component` class. In this case you are creating an `AppComponent` and `componentInstance` will return an instance of `Appcomponent`.

## Challenge #4

Getting better each time :bowtie: Time to refactor our code again

**TIP: Follow steps in order and don't miss out on anything**

1. Import:
	- `ComponentFixture` from `@angular/core/testing`
	- `HttpModule`
	- `JokeComponent`
	- `JokeService` 
	- Weird, right!? :confused: *(later you will notice why)*
2. Create a variable called `fixture` whose type will be `ComponentFixture<AppComponent>`.
3. Change `const component = new AppComponent();` to `let component: AppComponent;`.
4. Make declaration, imports and providers inside your async `TestBed.configureTestingModule`. It is like creating a `@ngModule`
5. Create **another** `beforeEach` right after the previous one but this time make it synchronous. Hope you remember how. ***Hint: don't use async function*** 
6. Inside the second `beforeEach` (you just created)
	- Create a `component` and assign it to the `fixture` variable. ***Hint: use TestBed.createComponent() method and pass it `AppComponent` as the parameter*** 
	- Create an instance of `AppComponent` and assign it to the `component` variable. ***Hint: use fixture.componentInstance property*** 

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/5#your-first-unit-test-in-angular)

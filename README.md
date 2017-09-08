# Your First Unit Test in Angular
Well done, you are almost done with `AppComponent` specs. Now your `app.component.spec.ts` file must be similar to this:

```js
// 1. Import ComponentFixture, HttpModule, JokeComponent and JokeService
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

describe('AppComponent', () => {
	// 2. create fixture variable typed as ComponentFixture<AppComponent>
	let fixture: ComponentFixture<AppComponent>;
	// 3. change component variable and typed as AppComponent
	let component: AppComponent;
	let truly: boolean = true;

	// 4. make declaration, imports and providers inside your async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			declarations: [AppComponent, JokeComponent],
			providers: [JokeService]
		}).compileComponents();
	}));

	// 5. Create a sync beforeEach, and make the appropriate configuration inside it
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('should evaluate truly variable to return true', () => {
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	it('should have as title "Chuck Norris Jokes"', () => {
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
})

```
As you already know, you have to learn something new to be able to solve each challenge, let see:

## 1. DebugElement

Is a handle on the `component` 's DOM element, you can access to any element by using `nativeElement.querySelector()` method which receives a `predicate` as parameter. e.g A `predicate` could be `div#myId` as you reference an `element` with Id in `CSS`.

## 2. ComponentFixture<T>.detectChanges

As its name says, it helps you to detect changes in `component` *(AppConponent this case)* . To trigger change detection we call the function `fixture.detectChanges()`, you can use it as meny times you need.


## Challenge #5

Hope you have leaned too much so far.

**TIP: Follow steps in order don't miss out on anything**

- Import `ComponentFixture` from '@angular/core/testing', import `HttpModule` too, Import `JokeComponent` and `JokeService`. Weird, right!? :confused: *(later you will notice why)*
- Create a variable called `fixture` whose type will be `ComponentFixture<AppComponent>`.
- Change this `let component = new AppComponent();` for this `let component: AppComponent;`.
- Make declaration, imports and providers inside your async `beforeEach`. It is like creating a mini @ngModule
- Create a `sync` `beforeEach` right below previous one. Hope you remember how.
- Inside the second `beforeEach` create a `component` and makes it equal to the `fixture` variable. ***Hint: use TestBed.createComponent method*** 
- Inside the second `beforeEach` create an instance of `AppComponent` and makes it equal to the `component` variable. ***Hint: use fixture componentInstance method*** 

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/5#your-first-unit-test-in-angular)

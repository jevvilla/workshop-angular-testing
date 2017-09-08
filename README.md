# Your First Unit Test in Angular
woohoo!! You have finished to test `AppComponent` :clap: :clap: :clap: :clap: . Now your `app.component.spec.ts` file must be similar to this:

```js

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
// 1. import DebugElement
import { DebugElement } from "@angular/core";


describe('AppComponent', () => {

	let fixture: ComponentFixture<AppComponent>;
	// 2. declare a variable called element.
	let element: DebugElement;
	let component: AppComponent;
	let truly: boolean = true;


	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			declarations: [AppComponent, JokeComponent],
			providers: [JokeService]
		}).compileComponents();
	}));


	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		// 3. assign fixture.debugElement
		element = fixture.debugElement;
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	  });

	it('should evaluate truly variable to return true', () => {
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	it('should have as title "Chuck Norris Jokes"', () => {
		expect(component.title).toEqual('Chuck Norris Jokes');
  	});

	// 4.  h1 element should be empty before detect changes
	// That’s because when Angular first loads no change detection has been
	// triggered and therefore the view doesn’t show
	it('h1 element should be empty when application init',() => {
		expect(element.nativeElement.querySelector('h1#titleApp').textContent).toEqual('')
	});

  	// 5. After detect changes h1 element should have component.title
	it('should evaluate title variable in a h1 tag', () => {
		fixture.detectChanges();
		expect(element.nativeElement.querySelector('h1#titleApp').textContent).toEqual(component.title);
	});
})
```
You can add more `specs` to practice what you have learned so far.
Now you will start to test a `Pipe`. Isn't that cool?  :sunglasses:

Before start to test `Pipe` let's use it to understand what this `Pipe` is performing. Go to `joke.component.ts` and right below h6 element add  ` <h5>{{joke | capitalize}}</h5>`.
All `specs` are going to fail after this change, to fix them just have to ` import { CapitalizePipe } from './capitalize.pipe';`  and add `CapitalizePipe` to decalrations array in `app.component.spec.ts`, run your app and see results in browser. Do you notice what `capitalize` Pipe does?

## Challenge #6

**TIP: Follow steps in order don't miss out on anything**
- Create a file inside app folder and named `capitalize.pipe.spec.ts`.
- Import `CapitalizePipe` inside file you just create.
- Create a basic structure for testing You only need to use `describe` and `spec` (`it`). **NOTE: No need to use TestBed**
- Declare a variable *(name it 'myName')* and makes equal to your name using random capital letters. e.g `let myName  = 'tHIs iS mY nAMe'`
- Inside the `it` create a new instance of `CapitalizePipe`
- Verify `Pipe` actually transform `myName` variable. ***Hint: use transform CapitalizePipe method and pass it `myName` as parameter. It should return a string first letter capitalized ***


### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/7#your-first-unit-test-in-angular)

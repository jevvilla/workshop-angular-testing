# Your First Unit Test in Angular
:cold_sweat: Challenge #3 was tough, I know. :cold_sweat: If you did it, this is how your `app.component.spec.ts` file must look like:

```js

// 1. import TestBed and async utilities
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";


describe('AppComponent', ()=>{
	let component = new AppComponent();
	let truly: boolean = true;

	// 2. create a function beforeEach using async function as wrapper for its parameter 		
	beforeEach(async(()=>{

	// 3. use configureTestingModule TestBed Method to make your own @ngModule for testing	
		TestBed.configureTestingModule({
			imports: [],
			declarations: [],
			providers: []
		}).compileComponents();
	}));

	it('should evaluate truly variable to return true', ()=>{
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	it('should have as title "Chuck Norris Jokes"', ()=>{
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
})

```
As you already know, you have to learn something new to be able to solve each challenge, let see:

## 1. ComponentFixture<T>

Fixture for debugging and testing a component, provides you access to the `component` instance itself, and everything attached to the `component` like `DOM elements`, `dependencies` etc, takes as argument the component class name. e.g `ComponentFixture<AppComponent>` this case.

## 2. TestBed.createComponent()

`createComponent` mothod basically help you to create a `component` for testing, it takes the `component` class name as argument and returns a `ComponentFixture<T>`.

## 3. ComponentFixture<T>.componentInstance

Allows you to create an instance of the root component class, this case you are creating an `AppComponent` and `componentInstance` will return an instance of that `Appcomponent`.


## Challenge #4

This is getting better each time :bowtie:

- Have you noticed that there's an inline template in the `app.component.ts` file? Nice..! let's separate them, move the inline template to an external template:
  - Create a file...
  - Name it correctly..
  - Reference it in the component..
  - **Note:** Do the same process for `joke.component.ts`, it is important to keep the file names, just change the extension. e.g: `joke.component.html`
- Now that you have an external template, you have to refactor the `app.component.spec.ts` code. Make a refactor using the `TestBed` including its appropriate setup for external templates. ***Hint:*** use `async` for `configureTestingModule`

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/5#your-first-unit-test-in-angular)

# Your First Unit Test in Angular
You did it again!! :clap: :clap: :clap: if didn't, do not worry, do it better next time, `app.component.spec.ts` code should look like this so far:

```js

// 1. import what you think it's necesary
import { AppComponent } from "./app.component";

describe('AppComponent', ()=>{
	// 2. declare a new instance of AppComponent class 	
	let component = new AppComponent();
	let truly: boolean = true;

	it('should evaluate truly variable to return true', ()=>{
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	// 3. spec to evaluate title of AppComponent class
	it('should have as title "Chuck Norris Jokes"', ()=>{
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
})

```
There are some haighly important concepts you have to learn to knock down :punch: Challenge #3, those concepts are:

## 1. Setup & Teardown

In order to test any application feature we need to perform some setup, sometimes we need to create some test objects before test or we need to execute an activity after a test, Jasmine provide us a few functions to perform these activities.
You must be wondering, :thinking: is this the only thing I have to configure? the answer is yes, Angular CLI does the hard work for us. isn't that cool? :sunglasses:. Those Jasmine functions are:

- <b>beforeAll:</b> This function is called once, <i><b>before</b></i> all the specs in `describe` test suite are run.
- <b>afterAll:</b> This function is called once <i><b>after</b></i> all the specs in a test suite are finished.
- <b>beforeEach:</b> This function is called <i><b>before each</b></i> test specification, `it` function, has been run.
- <b>afterEach:</b> This function is called <i><b>after each</b></i> test specification has been run.


## 2. TestBed
So far, you've used pure Jasmine syntax to test an Angular Component as a class, that's not bad, but it is complex when you try to test other Angular features as `Services`, `Dependency Injection`, detect changes on `Components` and much more. That why Angular team decides add a powerful utility called `TestBed` to avoid you get frustrated while trying to test any Angular application.

TestBed is the most important utility you have to consider when you're going to write a test for an Angular app. TestBed allows you to do a bunch of cool stuffs, like create your own `@ngModule` using the `configureTestingModule` `TestBed` method, create `Component` intances, and much more. The `TestBed.configureTestingModule`method takes an object as argument very similar to `@ngModule`, in fact we can use most of the properties of a normal `NgModule`


## Challenge #3

You have to admit it, Challenge #2 was so easy that even my blind grandfather could do it:older_man:

**Come on guys!! let't make it more interesting. :facepunch:**

- Have you noticed that there's an inline template in the `app.component.ts` file? Nice..! let's separate them, move the inline template to an external template:
  - Create a file...
  - Name it correctly..
  - Reference it in the component..
  - **Note:** Do the same process for `joke.component.ts`, it is important to keep the file names, just change the extension. e.g: `joke.component.html`
- Now that you have an external template, you have to refactor the `app.component.spec.ts` code. Make a refactor using the `TestBed` including its appropriate setup for external templates, to declare components, etc. ***Hint:*** use `async` for `configureTestingModule`

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/4#your-first-unit-test-in-angular)

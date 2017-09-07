# Your First Unit Test in Angular
:cold_sweat: Challenge#3 was tough :cold_sweat: If you did it, this is how your `app.component.spec.ts` file must look like:

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

TestBed is the most important utility you have to consider when you're going to write a test for an Angular app. TestBed allows you to do a bunch of cool stuffs, like create your own `@ngModule` using the `configureTestingModule` `TestBed` method, create `Component` intances, and much more. The `TestBed.configureTestingModule`method takes an object as argument very similar to `@ngModule`, in fact we can use most of the properties of a normal `NgModule`. Ahh... and this method you have to configure it inside `beforeEach` function. It looks a little bit scary :fearful: but it's really easy actually. Let see an example:

```js

// The TestBed one of the Angular testing utilities and has to be imported.
import { TestBed } from '@angular/core/testing';
// Import Components, Services and utilities you need

.
.
. 
.
// sync beforeEach
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ ],
      providers: [ ]
    }).compileComponents(); // compile template and css
});

.
.
.
.

```

## 2. Async function 
As developer, the things you most want to test are `Components`, these `Components` can have inline Templates or external Templates, that is a little problem at moment of testing because when a `Component` has an external template Angular template compiler must read the external files from the file system and this is an asynchronous task, we have to ensure this task ends to be able to create an instance of a `Component`. 

`Async` is also a function of the Angular testing utilities, you can use it for many async tasks in testin, in this case behaves as a wrapper for `beforeEach` parameter, before our `TestBed.configureTestingModule`, let's see what is this about using the same example:

```js

// The async one of the Angular testing utilities and has to be imported.
import { TestBed, async } from '@angular/core/testing';
// Import Components, Services and utilities you need

.
.
. 
.
// sync beforeEach
beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ ],
      providers: [ ]
    }).compileComponents(); // compile template and css
}));

.
.
.
.

```


## Challenge #3

You have to admit it, Challenge #2 was so easy that even my blind grandfather could do it:older_man:

**Come on guys!! let't make it more interesting. :facepunch:**

- Have you noticed that there's an inline template in the `app.component.ts` file? Nice..! let's separate them, move the inline template to an external template:
  - Create a file...
  - Name it correctly..
  - Reference it in the component..
  - **Note:** Do the same process for `joke.component.ts`, it is important to keep the file names, just change the extension. e.g: `joke.component.html`
- Now that you have an external template, you have to refactor the `app.component.spec.ts` code. Make a refactor using the `TestBed` including its appropriate setup for external templates. ***Hint:*** use `async` for `configureTestingModule`

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/4#your-first-unit-test-in-angular)

# Your First Unit Test in Angular

You did it again!! :clap: :clap: :clap: if didn't, do not worry, do it better next time, `app.component.spec.ts` code should look like this so far:

```js

// 1. import what you think it's necessary
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	// 2. declare a new instance of AppComponent class 	
	const component = new AppComponent();
	const truly = true;

	it('should evaluate truly variable to return true', () => {
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	// 3. spec to evaluate title of AppComponent class
	it('should have as title "Chuck Norris Jokes"', () => {
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
});

```

There are some haighly important concepts you have to learn to knock down :punch: Challenge #3:

## 1. Setup & Teardown

In order to test any application feature we need to perform some setup, sometimes we need to create some test objects before the actual test or we need to execute an activity afterwards. Jasmine provide us with some functions to perform these activities.
You must be wondering: :thinking: is this the only setup I need? The answer is yes, Angular CLI does the hard work for us. isn't that cool? :sunglasses:. Those Jasmine functions are:

### 1.1 beforeAll

This function is called once, *before* **all** the specs in the `describe` test suite are run.

### 1.2 afterAll

This function is called once *after* **all** the specs in a test suite are finished.

### 1.3 beforeEach

This function is called *before* **each** test specification (`it`) has run.

### 1.4 afterEach

This function is called *after* **each** test specification has run.

## 2. TestBed

So far, you've used pure Jasmine syntax to test an Angular Component as a class, that's not bad, but it is complex when you try to test other Angular feature such as `Services`, `Dependency Injection`, change detection on `Components` and much more. That's why the Angular team decided to add a powerful utility called `TestBed`, to avoid your frustration while trying to test any Angular application.

TestBed is the most important utility you have to consider when you're going to write a test for an Angular app. TestBed allows you to do a bunch of cool stuff:

- Create your own `@ngModule` using the `configureTestingModule` method and the `TestBed` class.
- Create components, their instances, etc.

The `configureTestingModule` inside the `beforeEach` function method and it takes an object very similar to `@ngModule` as an argument. In fact we can use most of the properties of a normal `NgModule`.

It looks a little bit scary :fearful: but actually it's really easy. Let's see an example:

```js
// The TestBed one of the Angular testing utilities and has to be imported.
import { TestBed } from '@angular/core/testing';

// Import Components, Services and utilities you need
...

// Sync beforeEach
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ ],
      providers: [ ]
    }).compileComponents(); // compile template and css
});

...

```

## 2. Async function

As a developer, the things you want to test the most are `Components`. These `Components` can have inline templates or external templates.

> When a `Component` has an external template, Angular template compiler must read the external file from the file system in an asynchronous task, therefore we have to ensure this task ends before we create an instance of a `Component`. 

`Async` solves this problem. It is a function of the Angular testing utilities you can use for asynchronous tasks in testing, in this case it behaves as a wrapper for `beforeEach`. Let's see what is this about using the same example:

```js

// The async one of the Angular testing utilities and has to be imported.
import { TestBed, async } from '@angular/core/testing';
// Import Components, Services and utilities you need
...

// async beforeEach
beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ ],
      providers: [ ]
    }).compileComponents(); // compile template and css
}));
...

```

## Challenge #3

You have to admit it, Challenge #2 was so easy that even my blind grandfather could do it:older_man:

**Come on guys!! let's make it more interesting. :facepunch:**

Have you noticed there's an inline template in the `app.component.ts` file? Nice..! let's separate it, move the inline template to an external template:
  1. Create a file... inside app folder, and name it correctly: `app.component.html`
  2. Go to `app.component.ts`, cut the `template` code and paste it in `app.component.html`
  3. Reference `app.component.html` in the component.. ***Hint: use templateUrl***
  4. Do the same process for `joke.component.ts`. **Note: file has to named `joke.component.html` and created it in joke folder**

Now that you have an external template, you have to refactor the `app.component.spec.ts` code. Make a refactor using the `TestBed` including its appropriate setup for external templates. ***Hint: use `async` for `configureTestingModule`*** 

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/4#your-first-unit-test-in-angular)

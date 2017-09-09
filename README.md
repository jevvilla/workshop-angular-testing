# Your First Unit Test in Angular
Testing a `Pipe` sometimes is not an easy task, :clap: :clap: you did it so good :clap: :clap:. Now your `capitalize.pipe.spec.ts` file must be similar to this:

```js
// 1. import CapitalizePipe
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  	// 2. Create a variable called myName and makes it equal to your name using random capital letters
  let myName = 'pEPiTO pEReZ';

	// 3. Create an spec to  evaluate first letter capitalized
  it('should evaluate first letter capitalized in string', () => {
	  // 4. create a new intance of CapitalizePipe()
      const pipe = new CapitalizePipe();

	  // 5. invoke transform method of CapitalizePipe class and pass it as parameter myName,
	  // it should return 'Pepito Perez' this case.
      expect(pipe.transform(myName)).toEqual('Pepito Perez');
  });
});

```
You have **6** SUCCESS `specs` and **0** failures so far  :smiley: :smiley:
But we have `joke.component.ts` and `joke.service.ts` pending to test. Let's continue testing both at the same time.

But first you have to know this:

## 1. fixture.whenStable()
The whenStable promise resolves all pending asynchronous activities within `specs`.
Do you remember `async` function which you use to wrap `beforeEach` function paramenter?.
Well... It is time to use it on `specs`. When you wrap function parameter of an `spec` with `async` it is necessary to use `fixture.whenStable()`. 
`async` function is used to perform async tasks, this case you will use it to call a `service` method which makes a `http` request. E.g:

```js
	it('', async(() => {
		/*
		* here you make some async activities.
		* sometimes it is ok detect changes after
		*/
		fixture.whenStable().then(() => {
			/*
			* perform another activity after those async tasks finished
			* 
			*/
		});
	}));
```

## 2. inject function
Basically allows you to `inject` dependencies in `specs`, If you want to test a service, you need to use `inject` to be able to use this service on this `spec`.
Let's see how it looks in code: ***Hint: this example uses async and inject because service performs an asynchronous task, and guess what! this how you need to use it in this challenge***

```js
	it('', async(inject([JokeService], (jokeService: JokeService) => {
		/*
		* Now you can use jokeService methods like:
		* jokeService.getJoke()... 
		* 
		*/
		fixture.whenStable().then(() => {
			/*
			* perform another activity after those async tasks finished
			* 
			*/
		});
	})));
```
In this snippet of code `inject([JokeService], (jokeService: JokeService) ` inside array we pass the name of `service` we want to `inject` `JokeService` this case, and pass `(jokeService: JokeService)` as function parameter where `jokeService` is the variable we will use inside the `spec`.

## Challenge #7

**TIP: Follow steps in order don't miss out on anything**
- Create a file inside joke folder and name it `joke.component.spec.ts`.
- Import `inject`, `async`, `ComponentFixture`, `TestBed` from `'@angular/core/testing'`. **NOTE: Remember import Http, CapitalizePipe, JokeService and JokeComponent**.
- Create a structure for testing having in mind using `TestBed` to `configureTestingModule`. ***Hint: take a look how you did it in app.component.spec.ts***
- Create `jokeComponent: JokeComponent` variable, `fixture: ComponentFixture<JokeComponent>` variable, `pipe: CapitalizePipe` and an empty string variable and called `joke`;
- Configure appropriate the `TestBed.configureTestingModule` in the first `beforeEach`.
- In the second `beforeEach` create `JokeComponent` using `TestBed`, create an `componentInstance` using `fixture` and create a new instance of `CapitalizePipe()`. ***Hint: take a look how you did it in app.component.spec.ts***
- Create a `spec` *(follow the example above)*.
- Inside `spec`, firstly call `jokeService.getJoke()` method, (*it returns an Observable*) `subscribe` to it and make `joke` variable equal to the response inside the `subscribe`. ***Hint: It is necessary trigger fixture.detectChanges() method after***
- Inside `fixture.whenStable`... evaluate that `pipe.transform(joke)` is not equal to `joke` variable. ***Hint: use expect().not.toEqual to compare not equal values!***

This was the last challenge :cry: :cry: :cry: it's too sad I know. I Hope you have finished all challenges succesfully and learned some Angular testing basics, if you haven't, don't worry just try it once more and become a Rock!!! :muscle: :muscle: :punch: 

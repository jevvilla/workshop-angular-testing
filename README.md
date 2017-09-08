# Your First Unit Test in Angular
Testing a `Pipe` sometimes is not an easy task, :clap: :clap: you did it so good :clap: :clap:. Now your `capitalize.pipe.spec.ts` file must be similar to this:

```js
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let myName = 'pEPiTO pEReZ';

  it('should evaluate first letter capitalized in string', () => {
      const pipe = new CapitalizePipe();
      expect(pipe.transform(myName)).toEqual('Pepito Perez');
  });
});

```
So far you have **6** SUCCESS `specs` and **0** failures :smiley: :smiley:
But we have `joke.component.ts` and `joke.service.ts` pending to test. Let's continue testing `joke.component.ts`

But first you have to know this:

## 1. fixture.whenStable()
The whenStable promise resolves when all pending asynchronous activities within `specs`.
Do you remember `async` function which you use to wrap `beforeEach` function paramenter?.
Well... It is time to use it on `specs`. When you you wrap function parameter of an `spec` with `async` it is necessary to use `fixture.whenStable()`. 
`async` function is used to perform async tasks, this case you will use it to call a `service` method which makes a `http` request.
Here a snippet of code :

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
Basicaly allows you to `inject` dependencies in `specs`, If you want to test a service, you need to use `inject` to be able to use this service on this `spec`.
Let's see how it looks in code: ***Hint: this example uses asyn and inject because service performs an async task, and guess what! this how you need to use it in this challenge***

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


## Challenge #7

**TIP: Follow steps in order don't miss out on anything**
- Create a file inside app folder and name it `joke.component.spec.ts`.
- Import `inject`, `async`, `ComponentFixture`, `TestBed` from `'@angular/core/testing'`. **NOTE: Remember import Http, CapitalizePipe, JokeService and JokeComponent**.
- Create a structure for testing having in mind youo have to use `TestBed` to `configureTestingModule` and other important things. ***Hint: take a look how you did it in app.component.spec.ts***
- Create an empty string variable and called `joke`;
- Configure appropriate the `TestBed.configureTestingModule` in the first `beforeEach`.
- In the second `beforeEach` create `JokeComponent` using `TestBed`, create an `componentInstance` using `fixture` and create a new instance of `CapitalizePipe()`. ***Hint: take a look how you did it in app.component.spec.ts***
- Create a `spec` following the second example above.
- Inside `spec`, firstly call `getJoke()` `jokeService` method, (*it returns an Observable*) `subscribe` to it and make `joke` variable equal to the response inside the `subscribe`. ***Hint: It is necessary ***
- 
- 




### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/7#your-first-unit-test-in-angular)

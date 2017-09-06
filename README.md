# Your First Unit Test in Angular
Congrats!! 🎉🎉🎉 hope you did it well, if didn't, do not worry, do it better next time, `app.component.spec.ts` code should look like below so far. 

```js

// 1. Create a basic testing structure using what you think it's necesary
describe('AppComponent', ()=>{

	// 2. declare a boolean variable called truly 
	let truly;

	beforeEach(()=>{
		// NOTE: truly variable will be reassigned to true before each spec
		truly = true;
	});

	// 3. Evaluate truly variable, be sure it's value is true
	it('should evaluate truly variable to return true', ()=>{
		// it's ok this way
		// expect(truly).toBeTruthy();
		// but you can do it like this too
		expect(truly).toBe(true);
	});
})

```

## Challenge #2
Time to test something real in our app. Don't delete spec what you've done before.
- create a new instance of `AppComponent` class.
- import what you believe it's really necesary.
- Create a string variable called <b>title</b>, make it equal to 'Chuck Norris Jokes'.
- Create a `spec` to ensure `AppComponent` title varible is equal to title variable you just create.

<br>You already know how to verify everything it's ok in your code, whether 2 `specs` are success, you're ready to take challenge #3

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/3#your-first-unit-test-in-angular)
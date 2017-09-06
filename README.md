# Your First Unit Test in Angular
Congrats!! 🎉🎉🎉 hope you did it well, if not, do not worry do it better next time, code should look like below so far. 

```js

// 2. Create a basic testing structure using what you think it's necesary
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
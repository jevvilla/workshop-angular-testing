# Your First Unit Test in Angular

Congrats!! 🎉🎉🎉 hope you did it well, if you didn't, don't worry, do it better next time. `app.component.spec.ts` file should look like this so far: 

```js
// 1. Create a basic testing structure using what you think it's necessary
describe('AppComponent', () => {

	// 2. declare a boolean variable called truly 
	let truly = true;
  
	// 3. Evaluate truly variable, be sure its value is true
	it('should evaluate truly variable to return true', () => {
		expect(truly).toBe(true);
    // or expect(truly).toBeTruthy();
	});
})
```

You already have tools to solve challenge #2, but before starting it's appropriate to let you know that in Angular everything is a class (`Components`, `Services`, `Pipes`, etc), therefore you can instantiate them as long as you import the respective class before.

## Challenge #2

Time to test something real in our app. *Use the same structure you created before*:

1. Import `AppComponent`.
2. Create a new instance of it. **Hint: create a new variable named 'component' and assign it a new instance of `AppComponent`**
3. Create a `spec` (`it`) to ensure `AppComponent` title varible is equal to `'Chuck Norris Jokes'`. **Hint: use .toEqual() instead .toBe()**

You already know how to verify if everything it's ok in your code, if the 2 `specs` are successful then you're ready to take challenge #3

### [Take the next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/3#your-first-unit-test-in-angular)

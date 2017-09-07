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

## Challenge #3

You have to admit it, Challenge #2 was so easy that even my blind grandfather could do it:older_man:

**Come on guys!! let't make it more interesting. :facepunch:**

- Have you notice that there's an inline template in the `app.component.ts` file? Nice..! let's separate them, move the inline template to an external template:
  - Create a file...
  - Name it correctly..
  - Reference it in the component..
  - **Note:** Do the same process for `joke.component.ts`, it is important to keep the file names, just change the extension. e.g: `joke.component.html`
- Now that you have an external template, you have to refactor the `app.component.spec.ts` code. Make a refactor using the `TestBed` including its appropiate setup for external templates, to declare components, etc. ***Hint:*** use `async` for `configureTestingModule`

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/4#your-first-unit-test-in-angular)

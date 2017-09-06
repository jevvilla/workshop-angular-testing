# Your First Unit Test in Angular
You did it again!! :clap: :clap: :clap: if didn't, do not worry, do it better next time, `app.component.spec.ts` code should look like below so far. 

```js

// 1. import what you think it's necesary
import { AppComponent } from "./app.component";

describe('AppComponent', ()=>{
	// 2. declare a new instance of AppComponent class 	
	let component = new AppComponent();

	// 3. Create a string variable title
	let title: string = 'Chuck Norris Jokes';
	let truly;

	beforeEach(()=>{
		truly = true;
	});

	it('should evaluate truly variable to return true', ()=>{
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	// 4. spec to evaluate title of AppComponent class
	it('should have as title "Chuck Norris Jokes"', ()=>{
		expect(component.title).toEqual(title);
	});
})

```

## Challenge #3
Admit it Challenge #2 was so easy, It could do it my blind grandfather :older_man:
<br>Come on guys!! let't do it more interesting. :facepunch:

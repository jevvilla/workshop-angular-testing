// 1. import what you think it's necesary
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";


describe('AppComponent', ()=>{
	// 2. declare a new instance of AppComponent class 	
	let component = new AppComponent();
	let truly: boolean = true;

	beforeEach(async(()=>{
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

	// 3. spec to evaluate title of AppComponent class
	it('should have as title "Chuck Norris Jokes"', ()=>{
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
})
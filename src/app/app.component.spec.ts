
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

describe('AppComponent', ()=>{
	let component = new AppComponent();
	let truly: boolean = true;

	
	beforeEach(async(()=>{

		TestBed.configureTestingModule({
			declarations: [AppComponent, JokeComponent],
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
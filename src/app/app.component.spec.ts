
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';
// 1. import DebugElement
import { DebugElement } from "@angular/core";
import { CapitalizePipe } from './capitalize.pipe';

describe('AppComponent', () => {

	let fixture: ComponentFixture<AppComponent>;
	// 2. declare a variable called element.
	let element: DebugElement;
	let component: AppComponent;
	let truly: boolean = true;


	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			declarations: [AppComponent, JokeComponent, CapitalizePipe],
			providers: [JokeService]
		}).compileComponents();
	}));


	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		// 3. assign fixture.debugElement
		element = fixture.debugElement;
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	  });

	it('should evaluate truly variable to return true', () => {
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	it('should have as title "Chuck Norris Jokes"', () => {
		expect(component.title).toEqual('Chuck Norris Jokes');
  });

  // 4.  h1 element should be empty before detect changes
  // That’s because when Angular first loads no change detection has been
   // triggered and therefore the view doesn’t show
  it('h1 element should be empty when application init',() => {
    expect(element.nativeElement.querySelector('h1#titleApp').textContent).toEqual('')
  });

  // 5. After detect changes h1 element should have component.title
	it('should evaluate title variable in a h1 tag', () => {
		fixture.detectChanges();
		expect(element.nativeElement.querySelector('h1#titleApp').textContent).toEqual(component.title);
	});
})

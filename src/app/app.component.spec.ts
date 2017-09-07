// 1. Import ComponentFixture, HttpModule, JokeComponent and JokeService
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

describe('AppComponent', () => {
	// 2. create fixture variable typed as ComponentFixture<AppComponent>
	let fixture: ComponentFixture<AppComponent>;
	// 3. change component variable and typed as AppComponent
	let component: AppComponent;
	let truly: boolean = true;

	// 4. make declaration, imports and providers inside your async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			declarations: [AppComponent, JokeComponent],
			providers: [JokeService]
		}).compileComponents();
	}));

	// 5. Create a sync beforeEach, and make the appropriate configuration inside it
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('should evaluate truly variable to return true', () => {
		// expect(truly).toBeTruthy();
		expect(truly).toBe(true);
	});

	it('should have as title "Chuck Norris Jokes"', () => {
		expect(component.title).toEqual('Chuck Norris Jokes');
	});
})
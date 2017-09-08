import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { JokeComponent } from "./joke.component";
import { JokeService } from "../joke.service";
import { HttpModule } from "@angular/http";
import { CapitalizePipe } from "../capitalize.pipe";


describe('JokeComponent', () => {
	let jokeComponent: JokeComponent;
	let fixture: ComponentFixture<JokeComponent>;
	let pipe: CapitalizePipe;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			declarations: [JokeComponent, CapitalizePipe],
			providers: [JokeService]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JokeComponent);
		jokeComponent = fixture.componentInstance;
		pipe = new CapitalizePipe();
	});

	it('should inject service into component', inject([JokeService], (jokeService: JokeService) => {
		jokeService.getJoke().subscribe(value => console.log(value));
	}));
});
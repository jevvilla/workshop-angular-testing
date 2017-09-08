# Your First Unit Test in Angular
Testing a `Pipe` sometimes is not an easy task, :clap: :clap: you did it so good :clap: :clap:. Now your `capitalize.pipe.spec.ts` file must be similar to this:

```js
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let myName = 'pEPiTO pEReZ';

  it('should evaluate first letter capitalized in string', () => {
      const pipe = new CapitalizePipe();
      expect(pipe.transform(myName)).toEqual('Pepito Perez');
  });
});

```
So far you have **6** SUCCESS `specs` and **0** failures :smiley: :smiley:
But we have `joke.component.ts` and `joke.service.ts` pending to test. Let's continue testing `joke.component.ts`

## Challenge #7

**TIP: Follow steps in order don't miss out on anything**
- Create a file inside app folder and name it `joke.component.spec.ts`.
- Import `inject`, `async`, `ComponentFixture`, `TestBed` from `'@angular/core/testing'`. **NOTE: Remember import Http, CapitalizePipe, JokeService and JokeComponent**.
- Create a structure for testing having in mind youo have to use `TestBed` to `configureTestingModule` and other important things. ***Hint: take a look how you did it in app.component.spec.ts***
- Declare a variable *(name it 'myName')* and makes equal to your name using random capital letters. e.g `let myName  = 'tHIs iS mY nAMe'`
- Inside the `it` create a new instance of `CapitalizePipe`
- Verify `Pipe` actually transform `myName` variable. ***Hint: use transform CapitalizePipe method and pass it `myName` as parameter. It should return a string first letter capitalized ***


### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/7#your-first-unit-test-in-angular)

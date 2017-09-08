# Your First Unit Test in Angular
Testing a `Pipe` sometimes is not a easy task, :clap: :clap: you did it so good :clap: :clap:. Now your `capitalize.pipe.spec.ts` file must be similar to this:

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

Before start to test `Pipe` let's use it to understand what this `Pipe` is performing. Go to `joke.component.ts` and right below h6 element add  ` <h5>{{joke | capitalize}}</h5>`.
All `specs` are going to fail after this change, to fix them just have to ` import { CapitalizePipe } from './capitalize.pipe';`  and add `CapitalizePipe` to decalrations array in `app.component.spec.ts`, run your app and see results in browser. Do you notice what `capitalize` Pipe does?

## Challenge #6

**TIP: Follow steps in order don't miss out on anything**
- Create a file inside app folder and named `capitalize.pipe.spec.ts`.
- Import `CapitalizePipe` inside file you just create.
- Create a basic structure for testing You only need to use `describe` and `spec` (`it`). **NOTE: No need to use TestBed**
- Declare a variable *(name it 'myName')* and makes equal to your name using random capital letters. e.g `let myName  = 'tHIs iS mY nAMe'`
- Inside the `it` create a new instance of `CapitalizePipe`
- Verify `Pipe` actually transform `myName` variable. ***Hint: use transform CapitalizePipe method and pass it `myName` as parameter. It should return a string first letter capitalized ***


### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/7#your-first-unit-test-in-angular)

# Your First Unit Test in Angular

Before starting making tests, it is a good idea to have in mind some concepts and terminology.

## 1. Jasmine

Jasmine is an open source JavaScript framework for testing, in general, Jasmine attempts to describe tests in a human readable format so that non-technical people can understand what is being tested. Within its syntax you'll find some main methods or functions wich are essential for testing any application, those methods are:

### 1.Suites

`describe("A suite", function() { });`

Suite functions define what we call a ***Suite***. It takes a `string` title as the first parameter and a `function` as the second parameter. It contains one or more `specs`. We can understand `describe` function as a wrapper for our tests.

### 2.Specs

`it("contains spec with an expectation", function() { });`

Spec functions define individual ***Test Cases***. The `it` function can contain one or more `expectations`. It takes a `string` as the first parameter and a function that wraps the `expectations` as the second parameter.

### 3.Expectations and Matchers

`expect(true).toBe(true);`

Expectations and matches are the assertions that evaluate to either `true` or `false`. It is where the actual test reside.

## Example

Below there is a fragment of code where we show a basic testing setup to evaluate that the `expected` variable actually has `'Hello World'` string value.

```js
describe('Hello world', () => {

  let expected = "Hello world";

  it('says Hello world', () => {
    expect(expected).toEqual('Hello world');
  });
});
```

## Challenge #1

- First, in our `app` folder, create a file called `app.component.spec.ts`.
- Create a basic setup or structure for testing. You only need to use `describe` and `it`. 
- Make sure you read the example we previously used.
- Declare a `boolean` variable called **truly** and assign `true` to it.
- Create a `spec` to be sure the **truly** variable certainly evaluates to `true`.

**Note:** Do not worry about using `TestBed` and rare `imports`, it's just the structure. Piece of cake!, You got this! :cake: :smirk:

To ensure your snippet of code is ok, just have to run `ng test` in your terminal, if something goes wrong, the terminal will respond similar to  `Executed 1 of 1 (1 FAILED) ERROR`, otherwise the response will be similar to  `Executed 1 of 1 SUCCESS`. Also our chrome browser will show you a success clear message.

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/2#your-first-unit-test-in-angular) 

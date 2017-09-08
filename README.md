# Your First Unit Test in Angular

Before starting making tests, it is a good idea to have in mind some concepts and terminology.

## 1. Jasmine

Jasmine is an open source JavaScript framework for testing, in general, Jasmine attempts to describe tests in a human readable format so that non-technical people can understand what is being tested. Within its syntax you'll find some main methods or functions wich are essential for testing any application, those methods are:

- *Suites*-`describe(string, function)` function defines what we call a ***Suite***, this function takes a title `string` as first parameter and a function as second parameter containing one or more `specs`, we can understand `describe` function as a wrapper for our tests.  
- *Specs*-`it(string, function)` function defines individual ***Test Suite***, `it` function can contain one or more Expectations, and takes an `string` as first parameter and a function that wraps *Expectations* as second parameter.
- *Expectations*-`expect(actual)` is what we call an Expectation, are assertions that evaluate to true or false
- *Matchers*-`matcher(expected)` is what we call a Matcher. It does a boolean comparison with the expected value passed in vs the actual value passed to the expect function. You can find a complete list [here](https://github.com/JamieMason/Jasmine-Matchers#matchers)

Below there is a fragment of code where we show a basic testing Setup to evaluate that `expected` variable actually has `'Hello World' string` value.

```js
describe('Hello world', () => {

  let expected = "Hello world";

  it('says Hello world', () => {
    expect(expected)
        .toEqual('Hello world');
  });
});
```

## Challenge #1

- First, in our `app` folder, create a file called `app.component.spec.ts`.
- You only need to use `describe` and `it`. 
- Make sure you read the example we previously used.
- Declare a `boolean` variable called **truly** and assign `true` to it.
- Create a `spec` to be sure the **truly** variable certainly evaluates to `true`.

**Note:** Do not worry about using `TestBed` and rare `imports`, it's just the structure. Piece of cake!, You got this! :cake: :smirk:

To ensure your snippet of code is ok, just have to run `ng test` in your terminal, if something goes wrong, the terminal will respond similar to  `Executed 1 of 1 (1 FAILED) ERROR`, otherwise the response will be similar to  `Executed 1 of 1 SUCCESS`. Also our chrome browser will show you a success clear message.

### [Take next challenge >>](https://github.com/jevvilla/Workshop-ATesting/tree/2#your-first-unit-test-in-angular) 

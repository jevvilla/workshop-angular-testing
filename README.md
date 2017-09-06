# Your First Unit Test in Angular

In this workshop we'll cover the most common unit test in Angular Applications, We'll learn some basics by doing testing to Components, Services and Pipes. Hope you enjoy :blush:

During whole workshop we will work on  `Workshop-ATesting` application, which very basic app about consuming a random Chuck Norris Jokes API and result is displayed on screen.

## 1. Download or clone this Repo

After downloading or cloning the app, you have to install all its dependencies running `npm install`, this process can take a couple of minutes, so.. go for some coffee and wait :coffee:

## 2. Run Application

once all depencecies've been installed, its time to run our application, simply run `ng s -o` and after seconds app will be served in `localhost:4200`

# A few theory :book: :books:
Before starting making tests, it is a good idea to have in mind some concepts and terminology.

## 1. Jasmine
Jasmine is an open source JavaScript framework for testing  that uses behaviour-driven notation resulting in a fluent and improved testing, in general, Jasmine attempts to describe tests in a human readable format so that non-technical people can understand what is being tested.
Within its sintax we'll find some main methods or functions wich are essential for testing any application, those methods are:

- Suites-`describe(string, function)` function defines what we call a <i>Test Suite</i>, this function takes a title as `string` and a function as second parameter contaning one or more specs, we can understand `describe` function as a wrapper for our test.  
- Specs-`it(string, function)` function defines individual <i>Test Spec</i>, `it` function can contain one or more Expectations, and takes `string` as title and a function that wraps Expectations.
- Expectations-`expect(actual)` expression is what we call an Expectation, are assertions that evaluate to true or false
- Matchers-`matcher(expected)` expression is what we call a Matcher. It does a boolean comparison with the expected value passed in vs the actual value passed to the expect function. You can find a complete list [here](https://github.com/JamieMason/Jasmine-Matchers#matchers)

## 2. Setup
In order to test any application feature we need to perform some setup, sometimes we need to create some test objects before test or we need to execute an activity after a test, Jasmine provide us a few functions to perform these activities.
You must be wondering, :thinking: is this the only thing I have to configure? the answer is yes, Angular CLI does the hard work for us. isn't that cool? :sunglasses:
- <b>beforeAll:</b> This function is called once, <i><b>before</b></i> all the specs in `describe` test suite are run.
- <b>afterAll:</b> This function is called once <i><b>after</b></i> all the specs in a test suite are finished.
- <b>beforeEach:</b> This function is called <i><b>before each</b></i> test specification, `it` function, has been run.
- <b>afterEach:</b> This function is called <i><b>after each</b></i> test specification has been run.

Below there is a fragment of code where we show a basic Setup example to evaluate that `helloWorld()` function actually returns a `'Hello World' string`

```js
describe('Hello world', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Hello World";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
	// suppose helloWorld() function returns a 'Hello World' string
    expect(helloWorld())
        .toEqual(expected);
  });
});
```
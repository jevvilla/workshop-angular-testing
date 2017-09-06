# Your First Unit Test in Angular

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
- <b>beforeAll:</b> This function is called once, <i><b>before</b></i> all the specs in `describe` test suite are run.
- <b>afterAll:</b> This function is called once <i><b>after</b></i> all the specs in a test suite are finished.
- <b>beforeEach:</b> This function is called <i><b>before each</b></i> test specification, `it` function, has been run.
- <b>afterEach:</b> This function is called <i><b>after each</b></i> test specification has been run.
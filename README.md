# Your First Unit Test in Angular

Before starting making tests, it is a good idea to have in mind some concepts and terminology.

## 1. Jasmine
Jasmine is an open source JavaScript framework for testing  that uses behaviour-driven notation resulting in a fluent and improved testing, in general, Jasmine attempts to describe tests in a human readable format so that non-technical people can understand what is being tested.
Within its sintax we'll find some main methods or functions wich are essential for testing any application, those methods are:

- Suites-`describe(string, function)` function defines what we call a <i>Test Suite</i>, this function takes a title as `string` and a function as second parameter contaning one or more specs, we can understand `describe` function as a wrapper for our test.  
- Specs-`it(string, function)` function defines individual <i>Test Spec</i>, `it` function can contain one or more Expectations, and takes `string` as title anf a function that wraps Expectations.
- Expectations-`expect(string, function)` expression is what we call an Expectation, are assertions that evaluate to true or false
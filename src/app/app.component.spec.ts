// 1. Create a basic testing structure using what you think it's necessary
describe('AppComponent', () => {

  // 2. declare a boolean variable called truly
  const truly = true;

  // 3. Evaluate truly variable, be sure its value is true
  it('should evaluate truly variable to return true', () => {
    expect(truly).toBe(true);
    // or expect(truly).toBeTruthy();
  });
});

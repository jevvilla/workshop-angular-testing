# Your First Unit Test in Angular

## Challenge #1
- First, in our `app` folder, create a file called `app.component.spec.ts`.
- Based on Setup we talked earlier, let´s code a basic structure of testing inside the file just created.`describe`, `beforeEach`, `afterEach`, `it`, `expect` functions can be used if you consider all or some of them are necessary.
- Declare a `boolean` variable called <b>truly<b> and assign `true` to it.
- Create a `spec` to be sure <b>truly<b> variable certainly evaluates `true`.

<br><b>Note: </b> Do not worry about using `TestBed` and rare `imports`, it's just the structure. Piece of cake, right!? :cake: :smirk:

Ensure your snippet of code it's ok, just have to run `ng test` in your terminal, if something goes wrong terminal will respond similar to  `Executed 1 of 1 (1 FAILED) ERROR`, on the other hand everything is ok, response will be similar to  `Executed 1 of 1 SUCCESS`, besides our chrome navigator will shows us a very obvious and clear message.
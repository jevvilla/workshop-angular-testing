import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let myName = 'pEPiTO pEReZ';

  it('should evaluate first letter capitalized in string', () => {
      const pipe = new CapitalizePipe();
      expect(pipe.transform(myName)).toEqual('Pepito Perez ');
  });
});

import { NorrisWorkshopPage } from './app.po';

describe('norris-workshop App', () => {
  let page: NorrisWorkshopPage;

  beforeEach(() => {
    page = new NorrisWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

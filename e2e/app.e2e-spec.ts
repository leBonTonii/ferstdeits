import { FerstdeitsPage } from './app.po';

describe('ferstdeits App', function() {
  let page: FerstdeitsPage;

  beforeEach(() => {
    page = new FerstdeitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

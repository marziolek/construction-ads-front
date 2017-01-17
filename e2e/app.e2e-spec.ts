import { ConstructionAdsFrontPage } from './app.po';

describe('construction-ads-front App', function() {
  let page: ConstructionAdsFrontPage;

  beforeEach(() => {
    page = new ConstructionAdsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

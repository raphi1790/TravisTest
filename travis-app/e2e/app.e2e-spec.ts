import { TravisAppPage } from './app.po';

describe('travis-app App', function() {
  let page: TravisAppPage;

  beforeEach(() => {
    page = new TravisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

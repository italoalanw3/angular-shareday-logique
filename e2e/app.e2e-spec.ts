import { SharedayPage } from './app.po';

describe('shareday App', () => {
  let page: SharedayPage;

  beforeEach(() => {
    page = new SharedayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

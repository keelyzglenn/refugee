import { RefugeeAppPage } from './app.po';

describe('refugee-app App', () => {
  let page: RefugeeAppPage;

  beforeEach(() => {
    page = new RefugeeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

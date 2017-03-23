import { AngularOktaExamplePage } from './app.po';

describe('angular-okta-example App', () => {
  let page: AngularOktaExamplePage;

  beforeEach(() => {
    page = new AngularOktaExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

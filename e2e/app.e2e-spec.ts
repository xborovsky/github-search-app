import { GithubSearchAppPage } from './app.po';

describe('github-search-app App', function() {
  let page: GithubSearchAppPage;

  beforeEach(() => {
    page = new GithubSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

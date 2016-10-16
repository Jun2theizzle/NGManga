import { NGMangaPage } from './app.po';

describe('ngmanga App', function() {
  let page: NGMangaPage;

  beforeEach(() => {
    page = new NGMangaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

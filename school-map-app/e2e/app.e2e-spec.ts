import { SchoolMapAppPage } from './app.po';

describe('school-map-app App', () => {
  let page: SchoolMapAppPage;

  beforeEach(() => {
    page = new SchoolMapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

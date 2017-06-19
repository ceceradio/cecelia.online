import { SatsukitvNg4Page } from './app.po';

describe('satsukitv-ng4 App', () => {
  let page: SatsukitvNg4Page;

  beforeEach(() => {
    page = new SatsukitvNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

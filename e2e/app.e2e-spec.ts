import { JssimuladoresPainelPage } from './app.po';

describe('jssimuladores-painel App', () => {
  let page: JssimuladoresPainelPage;

  beforeEach(() => {
    page = new JssimuladoresPainelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

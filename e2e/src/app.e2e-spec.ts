<<<<<<< HEAD
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
=======
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

<<<<<<< HEAD
  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('FrontendRVA2 app is running!');
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('AngularStarterProject app is running!');
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
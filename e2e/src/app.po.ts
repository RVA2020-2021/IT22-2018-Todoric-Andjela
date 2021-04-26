import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
=======
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
  }
}

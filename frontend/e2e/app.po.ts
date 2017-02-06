import { browser, element, by } from 'protractor';

export class FrontendPage {
  navigateTo(path? : string) {
    const _path = path || '/';
    return browser.get(_path);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

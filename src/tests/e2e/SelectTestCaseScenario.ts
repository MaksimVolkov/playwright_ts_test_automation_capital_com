import { expect, Page } from '@playwright/test';
import { ContentContainer, Forms } from '../../elements/Selectors';

export class SelectTestCaseScenario {
  private page: Page;
  private readonly contentContainer: typeof ContentContainer;
  private readonly logIn: typeof Forms.logIn;
  private readonly signUp: typeof Forms.signUp;

  constructor(page: Page) {
    this.page = page;
    this.contentContainer = ContentContainer;
    this.logIn = Forms.logIn;
    this.signUp = Forms.signUp;
  }
  async runTestFirstLevelScenario(testCase: any) {
    //
    const container = this.contentContainer[testCase.testContainer];
    await this.page.waitForLoadState('load');
    const testElem = this.page.locator(container.buttons[testCase.testElement]);
    await expect(testElem).toBeVisible();
    await testElem.click();
    await this.page.waitForSelector(this.signUp.signUpBlock);
    const signUpModal = this.page.locator(this.signUp.signUpBlock);
    const logInModal = this.page.locator(this.logIn.logInBlock);
    const currentUrl = this.page.url();
    console.log(signUpModal + ' | ' + logInModal + ' | ' + currentUrl);
    console.log(await signUpModal.isVisible(), await logInModal.isVisible());
    //
    if ((await signUpModal.count()) === 1 || currentUrl.includes('/trading/signup')) {
      console.log(`%c modal form SIGNUP is visible %c`, 'color: yellow; font-weight: bold;', 'color: inherit;');
      return true;
    } else if ((await logInModal.count()) === 1 || currentUrl.includes('/trading/login')) {
      console.log('%c modal form LOGIN is visible %c', 'color: yellow; font-weight: bold;', 'color: inherit;');
      return true;
    } else {
      console.log('%c modal forms is not visible %c', 'color: orange; font-weight: bold;', 'color: inherit;');
      return false;
    }
    // return await testElem.count();
  }
  async runTestSecondLevelScenario(testCase: any) {
    const testFocusBlock = this.contentContainer[testCase.testElement];
    return testFocusBlock.isVisible();
  }
  async getLinkListFromSidebar() {
    return true;
  }
}

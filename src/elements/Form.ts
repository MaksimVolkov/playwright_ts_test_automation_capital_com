import { Page } from '@playwright/test';
import { Forms } from './Selectors';

export class Form {
  private readonly page: Page;
  private readonly activeForm: typeof Forms.activeForm;
  private readonly formLogIn: typeof Forms.logIn;
  private readonly formSignUp: typeof Forms.signUp;

  constructor(page: Page) {
    this.page = page;
    this.activeForm = Forms.activeForm;
    this.formLogIn = Forms.logIn;
    this.formSignUp = Forms.signUp;
  }
  async formIsVisible(): Promise<boolean> {
    await this.page.waitForSelector(this.activeForm);
    const signUpModal = this.page.locator(this.formSignUp.signUpBlock);
    const logInModal = this.page.locator(this.formLogIn.logInBlock);
    const currentUrl = this.page.url();

    // console.log(signUpModal + ' | ' + logInModal + ' | ' + currentUrl);
    // console.log(await signUpModal.isVisible(), await logInModal.isVisible());

    const isSignUpVisible = (await signUpModal.count()) === 1 || currentUrl.includes('/trading/signup');
    const isLogInVisible = (await logInModal.count()) === 1 || currentUrl.includes('/trading/login');

    if (isSignUpVisible) {
      await this.page.locator(this.formSignUp.cancelButton).click();
      console.log(`%c modal form SIGNUP is visible %c`, 'color: green; font-weight: bold;', 'color: inherit;');
    } else if (isLogInVisible) {
      await this.page.locator(this.formLogIn.cancelButton).click();
      console.log('%c modal form LOGIN is visible %c', 'color: green; font-weight: bold;', 'color: inherit;');
    } else {
      console.log('%c modal FORMS IS NOT visible %c', 'color: orange; font-weight: bold;', 'color: inherit;');
    }

    return isSignUpVisible || isLogInVisible;
  }
  async isVisibleSignUp(): Promise<void> {
    // TODO add
  }
  async isVisibleLogIn(): Promise<void> {
    // TODO add
  }
  async signUp(): Promise<void> {
    // TODO add
  }
  async logIn(): Promise<void> {
    // TODO add
  }
  async logOut(): Promise<void> {
    // TODO add
  }
}

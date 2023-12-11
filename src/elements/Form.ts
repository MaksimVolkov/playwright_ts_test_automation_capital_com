import { Page } from '@playwright/test';
import { Forms } from './Selectors';

export class Form {
  private readonly page: Page;
  private readonly formLogIn: typeof Forms.logIn.logInBlock;
  private readonly formSignUp: typeof Forms.signUp.signUpBlock;

  constructor(page: Page) {
    this.page = page;
    this.formLogIn = Forms.logIn.logInBlock;
    this.formSignUp = Forms.signUp.signUpBlock;
  }
  async formIsVisible(): Promise<boolean> {
    await this.page.waitForSelector(this.formSignUp);
    const signUpModal = this.page.locator(this.formSignUp);
    const logInModal = this.page.locator(this.formLogIn);
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
  }
  public async isVisibleSignUp(): Promise<void> {
    // TODO add
  }
  public async isVisibleLogIn(): Promise<void> {
    // TODO add
  }
  public async signUp(): Promise<void> {
    // TODO add
  }
  public async logIn(): Promise<void> {
    // TODO add
  }
  public async logOut(): Promise<void> {
    // TODO add
  }
}

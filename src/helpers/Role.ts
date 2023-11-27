import { expect, Page } from '@playwright/test';
import { Selectors } from '../elements/Selectors';
import 'dotenv/config';
const { logIn } = Selectors.forms;
const { buttonLogIn, buttonMyAccount, buttonLogout } = Selectors.header.buttons;
export class Role {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Setup role
   *
   * @param {string} role - value: Auth, UnAuth, NotReg
   */
  public async setup(role: string): Promise<void> {
    await this.page.goto('/'); // go to main page
    switch (role) {
      case 'Auth':
        await this.setupForAuthorizedUser();
        break;
      case 'UnAuth':
        await this.setupForUnauthorizedUser();
        break;
      case 'NotReg':
        await this.setupForNotRegisteredUser();
        break;
    }
  }

  public async setupForAuthorizedUser(): Promise<void> {
    await this.page.goto('/'); // go to main page
    await this.page.waitForLoadState('load');
    await this.page.locator(buttonLogIn).click();
    await this.page.waitForSelector(logIn.logInBlock);

    const modalIsVisible = this.page.locator(logIn.logInBlock);
    if (modalIsVisible !== null) {
      const title = await this.page.locator(logIn.titleH1).innerText(); // getting the title of the login form
      expect(`${title}`).toBe('Login'); // checking the title
      const emailField = this.page.locator(logIn.emailField); // getting the email field
      const passwordField = this.page.locator(logIn.passwordField); // getting the password field

      await emailField.fill(process.env.LOGIN!); // fill in the login input field
      // expect(emailField.getAttribute('value')).toBe(process.env.LOGIN!); // checking the login input field

      await passwordField.fill(process.env.PASSWORD!); // fill in the password entry field
      // expect(passwordField.inputValue()).toBe(process.env.PASSWORD!); // checking the password entry field
      // TODO add checkbox steps
      // const checkbox = this.page.locator(logIn.checkbox); // checkbox - "Log me out after 7 days"

      const submitButton = this.page.locator(logIn.submitButton); // getting the submit button
      await submitButton.click();
      await this.page.waitForURL(process.env.PLATFORM!);
      await this.page.waitForLoadState('load');
      await this.page.goto('/'); // go to main page
      await this.page.waitForLoadState('load');
    }
  }

  public async setupForUnauthorizedUser(): Promise<void> {
    await this.setupForAuthorizedUser();
    const openMyAccount = this.page.locator(buttonMyAccount); // getting the submit button
    await openMyAccount.click();
    const logoutMyAccount = this.page.locator(buttonLogout); // getting the submit button
    await logoutMyAccount.click({ timeout: 5000 });
    await this.page.waitForLoadState('load');
  }

  public async setupForNotRegisteredUser(): Promise<void> {
    await this.page.context().clearCookies();
    await this.page.goto('/'); // go to main page
    await this.page.waitForURL(process.env.MAIN_URL!);
  }
}

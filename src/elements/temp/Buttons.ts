import { Page } from '@playwright/test';

export class Buttons {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Log In button from the Header
   *
   * @returns {string} selector - Returns the required element selector.
   */
  getBtnHeaderLogIn(): string {
    return `a[data-type='btn_header_login']`;
  }

  /**
   * Sign Up button from the Header
   *
   * @returns {string} selector - Returns the required element selector.
   */
  getBtnHeaderSignUp(): string {
    return `a.cc-header__btn.js_signup`;
  }
}

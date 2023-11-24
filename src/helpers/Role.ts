import { Page } from '@playwright/test';

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
    // process.env.LOGIN
    // process.env.PASSWORD
    // TODO add steps
  }

  public async setupForUnauthorizedUser(): Promise<void> {
    await this.page.goto('/'); // go to main page
    // TODO add steps
  }

  public async setupForNotRegisteredUser(): Promise<void> {
    await this.page.context().clearCookies();
    await this.page.goto('/'); // go to main page
  }
}

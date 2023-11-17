import { Page } from '@playwright/test';

export class Precondition {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // AuthorizedUser
  public async setupForAuthorizedUser(): Promise<void> {
    await this.page.goto('/'); // go to main page
    // TODO add steps
  }

  // UnauthorizedUser
  public async setupForUnauthorizedUser(): Promise<void> {
    await this.page.goto('/'); // go to main page
    // TODO add steps
  }

  // NotRegisteredUser
  public async setupForNotRegisteredUser(): Promise<void> {
    await this.page.goto('/'); // go to main page
    // TODO add steps
  }
}

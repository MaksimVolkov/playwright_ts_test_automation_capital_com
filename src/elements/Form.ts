import { Page } from '@playwright/test';

export class Form {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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

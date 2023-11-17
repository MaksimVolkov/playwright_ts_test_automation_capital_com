import { Page } from '@playwright/test';

export class Buttons {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

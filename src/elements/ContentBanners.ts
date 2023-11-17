import { Page } from '@playwright/test';

export class ContentBanners {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

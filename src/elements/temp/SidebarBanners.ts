import { Page } from '@playwright/test';

export class SidebarBanners {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
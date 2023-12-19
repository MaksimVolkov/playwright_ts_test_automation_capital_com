import { Locator, Page } from '@playwright/test';
import { Form } from './Form';
import { ContentContainer } from './Selectors';

export class StickyBar {
  private page: Page;
  private form: Form;
  private stickyBar: { buttons: { btnGetStarted: string }; parentBlock: string; productLink: string };
  private parentBlock: Locator;
  private productLink: Locator;
  private btnGetStarted: Locator;
  constructor(page: Page) {
    this.page = page;
    this.form = new Form(page);
    this.stickyBar = ContentContainer.stickyBar;
    this.parentBlock = this.page.locator(this.stickyBar.parentBlock);
    this.productLink = this.page.locator(this.stickyBar.productLink);
    this.btnGetStarted = this.page.locator(this.stickyBar.buttons.btnGetStarted);
  }

  async checkElement() {}

  async isVisibleElement(parentBlock: any, focusElement: any) {
    return (await parentBlock.isVisible()) && (await focusElement.isVisible());
  }

  async clickBtn(focusElement: any) {
    await focusElement.click();
    return await this.form.formIsVisible();
  }
}

import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';

export class MainBanner {
  page: Page;
  private mainBanner: { buttons: { btnStartTrading: string; btnTryDemo: string }; banner: string };
  private readonly banner: Locator;
  private readonly btnTryDemo: Locator;
  private readonly btnStartTrading: Locator;
  private form: Form;
  constructor(page: Page) {
    this.page = page;
    this.mainBanner = ContentContainer.mainBanner;
    this.banner = this.page.locator(this.mainBanner.banner);
    this.btnStartTrading = this.page.locator(this.mainBanner.buttons.btnStartTrading);
    this.btnTryDemo = this.page.locator(this.mainBanner.buttons.btnTryDemo);
    this.form = new Form(page);
  }
  async checkMainBanner() {
    const banner = this.banner;
    const btnStartTrading = this.btnStartTrading;
    const btnTryDemo = this.btnTryDemo;
    return (await this.isVisibleElem(banner, btnStartTrading, btnTryDemo))
      ? await this.clickBtn(btnStartTrading, btnTryDemo)
      : 'The Main Banner and elements is not Visible';
  }
  async isVisibleElem(banner: Locator, btnStartTrading: Locator, btnTryDemo: Locator) {
    return (await banner.isVisible()) && (await btnStartTrading.isVisible()) && (await btnTryDemo.isVisible());
  }
  async clickBtn(btnStartTrading: Locator, btnTryDemo: Locator) {
    const isBtnOpenForm: any[] = [];

    await btnStartTrading.click();
    isBtnOpenForm.push(await this.form.formIsVisible());

    await btnTryDemo.click();
    isBtnOpenForm.push(await this.form.formIsVisible());

    return isBtnOpenForm[0] && isBtnOpenForm[1];
  }
}

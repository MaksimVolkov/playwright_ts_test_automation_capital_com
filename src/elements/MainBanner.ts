import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';

export class MainBanner {
  page: Page;
  private mainBanner: { buttons: { btnStartTrading: string; btnTryDemo: string }; parentBlock: string };
  private readonly parentBlock: Locator;
  private readonly btnTryDemo: Locator;
  private readonly btnStartTrading: Locator;
  private form: Form;
  constructor(page: Page) {
    this.page = page;
    this.form = new Form(page);
    this.mainBanner = ContentContainer.mainBanner;
    this.parentBlock = this.page.locator(this.mainBanner.parentBlock);
    this.btnStartTrading = this.page.locator(this.mainBanner.buttons.btnStartTrading);
    this.btnTryDemo = this.page.locator(this.mainBanner.buttons.btnTryDemo);
  }
  async checkElement() {
    const banner = this.parentBlock;
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
    console.log(
      `%c btnStartTrading: ${isBtnOpenForm[0]} btnTryDemo: ${isBtnOpenForm[1]} %c`,
      'color: orange; font-weight: bold;',
      'color: inherit;',
    );
    return isBtnOpenForm[0] && isBtnOpenForm[1];
  }
}

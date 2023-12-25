import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';
import { step } from '../decorators/allureStepDecorator';

export class ContWdgGoToMarket {
  private page: Page;
  private wdgGoToMarket: { buttons: { btnGoToAllCommodities: string; btnStartTrading: string }; parentBlock: string };
  private readonly parentBlock: Locator;
  private readonly btnStartTrading: Locator;
  private readonly btnGoToAllCommodities: Locator;
  private form: Form;
  constructor(page: Page) {
    this.page = page;
    this.wdgGoToMarket = ContentContainer.contWdgGoToMarket;
    this.parentBlock = this.page.locator(this.wdgGoToMarket.parentBlock);
    this.btnStartTrading = this.page.locator(this.wdgGoToMarket.buttons.btnStartTrading);
    this.btnGoToAllCommodities = this.page.locator(this.wdgGoToMarket.buttons.btnGoToAllCommodities);
    this.form = new Form(page);
  }
  @step
  async checkElement() {
    const parentBlock = this.parentBlock;
    const btnStartTrading = this.btnStartTrading;
    const btnGoToAllCommodities = this.btnGoToAllCommodities;
    return (await this.isVisibleElem(parentBlock, btnStartTrading, btnGoToAllCommodities))
      ? await this.clickBtn(btnStartTrading)
      : false; //'The ContWdgGoToMarket and elements is not Visible'
  }
  @step
  async isVisibleElem(parentBlock: Locator, btnStartTrading: Locator, btnGoToAllCommodities: Locator) {
    return (
      (await parentBlock.count()) > 0 &&
      (await btnStartTrading.count()) > 0 &&
      (await btnGoToAllCommodities.count()) > 0
    );
  }
  @step
  async clickBtn(focusElement: any) {
    await focusElement.click();
    return await this.form.formIsVisible();
  }
}

import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';

export class ContWdgGoToMarket {
  private page: Page;
  private wdgGoToMarket: { buttons: { btnGoToAllCommodities: string; btnStartTrading: string }; wdgBlock: string };
  private readonly wdgBlock: Locator;
  private readonly btnStartTrading: Locator;
  private readonly btnGoToAllCommodities: Locator;
  private form: Form;
  constructor(page: Page) {
    this.page = page;
    this.wdgGoToMarket = ContentContainer.contWdgGoToMarket;
    this.wdgBlock = this.page.locator(this.wdgGoToMarket.wdgBlock);
    this.btnStartTrading = this.page.locator(this.wdgGoToMarket.buttons.btnStartTrading);
    this.btnGoToAllCommodities = this.page.locator(this.wdgGoToMarket.buttons.btnGoToAllCommodities);
    this.form = new Form(page);
  }
  async checkContWdgGoToMarket() {
    const wdgBlock = this.wdgBlock;
    const btnStartTrading = this.btnStartTrading;
    const btnGoToAllCommodities = this.btnGoToAllCommodities;
    return (await this.isVisibleElem(wdgBlock, btnStartTrading, btnGoToAllCommodities))
      ? await this.clickBtn(btnStartTrading)
      : false; //'The ContWdgGoToMarket and elements is not Visible'
  }
  async isVisibleElem(wdgBlock: Locator, btnStartTrading: Locator, btnGoToAllCommodities: Locator) {
    return (
      (await wdgBlock.count()) > 0 && (await btnStartTrading.count()) > 0 && (await btnGoToAllCommodities.count()) > 0
    );
  }
  async clickBtn(btnStartTrading: any) {
    const arrBtn: any[] = [await btnStartTrading];
    const isBtnOpenForm: any[] = [];
    for (let i = 0; i < arrBtn.length; i++) {
      await arrBtn[i].click();
      const formResult = await this.form.formIsVisible();
      isBtnOpenForm.push(formResult);
    }
    return isBtnOpenForm[0] && isBtnOpenForm[1];
  }
}

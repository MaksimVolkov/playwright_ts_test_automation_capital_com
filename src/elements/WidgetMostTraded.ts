import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';
import { getRandomNumber } from '../helpers/funcHelpers';

export class WidgetMostTraded {
  private page: Page;
  private widget: {
    buttons: {
      btnTradeAll: string;
      btnTrade: (numberChild: number) => string;
    };
    parentBlock: string;
  };
  private readonly widgetBlock: Locator;
  private readonly widgetBtnAll: Locator;
  private readonly btnTrade: (numberChild: number) => Locator;
  private form: Form;

  constructor(page: Page) {
    this.page = page;
    this.widget = ContentContainer.widget;
    this.widgetBlock = this.page.locator(this.widget.parentBlock);
    this.widgetBtnAll = this.page.locator(this.widget.buttons.btnTradeAll);
    this.btnTrade = (numberChild: number) => this.page.locator(this.widget.buttons.btnTrade(numberChild));
    this.form = new Form(page);
  }
  async checkElement() {
    const widgetBtnAll = this.widgetBtnAll;
    const isVisibleElemAndChild = await this.isVisibleElem(this.widgetBlock, widgetBtnAll);
    const clickBtnTrade = await this.clickBtn(widgetBtnAll);
    return isVisibleElemAndChild && clickBtnTrade;
  }
  async isVisibleElem(widget: any, widgetBtnAll: any) {
    return (await widget.isVisible()) && (await widgetBtnAll.count()) > 2;
  }

  async clickBtn(widgetBtnAll: any) {
    const arrBtn: number[] = getRandomNumber(await widgetBtnAll.count(), 2);
    const isBtnOpenForm: any[] = [];
    for (let i = 0; i < arrBtn.length; i++) {
      const btn = this.btnTrade(arrBtn[i]);
      console.log(`%c ${btn} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
      await btn.click();
      const formResult = await this.form.formIsVisible();
      isBtnOpenForm.push(formResult);
    }
    return isBtnOpenForm[0] && isBtnOpenForm[1];
  }
}

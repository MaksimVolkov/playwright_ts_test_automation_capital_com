import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';
import { getRandomNumber } from '../helpers/funcHelpers';
import { step } from '../decorators/allureStepDecorator';

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
  @step
  async checkElement() {
    await this.page.waitForLoadState('load');
    const widgetBtnAll = this.widgetBtnAll;
    const isVisibleElemAndChild = await this.isVisibleElem(this.widgetBlock, widgetBtnAll);
    const clickBtnTrade = await this.clickBtn(widgetBtnAll);
    return isVisibleElemAndChild && clickBtnTrade;
  }
  @step
  async isVisibleElem(widget: any, widgetBtnAll: any) {
    return (await widget.isVisible()) && (await widgetBtnAll.count()) > 2;
  }
  @step
  async clickBtn(widgetBtnAll: any) {
    const widgetBtnAllCount = await widgetBtnAll.count();
    const arrBtn: number[] = getRandomNumber(widgetBtnAllCount, 2);
    const isBtnOpenForm: any[] = [];
    console.log(
      `%c widgetBtnAllCount: ${widgetBtnAllCount}, arrBtn: ${arrBtn} %c`,
      'color: brown; font-weight: bold;',
      'color: inherit;',
    );
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

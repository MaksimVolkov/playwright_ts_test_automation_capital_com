import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';

export class WidgetMostTraded {
  private page: Page;
  private widget: {
    buttons: {
      btnTradeAll: string;
      btnTrade: (numberChild: number) => string;
    };
    wdgMostTraded: string;
  };
  private readonly widgetBlock: Locator;
  private readonly widgetBtnAll: Locator;
  private readonly btnTrade: (numberChild: number) => Locator;
  private form: Form;

  constructor(page: Page) {
    this.page = page;
    this.widget = ContentContainer.widget;
    this.widgetBlock = this.page.locator(this.widget.wdgMostTraded);
    this.widgetBtnAll = this.page.locator(this.widget.buttons.btnTradeAll);
    this.btnTrade = (numberChild: number) => this.page.locator(this.widget.buttons.btnTrade(numberChild));
    this.form = new Form(page);
  }
  async checkWidgetMostTraded() {
    const widgetBtnAll = this.widgetBtnAll;
    const isVisibleElemAndChild = await this.isVisibleWidget(this.widgetBlock, widgetBtnAll);
    const clickBtnTrade = await this.clickBtnTrade(widgetBtnAll);
    return isVisibleElemAndChild && clickBtnTrade;
  }
  async isVisibleWidget(widget: any, widgetBtnAll: any) {
    return (await widget.isVisible()) && (await widgetBtnAll.count()) > 2;
  }

  async clickBtnTrade(widgetBtnAll: any) {
    const arrBtn: [number, number] = await this.randomTwoNumber(await widgetBtnAll.count());
    const isBtnOpenForm: any[] = [];
    for (let i = 0; i < arrBtn.length; i++) {
      const abv = this.btnTrade(arrBtn[i]);
      console.log(`%c ${abv} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
      await abv.click();
      const formResult = await this.form.formIsVisible();
      isBtnOpenForm.push(formResult);
    }
    // console.log(isBtnOpenForm[0], isBtnOpenForm[1]);
    // console.log(isBtnOpenForm[0] && isBtnOpenForm[1]);
    return isBtnOpenForm[0] && isBtnOpenForm[1];
  }

  async randomTwoNumber(maxNumber: number): Promise<[number, number]> {
    if (maxNumber < 2) throw new Error('The maximum number must be at least 2');
    const getRandomNumber = () => Math.floor(Math.random() * maxNumber) + 1;
    const randomNumber1 = getRandomNumber();
    let randomNumber2 = getRandomNumber();
    while (randomNumber2 === randomNumber1) {
      randomNumber2 = getRandomNumber();
    }
    console.log(`%c ${randomNumber1} | ${randomNumber2} %c`, 'color: red; font-weight: bold;', 'color: inherit;');

    return [randomNumber1, randomNumber2];
  }
}

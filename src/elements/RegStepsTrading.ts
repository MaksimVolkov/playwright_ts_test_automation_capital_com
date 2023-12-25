import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';
import { step } from '../decorators/allureStepDecorator';

export class RegStepsTrading {
  private page: Page;
  private form: Form;
  private regStepsTrading: { buttons: { btnCreateVerifyYourAccount: string }; parentBlock: string };
  private readonly regStepsTradingBlock: Locator;
  private readonly regStepsTradingBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.regStepsTrading = ContentContainer.regStepsTrading;
    this.regStepsTradingBlock = this.page.locator(this.regStepsTrading.parentBlock);
    this.regStepsTradingBtn = this.page.locator(this.regStepsTrading.buttons.btnCreateVerifyYourAccount);
    this.form = new Form(page);
  }
  @step
  async checkElement() {
    await this.page.waitForLoadState('load');
    const regStepsTradingBlock = this.regStepsTradingBlock;
    const regStepsTradingBtn = this.regStepsTradingBtn;
    const isVisibleElemAndChild = await this.isVisibleElement(regStepsTradingBlock, regStepsTradingBtn);
    const clickBtn = await this.clickBtn(regStepsTradingBtn);
    return isVisibleElemAndChild && clickBtn;
  }
  @step
  async isVisibleElement(parentBlock: any, focusElement: any) {
    const parentBlockIsVisible = await parentBlock.isVisible();
    const focusElementIsVisible = await focusElement.isVisible();
    return (await parentBlockIsVisible) && (await focusElementIsVisible);
  }
  @step
  async clickBtn(focusElement: any) {
    await focusElement.click();
    return await this.form.formIsVisible();
  }
}

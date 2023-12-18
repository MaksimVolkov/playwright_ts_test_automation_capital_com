import { Locator, Page } from '@playwright/test';
import { ContentContainer } from './Selectors';
import { Form } from './Form';

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
  async checkElement() {
    const regStepsTradingBlock = this.regStepsTradingBlock;
    const regStepsTradingBtn = this.regStepsTradingBtn;
    const isVisibleElemAndChild = await this.isVisibleElement(regStepsTradingBlock, regStepsTradingBtn);
    const clickBtn = await this.clickBtn(regStepsTradingBtn);
    return isVisibleElemAndChild && clickBtn;
  }
  async isVisibleElement(parentBlock: any, focusElement: any) {
    return (await parentBlock.isVisible()) && (await focusElement.isVisible());
  }

  async clickBtn(focusElement: any) {
    await focusElement.click();
    return await this.form.formIsVisible();
  }
}

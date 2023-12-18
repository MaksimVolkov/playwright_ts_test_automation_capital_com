import { expect, Page } from '@playwright/test';
import { ContentContainer, Forms } from '../elements/Selectors';
import { Form } from '../elements/Form';
import { WidgetMostTraded } from '../elements/WidgetMostTraded';
import { MainBanner } from '../elements/MainBanner';
import { ContWdgGoToMarket } from '../elements/ContWdgGoToMarket';
import { RegStepsTrading } from '../elements/RegStepsTrading';

export class SelectTestCaseScenario {
  private page: Page;
  private readonly contentContainer: typeof ContentContainer;
  private readonly logIn: typeof Forms.logIn;
  private readonly signUp: typeof Forms.signUp;
  private form: Form;
  private widget: WidgetMostTraded;
  private mainBanner: MainBanner;
  private contWdgGoToMarket: ContWdgGoToMarket;
  private regStepsTrading: RegStepsTrading;

  constructor(page: Page) {
    this.page = page;
    this.contentContainer = ContentContainer;
    this.form = new Form(page);
    this.widget = new WidgetMostTraded(page);
    this.mainBanner = new MainBanner(page);
    this.contWdgGoToMarket = new ContWdgGoToMarket(page);
    this.regStepsTrading = new RegStepsTrading(page);
    this.logIn = Forms.logIn;
    this.signUp = Forms.signUp;
  }
  async runTestFirstLevelScenario(testCase: any) {
    //
    const container = this.contentContainer[testCase.testContainer];
    await this.page.waitForLoadState('load');

    const mainBanner = await this.mainBanner.checkMainBanner();
    const contWdgGoToMarket = await this.contWdgGoToMarket.checkContWdgGoToMarket();
    const widget = await this.widget.checkWidgetMostTraded();
    const regStepsTrading = await this.regStepsTrading.checkElement();

    console.log(`%c MainBanner: ${mainBanner} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c ContWdgGoToMarket: ${contWdgGoToMarket} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c Widget: ${widget} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c RegStepsTrading: ${regStepsTrading} %c`, 'color: red; font-weight: bold;', 'color: inherit;');

    //TODO delete if else
    // console.log(widget);
    if (mainBanner && widget) {
      return mainBanner && widget;
    } else {
      const testElem = this.page.locator(container.buttons[testCase.testElement]);
      await expect(testElem).toBeVisible();
      await testElem.click();
      const formVisible = await this.form.formIsVisible();
      expect(formVisible).toBeTruthy();
      return testElem && formVisible;
    }
    // return await testElem.count();
  }
  async runTestSecondLevelScenario(testCase: any) {
    const testFocusBlock = this.contentContainer[testCase.testElement];
    return testFocusBlock.isVisible();
  }
  async getLinkListFromSidebar() {
    return true;
  }
}

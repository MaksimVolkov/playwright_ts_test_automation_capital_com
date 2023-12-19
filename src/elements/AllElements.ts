import { Page } from '@playwright/test';
import { Form } from './Form';
import { WidgetMostTraded } from './WidgetMostTraded';
import { MainBanner } from './MainBanner';
import { ContWdgGoToMarket } from './ContWdgGoToMarket';
import { RegStepsTrading } from './RegStepsTrading';

export class AllElements {
  private page: Page;
  private form: Form;
  private mainBanner: MainBanner;
  private contWdgGoToMarket: ContWdgGoToMarket;
  private regStepsTrading: RegStepsTrading;
  private widget: WidgetMostTraded;
  constructor(page: Page) {
    this.page = page;
    this.form = new Form(page);
    this.mainBanner = new MainBanner(page);
    this.contWdgGoToMarket = new ContWdgGoToMarket(page);
    this.regStepsTrading = new RegStepsTrading(page);
    this.widget = new WidgetMostTraded(page);
  }
  async letsCheck() {
    const mainBanner = await this.mainBanner.checkMainBanner();
    const contWdgGoToMarket = await this.contWdgGoToMarket.checkContWdgGoToMarket();
    const regStepsTrading = await this.regStepsTrading.checkElement();
    const widget = await this.widget.checkWidgetMostTraded();

    console.log(`%c MainBanner: ${mainBanner} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c ContWdgGoToMarket: ${contWdgGoToMarket} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c RegStepsTrading: ${regStepsTrading} %c`, 'color: red; font-weight: bold;', 'color: inherit;');
    console.log(`%c Widget: ${widget} %c`, 'color: red; font-weight: bold;', 'color: inherit;');

    return mainBanner && contWdgGoToMarket && regStepsTrading && widget;
  }
  async checkSpecificElement() {}
  async checkSpecificSet() {}
  async checkSpecificUserStory() {}
  async checkEverything() {}
}
// element check
// checking a specific set of elements
// checking a specific user story
// checking all user stories

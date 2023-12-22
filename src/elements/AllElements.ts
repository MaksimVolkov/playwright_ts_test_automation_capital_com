import { Page } from '@playwright/test';
import { WidgetMostTraded } from './WidgetMostTraded';
import { MainBanner } from './MainBanner';
import { ContWdgGoToMarket } from './ContWdgGoToMarket';
import { RegStepsTrading } from './RegStepsTrading';

export class AllElements {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    // this.classMainBanner = new MainBanner(page);
  }

  async mainBanner() {
    // return await this.classMainBanner.checkElement();
    const mainBanner = new MainBanner(this.page);
    return await mainBanner.checkElement();
  }
  async contWdgGoToMarket() {
    const contWdgGoToMarket = new ContWdgGoToMarket(this.page);
    return await contWdgGoToMarket.checkElement();
  }
  async regStepsTrading() {
    const regStepsTrading = new RegStepsTrading(this.page);
    return await regStepsTrading.checkElement();
  }
  async widget() {
    const widget = new WidgetMostTraded(this.page);
    return await widget.checkElement();
  }
}
// element check
// checking a specific set of elements
// checking a specific user story
// checking all user stories

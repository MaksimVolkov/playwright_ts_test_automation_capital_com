import { Page } from '@playwright/test';
import { WidgetMostTraded } from './WidgetMostTraded';
import { MainBanner } from './MainBanner';
import { ContWdgGoToMarket } from './ContWdgGoToMarket';
import { RegStepsTrading } from './RegStepsTrading';
import { StickyBar } from './StickyBar';

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
  async widgetMostTraded() {
    const widgetMostTraded = new WidgetMostTraded(this.page);
    return await widgetMostTraded.checkElement();
  }
  async stickyBar() {
    const stickyBar = new StickyBar(this.page);
    return await stickyBar.checkElement();
  }
}
// element check
// checking a specific set of elements
// checking a specific user story
// checking all user stories

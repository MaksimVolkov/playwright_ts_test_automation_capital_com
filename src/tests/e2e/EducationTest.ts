// EducationTest.ts

import { Role } from '../../helpers/Role';
import { Precondition } from '../../helpers/Precondition';
import { CheckElement } from '../../../black_box_in_a_dark_corner/CheckElement';
import { Page } from '@playwright/test';

export class EducationTest {
  private precondition: Precondition;
  private role: Role;
  private checkElement: CheckElement;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.precondition = new Precondition(page);
    this.role = new Role(page);
    this.checkElement = new CheckElement(page);
  }

  public async testStartTradingButton(country: string, language: string): Promise<boolean> {
    await this.role.setup('NotReg');
    await this.precondition.setup(country, language, 'education', 'commoditiesTrading');
    await this.checkElement.setupTest('11.02.03_01', '11.02.03', 'btnStartTrading', 'mainBanner', country, language, 1);
    const startTradingButton = this.page.locator('#startTradingButton');
    return await startTradingButton.isVisible();
  }
}

import { Locator, Page } from '@playwright/test';
import { ContentContainer } from '../elements/Selectors';
// import { Form } from '../elements/Form';
import { AllElements } from '../elements/AllElements';
import { getRandomNumber } from './funcHelpers';
import { step } from '../decorators/allureStepDecorator';

export class SelectTestCaseScenario {
  private readonly page: Page;
  private readonly allElements: AllElements;
  private readonly contentContainer: typeof ContentContainer;
  private sidebarLinks: Locator;
  private sidebarLinkList: {
    parentBlock: string;
    links: string;
    selectedLink: (numberChild: number) => string;
  };
  private readonly selectedLink: (numberChild: number) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.allElements = new AllElements(this.page);
    this.contentContainer = ContentContainer;
    this.sidebarLinkList = ContentContainer.sidebar.sidebarLinkList;
    this.sidebarLinks = this.page.locator(this.sidebarLinkList.links);
    this.selectedLink = (numberChild: number) => this.page.locator(this.sidebarLinkList.selectedLink(numberChild));
  }
  @step
  async runTestFirstLevelScenario(testCase: any) {
    //
    // const container = this.contentContainer[testCase.testContainer];
    // console.log(container);
    const result: any[] = [];

    const methodNames: Array<keyof AllElements> = [testCase.testContainer];
    // const methodNames: Array<keyof AllElements> = ['mainBanner', 'contWdgGoToMarket', 'regStepsTrading', 'widget'];

    for (const methodName of methodNames) {
      console.log(`%c starting class: ${methodName} %c`, 'color: brown; font-weight: bold;', 'color: inherit;');

      const resultData = await this.allElements[methodName]();
      console.log(`%c ${resultData} %c`, 'color: yellow; font-weight: bold;', 'color: inherit;');
      result.push(resultData);
    }

    for (const item of result) {
      console.log(`%c ${item} %c`, 'color: pink; font-weight: bold;', 'color: inherit;');
    }
    return !result.includes(false);
  }
  @step
  async runTestSecondLevelScenario(testCase: any) {
    // const container = this.contentContainer[testCase.testContainer];
    // console.log(container);

    const focusPageUrl = this.page.url();
    const result: any[] = [];
    // const arrBtn: number[] = getRandomNumber(await this.sidebarLinks.count());
    const childN = getRandomNumber(await this.sidebarLinks.count(), 3);
    for (let i = 0; i < 3; i++) {
      // const link = this.selectedLink(getRandomNumber(await this.sidebarLinks.count())[0]);
      const numberChild = childN[i] === 1 ? childN[i] + 1 : childN[i];

      const link = this.selectedLink(numberChild);
      const linkUrl = await link.getAttribute('href');
      await link.click();
      await this.page.waitForURL(`${linkUrl}`, { waitUntil: 'load' });

      // await this.page.waitForLoadState('load');
      // result.push(await this.allElements.letsCheck());

      const methodNames: Array<keyof AllElements> = [testCase.testContainer];
      // const methodNames: Array<keyof AllElements> = ['mainBanner', 'contWdgGoToMarket', 'regStepsTrading', 'widget'];

      for (const methodName of methodNames) {
        const resultData = await this.allElements[methodName]();
        console.log(`%c ${resultData} %c`, 'color: yellow; font-weight: bold;', 'color: inherit;');
        result.push(resultData);
      }

      console.log(`%c ${i} ${result} %c`, 'color: pink; font-weight: bold;', 'color: inherit;');
      await this.page.goBack();
      await this.page.waitForURL(`${focusPageUrl}`, { waitUntil: 'load' });
    }
    return !result.includes(false);
    // const testFocusBlock = this.contentContainer[testCase.testElement];
    // return testFocusBlock.isVisible();
  }
  @step
  async getLinkListFromSidebar() {
    return true;
  }
}

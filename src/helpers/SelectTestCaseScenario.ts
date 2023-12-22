import { Locator, Page } from '@playwright/test';
import { ContentContainer } from '../elements/Selectors';
// import { Form } from '../elements/Form';
import { AllElements } from '../elements/AllElements';
import { getRandomNumber } from './funcHelpers';

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
  async runTestFirstLevelScenario(testCase: any) {
    //
    const container = this.contentContainer[testCase.testContainer];
    console.log(container);
    const data: any[] = [];

    const methodNames: Array<keyof AllElements> = ['mainBanner', 'contWdgGoToMarket', 'regStepsTrading', 'widget'];
    for (const methodName of methodNames) {
      const resultData = await this.allElements[methodName]();
      console.log(`%c ${resultData} %c`, 'color: yellow; font-weight: bold;', 'color: inherit;');
      data.push(resultData);
    }

    for (const item of data) {
      console.log(`%c ${item} %c`, 'color: pink; font-weight: bold;', 'color: inherit;');
    }
    return !data.includes(false);
    // TODO delete
    // const test1 = await this.allElements.mainBanner();
    // const test2 = await this.allElements.regStepsTrading();
    // return test1 && test2;

    //
    // // console.log(widget);
    // if (mainBanner && widget) {
    //   return mainBanner && widget;
    // } else {
    //   const testElem = this.page.locator(container.buttons[testCase.testElement]);
    //   await expect(testElem).toBeVisible();
    //   await testElem.click();
    //   const formVisible = await this.form.formIsVisible();
    //   expect(formVisible).toBeTruthy();
    //   return testElem && formVisible;
    // }
    // return await testElem.count();
  }
  async runTestSecondLevelScenario(testCase: any) {
    const container = this.contentContainer[testCase.testContainer];
    console.log(container);
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
      console.log(`%c ${i} ${result} %c`, 'color: pink; font-weight: bold;', 'color: inherit;');
      await this.page.goBack();
      await this.page.waitForURL(`${focusPageUrl}`, { waitUntil: 'load' });
    }
    return result[0] && result[1] && result[2];
    // const testFocusBlock = this.contentContainer[testCase.testElement];
    // return testFocusBlock.isVisible();
  }
  async getLinkListFromSidebar() {
    return true;
  }
}

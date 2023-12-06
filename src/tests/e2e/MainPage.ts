import { Precondition } from '../../helpers/Precondition';
import { Role } from '../../helpers/Role';
import { SelectTestCaseScenario } from './SelectTestCaseScenario';

export class MainPage {
  private readonly page: any;
  private role: Role;
  private precondition: Precondition;
  private selectTestCaseScenario: SelectTestCaseScenario;

  constructor(page: any) {
    this.page = page;
    this.role = new Role(page);
    this.precondition = new Precondition(page);
    this.selectTestCaseScenario = new SelectTestCaseScenario(page);
  }

  async startTest({
    role,
    country,
    language,
    testCase,
  }: {
    role: string;
    country: string;
    language: string;
    testCase: any;
  }): Promise<boolean> {
    // Listening to console events
    // this.page.on('console', (msg: { type: () => any; text: () => any }) => {
    //   const type = msg.type();
    //   const text = msg.text();
    //
    //   if (type === 'log') {
    //     console.log(`%cLog message:%c ${text}`, 'color: green; font-weight: bold;', 'color: inherit;');
    //   } else if (type === 'error') {
    //     console.error(`%cError message:%c ${text}`, 'color: yellow; font-weight: bold;', 'color: inherit;');
    //   } else {
    //     // Other message types
    //     console.log(
    //       `%cConsole message of type ${type}:%c ${text}`,
    //       'color: blue; font-weight: bold;',
    //       'color: inherit;',
    //     );
    //   }
    // });
    //
    await this.role.setup(role);
    await this.precondition.setupCountryAndLanguage(country, language);
    await this.precondition.navigateToTestSection(testCase.testSection, testCase.testPart);
    return await this.testCaseScenarioSelector(testCase);
  }

  async testCaseScenarioSelector(testCase: any) {
    let result: any;
    testCase.level === 1
      ? (result = await this.selectTestCaseScenario.runTestFirstLevelScenario(testCase))
      : (result = await this.selectTestCaseScenario.runTestSecondLevelScenario(testCase));
    return result;
  }

  async setup() {
    // setting cookies before each test
    // await this.page.context().addCookies([
    //   { name: 'exampleCookie', value: 'exampleValue', domain: 'example.com' },
    // ]);
    //
  }
}

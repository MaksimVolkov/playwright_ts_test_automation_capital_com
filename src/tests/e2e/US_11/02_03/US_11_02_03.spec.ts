import { expect, test } from '@playwright/test';
import { MainPage } from '../../../../helpers/MainPage';
import { testParams } from './TestParams';
import { testCases } from './TestCases';

const licence: any = testParams.licence;

const titleAssembly = (
  us_id: string,
  testCase: string,
  country: string,
  licence: string,
  language: string,
  role: string,
  description: string,
) => {
  return (
    us_id.toUpperCase() +
    ' Test: ' +
    testCase +
    ' cty ' +
    country.toUpperCase() +
    '(' +
    licence +
    '), ' +
    ' lan: ' +
    language.toUpperCase() +
    ' role: ' +
    role +
    ' for: ' +
    description
  );
};

test.describe('US_11_02.03', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.setup();
  });

  /**
   * @params testParams.roles - Role USer: "authorized", "unauthorized", "unregistered"
   * @params testParams.countries - Country - Array of countries
   * @params testParams.languages - Language - Array of languages
   * @params testCases - Test Cases - A set of test cases that need to be checked
   * @params testCases - Test Cases - A set of test cases that need to be checked
   */
  for (const role of testParams.roles) {
    for (const country of testParams.countries) {
      for (const language of testParams.languages) {
        for (const testCase of testCases) {
          test(`${titleAssembly(
            testCase.us_id,
            testCase.testContainer,
            country,
            licence[country],
            language,
            role,
            testCase.description,
          )}`, async () => {
            const isTestPass = await mainPage.startTest({ role, country, language, testCase });
            expect(isTestPass, `Test case ${testCase.us_id} pass: ${testCase.description}`).toBeTruthy();
          });
        }
      }
    }
  }
});

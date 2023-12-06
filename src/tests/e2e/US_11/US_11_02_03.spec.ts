import { expect, test } from '@playwright/test';
import { MainPage } from '../MainPage';
import { testParams } from './US_11_02_03_TestParams';
import { testCases } from './US_11_02_03_TestCases';

const licence: any = testParams.licence;

const titleAssembly = (
  us_id: string,
  country: string,
  licence: string,
  language: string,
  role: string,
  description: string,
) => {
  return (
    us_id.toUpperCase() +
    ' Test: ' +
    'country ' +
    country.toUpperCase() +
    '(' +
    licence +
    '), ' +
    'language ' +
    language.toUpperCase() +
    ' role' +
    role +
    'for ' +
    description
  );
};

test.describe('Main Page Tests', () => {
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
            country,
            licence[country],
            language,
            role,
            testCase.description,
          )}`, async () => {
            const isTestPass = await mainPage.startTest({ role, country, language, testCase });
            expect(isTestPass, `Test case pass: ${testCase.description}`).toBeTruthy();
          });
        }
      }
    }
  }
});

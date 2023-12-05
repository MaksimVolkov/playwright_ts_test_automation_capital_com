import { test, expect } from '@playwright/test';
import { MainPage } from './MainPage';
import { testParams } from './US_11_02_03_TestParams';
import { testCases } from './US_11_02_03_TestCases';

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
          test(`Test for ${country} country, ${language} language, and ${role} role, ${testCase.description}`, async () => {
            const isTestPass = await mainPage.startTest({ role, country, language, testCase });
            expect(isTestPass, `Failed test case: ${testCase.description}`).toBeTruthy();
          });
        }
      }
    }
  }
});

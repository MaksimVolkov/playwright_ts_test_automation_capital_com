import { test, expect } from '@playwright/test';
import { Precondition } from '../../helpers/Precondition';

const countries = ['CountryA', 'CountryB'];
const languages = ['Language1', 'Language2', 'Language3'];

test.describe(`Tests for UNREGISTERED user`, () => {
  let precondition: Precondition;
  for (const country of countries) {
    for (const language of languages) {
      test.beforeEach(async ({ page }) => {
        precondition = new Precondition(page);
        await precondition.setupForNotRegisteredUser();
        // TODO add role await precondition.setupForAuthorizedUser();
        // TODO add role await precondition.setupForUnauthorizedUser();
        // TODO add "select all cookies";
      });

      test(`test № - Example test, ${country} country, ${language} language`, async () => {
        // TODO task
        expect(true).toBe(true);
      });
    }
  }
});

// TODO AUTHORIZED
// TODO UNAUTHORIZED

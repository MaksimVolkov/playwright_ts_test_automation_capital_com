import { test, expect } from '@playwright/test';
import { Role } from '../../helpers/Role';
import { Precondition } from '../../helpers/Precondition';

const countries = ['au', 'de'];
const languages = ['es', 'de', 'fr'];

test.describe(`Tests for UNREGISTERED user`, () => {
  let precondition: Precondition;
  let role: Role;

  test.beforeEach(async ({ page }) => {
    precondition = new Precondition(page);
    role = new Role(page);
    await role.setup('NotReg');
    // TODO add role await role.setup('Auth');
    // TODO add role await role.setup('UnAuth');
    // TODO add "select all cookies";
  });

  for (const country of countries) {
    for (const language of languages) {
      test(`test № - Example test, ${country} country, ${language} language`, async () => {
        // precondition = new Precondition(page);
        await test.step('step precondition', async () => {
          await precondition.setup(country, language, 'Commodities trading');
        });
        // TODO tasks
        expect(true).toBe(true);
      });
    }
  }
});

// TODO AUTHORIZED
// TODO UNAUTHORIZED

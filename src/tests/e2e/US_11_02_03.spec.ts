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
  });

  for (const country of countries) {
    for (const language of languages) {
      test(`test № - Example test, ${country} country, ${language} language`, async () => {
        await test.step('step: role selection NotReg', async () => {
          await role.setup('NotReg');
        });

        await test.step('step: precondition', async () => {
          await precondition.setup(country, language, 'Commodities trading');
        });
        // TODO tasks
        expect(true).toBe(true);
      });
    }
  }
});
test.describe(`Tests for AUTHORIZED user`, () => {
  let precondition: Precondition;
  let role: Role;

  test.beforeEach(async ({ page }) => {
    precondition = new Precondition(page);
    role = new Role(page);
  });

  for (const country of countries) {
    for (const language of languages) {
      test(`test № - Example test, ${country} country, ${language} language`, async () => {
        await test.step('role selection Auth', async () => {
          await role.setup('Auth');
        });

        await test.step('step precondition', async () => {
          await precondition.setup(country, language, 'Commodities trading');
        });
        // TODO tasks
        expect(true).toBe(true);
      });
    }
  }
});
test.describe(`Tests for UNAUTHORIZED user`, () => {
  let precondition: Precondition;
  let role: Role;

  test.beforeEach(async ({ page }) => {
    precondition = new Precondition(page);
    role = new Role(page);
  });

  for (const country of countries) {
    for (const language of languages) {
      test(`test № - Example test, ${country} country, ${language} language`, async () => {
        await test.step('role selection UnAuth', async () => {
          await role.setup('UnAuth');
        });

        await test.step('step precondition', async () => {
          await precondition.setup(country, language, 'Commodities trading');
        });
        // TODO tasks
        expect(true).toBe(true);
      });
    }
  }
});

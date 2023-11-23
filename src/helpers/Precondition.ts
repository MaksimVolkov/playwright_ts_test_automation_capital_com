import { expect, Page } from '@playwright/test';
import { HeaderLocators } from '../elements/HeaderLocators';
import 'dotenv/config';

const selector = new HeaderLocators();

export class Precondition {
  // private readonly page: Page;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async setup(country: string, language: string, testSection: string): Promise<void> {
    await this.setupCountryAndLanguage(country, language);
    await this.navigateToTestSection(testSection);
  }

  public async setupCountryAndLanguage(country: string, language: string): Promise<void> {
    await this.page.locator(selector.getSectionCountryLanguage()).hover(); // show country and language block
    await this.page.locator(selector.getDropdownCountry()).click(); // click and open dropdown
    await this.page.locator(selector.getCountrySearchField()).fill(country); // fill country abbreviation name input field
    await this.page.locator(selector.getCountrySelectorFromList(country)).click(); // select a country from the list of sorted countries
    const textElement = (await this.page.locator(selector.getCurrentCountry()).innerText()).toLowerCase();
    expect(`${textElement}`).toBe(country);
    await this.page.locator(selector.getSectionCountryLanguage()).hover(); // show country and language block
    await this.page.locator(selector.getLanguageSelector(language)).click(); // select a language from the list
    // TODO add expect language
  }
  public async navigateToTestSection(testSection: string): Promise<void> {
    console.log(testSection);
    // TODO Test Section
  }
}

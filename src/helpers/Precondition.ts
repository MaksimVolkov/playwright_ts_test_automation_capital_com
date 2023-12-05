import { expect, Page } from '@playwright/test';
import { Selectors } from '../elements/Selectors';
import 'dotenv/config';

const {
  countryLanguage,
  dropdownCountry,
  countrySearchField,
  countrySelectorFromList,
  currentCountry,
  languageSelector,
} = Selectors.header.countryAndLanguage;

const { education } = Selectors.header as { education: Record<string, string> };

export class Precondition {
  // private readonly page: Page;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async setup(country: string, language: string, testSection: string, testPart: string): Promise<void> {
    await this.setupCountryAndLanguage(country, language);
    await this.navigateToTestSection(testSection, testPart);
  }

  public async setupCountryAndLanguage(country: string, language: string): Promise<void> {
    await this.page.locator(countryLanguage).hover(); // show country and language block
    await this.page.locator(dropdownCountry).click({ timeout: 5000 }); // click and open dropdown
    await this.page.locator(countrySearchField).fill(country); // fill country abbreviation name input field
    await this.page.locator(countrySelectorFromList(country)).click(); // select a country from the list of sorted countries
    const textElement = (await this.page.locator(currentCountry).innerText()).toLowerCase();
    expect(`${textElement}`).toBe(country);
    await this.page.locator(countryLanguage).hover(); // show country and language block
    await this.page.locator(languageSelector(language)).click(); // select a language from the list
    // TODO add expect language
  }

  public async navigateToTestSection(testSection: string, testPart: string): Promise<void> {
    await this.page.locator(education[testSection]).hover(); // testSection
    await this.page.locator(education[testPart]).click(); // testPart
    console.log(testSection);
    // TODO Test Section
  }
}

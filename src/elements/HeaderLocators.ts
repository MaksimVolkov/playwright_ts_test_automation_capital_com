export class HeaderLocators {
  /**
   *  Link header logo
   *  @returns {string} selector - Returns the required element selector.
   */
  getSelectorLinkLogo(): string {
    return "a[class$='logo']";
  }

  /**
   * Section country and language
   * @returns {string} selector - Returns the required element selector.
   */
  getSectionCountryLanguage(): string {
    return "div[class='licLangSw js-licLangSw']";
  }

  /**
   * Dropdown country
   * @returns {string} selector - Returns the required element selector.
   */
  getDropdownCountry(): string {
    return "input[class='fieldDropdown__control fieldDropdown__control--hidden']";
  }

  /**
   * Dropdown 'input' country search field
   * @returns {string} selector - Returns the required element selector.
   */
  getCountrySearchField(): string {
    return "input[class='fieldDropdown__control js-countriesSearchInput js-fieldDropdownFilterSearch']";
  }

  /**
   * Searched country selector from the list
   *
   * @param {string} country - Country abbreviation
   * @returns {string} selector - Returns the required element selector.
   */
  getCountrySelectorFromList(country: string): string {
    return `a[data-country='${country}']`;
  }

  /**
   * Selector containing the current country name
   *
   * @returns {string} selector - Returns the required element selector.
   */
  getCurrentCountry(): string {
    return `small[class='js-currCountry']`;
  }

  /**
   * Language selector from the list
   *
   * @returns {string} selector - Returns the required element selector.
   */
  getLanguageSelector(language: string): string {
    return `a[data-type='nav_lang_${language}']`;
  }
}

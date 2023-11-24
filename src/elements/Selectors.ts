export const Selectors = {
  header: {
    countryAndLanguage: {
      selectorLinkLogo: "a[class$='logo']",
      countryLanguage: "div[class='licLangSw js-licLangSw']",
      dropdownCountry: "input[class='fieldDropdown__control fieldDropdown__control--hidden']",
      countrySearchField: "input[class='fieldDropdown__control js-countriesSearchInput js-fieldDropdownFilterSearch']",
      countrySelectorFromList: (country: string): string => `a[data-country='${country}']`,
      currentCountry: 'small[class="js-currCountry"]',
      languageSelector: (language: string): string => `a[data-type='nav_lang_${language}']`,
    },
    productsAndServices: {
      productsAndServices: 'data-type="nav_id2"',
      // 01
      tradingProducts: 'nav_id332',
      cfdTrading: 'nav_id587',
      demoAccount: 'nav_id578',
      // 02
      platformsAndServices: 'nav_id532',
      ourMobileApps: 'nav_id465',
      desktopTrading: 'nav_id659',
      capitalComApi: 'nav_id426',
      tradingView: 'nav_id197',
      metaTrader4: 'nav_id235',
      // 03
      professionalTraders: null,
      discoverProTrading: 'nav_id581',
      corporateAccounts: 'nav_id485',
      // 04
      tradeWithCapital: 'nav_id534',
      chargesFees: 'nav_id599',
      capitalComVsCompetitors: 'nav_id240',
      whyCapitalCom: 'nav_id592',
      marginCalls: 'nav_id584',
      securityAtCapital: 'nav_id594',
    },
    education: {
      education: 'data-type="nav_id96"',
      // 01
      learningHub: 'nav_id95',
      theBasicsOfTrading: 'nav_id174',
      tradingCourses: 'nav_id11',
      cfdTradingGuide: 'nav_id58',
      glossaryOfTradingTerms: 'nav_id12',
      investmateApp: 'nav_id78',
      toolboxForTraders: 'nav_id696',
      // 02
      marketGuides: 'nav_id105',
      sharesTrading: 'nav_id106',
      commoditiesTrading: 'nav_id107',
      forexTrading: 'nav_id108',
      cryptocurrencyTrading: 'nav_id109',
      indicesTrading: 'nav_id110',
      etfTrading: 'nav_id243',
      // 03
      tradingStrategiesGuide: 'nav_id131',
      dayTrading: 'nav_id526',
      trendTrading: 'nav_id527',
      positionTrading: 'nav_id528',
      swingTrading: 'nav_id529',
      whatIsAMargin: 'nav_id331',
      tradingPsychologyGuide: 'nav_id219',
      powerPattern: 'nav_id695',
    },
    markets: {
      markets: 'data-type="nav_id3"',
      // 01
      allMarkets: 'nav_id31',
      forex: 'nav_id57',
      indices: 'nav_id8',
      commodities: 'nav_id4',
      shares: 'nav_id9',
      cryptocurrencies: 'nav_id65',
      esg: 'nav_id461',
      // 02
      marketTools: null,
      cfdCalculator: 'nav_id562',
      esgTrading: 'nav_id563',
      economicCalendar: 'nav_id564',
    },
    newsAndAnalysis: {
      newsAndAnalysis: 'data-type="nav_id10"',
      // 01
      allNews: 'nav_id33',
      dataJournalism: 'nav_id379',
      tradingViewNews: 'nav_id449',
      // 02
      marketUpdates: 'nav_id335',
      economicCalendar: 'nav_id97',
      marketAnalysis: 'nav_id603',
    },
    more: {
      more: 'data-type="nav_id16"',
      // 01
      aboutCapital: 'nav_id56',
      ourStory: 'nav_id459',
      whitePaper: 'nav_id156',
      ourHistory: 'nav_id609',
      leadershipTeam: 'nav_id590',
      ourGlobalOffices: 'nav_id173',
      complianceLegals: 'nav_id17',
      careersAtCapitalCom: 'nav_id593',
      mediaCentre: 'nav_id361',
      antiMoneyLaundering: 'nav_id589',
      // 02
      helpSupport: 'nav_id18',
      support: 'nav_id535',
      capitalSystemStatus: 'nav_id311',
      complaints: 'nav_id523',
      // 03
      partnerWithUs: null,
      partnershipProgramme: 'nav_id323',
    },
    buttons: {
      logIn: "a[data-type='btn_header_login']",
      signUp: 'a.cc-header__btn.js_signup',
    },
  },
  content: {
    buttons: {
      logIn: "a[data-type='btn_header_login']",
      signUp: 'a.cc-header__btn.js_signup',
    },
  },
  footer: {},
};

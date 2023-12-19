export const Selectors: any = {
  header: {
    countryAndLanguage: {
      selectorLinkLogo: 'a[class$="logo"]',
      countryLanguage: 'div[class="licLangSw js-licLangSw"]',
      dropdownCountry: 'input[class="fieldDropdown__control fieldDropdown__control--hidden"]',
      countrySearchField: 'input[class="fieldDropdown__control js-countriesSearchInput js-fieldDropdownFilterSearch"]',
      countrySelectorFromList: (country: string): string => `a[data-country="${country}"]`,
      currentCountry: 'small[class="js-currCountry"]',
      languageSelector: (language: string): string => `a[data-type="nav_lang_${language}"]`,
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
      education: '.cc-nav__link[data-type="nav_id96"]',
      // 01
      learningHub: 'a[data-type=nav_id95]',
      theBasicsOfTrading: 'a[data-type=nav_id174]',
      tradingCourses: 'a[data-type=nav_id11]',
      cfdTradingGuide: 'a[data-type=nav_id58]',
      glossaryOfTradingTerms: 'a[data-type=nav_id12]',
      investmateApp: 'a[data-type=nav_id78]',
      toolboxForTraders: 'a[data-type=nav_id696]',
      // 02
      marketGuides: 'a[data-type=nav_id105]',
      sharesTrading: 'a[data-type=nav_id106]',
      commoditiesTrading: 'a[data-type=nav_id107]',
      forexTrading: 'a[data-type=nav_id108]',
      cryptocurrencyTrading: 'a[data-type=nav_id109]',
      indicesTrading: 'a[data-type=nav_id110]',
      etfTrading: 'a[data-type=nav_id243]',
      // 03
      tradingStrategiesGuide: 'a[data-type=nav_id131]',
      dayTrading: 'a[data-type=nav_id526]',
      trendTrading: 'a[data-type=nav_id527]',
      positionTrading: 'a[data-type=nav_id528]',
      swingTrading: 'a[data-type=nav_id529]',
      whatIsAMargin: 'a[data-type=nav_id331]',
      tradingPsychologyGuide: 'a[data-type=nav_id219]',
      powerPattern: 'a[data-type=nav_id695]',
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
      buttonLogIn: 'a[data-type="btn_header_login"]',
      buttonSignUp: 'a.cc-header__btn.js_signup',
      buttonMyAccount: 'button[id="wg_userarea"]',
      buttonLogout: 'div[class*="logout-user"]',
    },
  },
  forms: {
    activeForm: 'div.overlay:not(.hidden)',
    logIn: {
      logInBlock: 'div[id="l_overlay"]>div[class*="modal"]',
      titleH1: 'div[id="l_overlay"] div[class="h1"]',
      emailField: 'div[id="l_overlay"] input[type="email"]',
      passwordField: 'div[id="l_overlay"] input[type="password"]',
      checkbox: 'div[id="l_overlay"] input[class="l-rem"][type="checkbox"]',
      submitButton: 'div[id="l_overlay"] button[class*="l_btn"][type="submit"]',
      cancelButton: 'div[id="l_overlay"] button[class*="cancel"]',
    },
    signUp: {
      signUpBlock: 'div[id="s_overlay"]>div[class*="modal"]',
      titleH1: 'div[id="s_overlay"] div[class="h1"]',
      emailField: 'div[id="s_overlay"] input[type="email"]',
      passwordField: 'div[id="s_overlay"] input[type="password"]',
      submitButton: 'div[id="s_overlay"] button[type="submit"]',
      cancelButton: 'div[id="s_overlay"] button[class*="cancel"]',
    },
    forgotPassword: {
      forgotPasswordBlock: 'div[id="f_overlay"]>div[class*="modal"]',
      titleH1: 'div[id="f_overlay"] div[class="h1"]',
      emailField: 'div[id="f_overlay"] input[type="email"]',
      submitButton: 'div[id="f_overlay"] button[class*="f_btn"]',
      cancelButton: 'div[id="f_overlay"] button[class*="cancel"]',
    },
  },
  cookies: {
    cookiesBlock: '#onetrust-banner-sdk',
    cookiesAccept: '#onetrust-accept-btn-handler',
  },
  contentContainer: {
    mainBanner: {
      parentBlock: 'div[class="cc-wrap"]>section[class*="cc-banner"]',
      buttons: {
        btnStartTrading: 'a.cc-banner__btn:nth-child(1)',
        btnTryDemo: 'a.cc-banner__btn:nth-child(2)',
      },
    },
    contWdgGoToMarket: {
      parentBlock: 'ul[data-type="wdg_go_to_market"]',
      buttons: {
        btnStartTrading: 'a[data-type="wdg_go_to_market_btn"]',
        btnGoToAllCommodities: 'a[data-type="wdg_go_to_market_deeplink"]',
      },
    },
    regStepsTrading: {
      parentBlock: 'section[class*="regSteps"]',
      buttons: {
        btnCreateVerifyYourAccount: 'i.regSteps__item[data-type="banner_with_steps"]',
      },
    },
    widget: {
      parentBlock: 'div[data-type="wdg_most_traded"]',
      buttons: {
        btnTradeAll: 'a[data-type="wdg_most_traded_btn"]',
        btnTrade: (numberChild: number): string => `div.mostTraded__box:nth-child(${numberChild}) a.mostTraded__btn`,
      },
    },
    sidebar: {
      sidebarLinkList: {
        parentBlock: 'div[data-type="sidebar_deeplinks"]',
        links: 'a[data-type="sidebar_deeplink"]:not(.active):not(:empty)',
        selectedLink: (numberChild: number): string =>
          `a[data-type="sidebar_deeplink"]:not(.active):not(:empty):nth-child(${numberChild})`,
      },
      sidebarBanner: '',
      sidebarWidget: '',
    },
    stickyBar: {
      parentBlock: 'div.stickyBar',
      productLink: 'div.encStickyBar__wrap a[class="blueLink"]',
      buttons: {
        btnGetStarted: 'a[data-type="sticky_bar"]',
      },
    },
    tradToolBanner: {
      parentBlock: '',
      buttons: {
        btnSell: '',
        btnBuy: '',
      },
    },
    contentBanners: 'div[class="js-bannerSection"]',
    // banners: {
    //   parentBlock: 'div[class="js-bannerSection"]',
    //   vert: {
    //     166: {
    //       parentBlock: 'div[data-id="103"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     168: {
    //       parentBlock: 'div[data-id="168"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     196: {
    //       parentBlock: 'div[data-id="196"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     198: {
    //       parentBlock: 'div[data-id="198"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     221: {
    //       parentBlock: 'div[data-id="221"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     222: {
    //       parentBlock: 'div[data-id="222"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     251: {
    //       parentBlock: 'div[data-id="251"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     253: {
    //       parentBlock: 'div[data-id="253"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     282: {
    //       parentBlock: 'div[data-id="282"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     292: {
    //       parentBlock: 'div[data-id="292"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     293: {
    //       parentBlock: 'div[data-id="293"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     377: {
    //       parentBlock: 'div[data-id="377"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     380: {
    //       parentBlock: 'div[data-id="380"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     381: {
    //       parentBlock: 'div[data-id="381"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     388: {
    //       parentBlock: 'div[data-id="388"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     389: {
    //       parentBlock: 'div[data-id="389"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     391: {
    //       parentBlock: 'div[data-id="391"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     393: {
    //       parentBlock: 'div[data-id="393"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     425: {
    //       parentBlock: 'div[data-id="425"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     426: {
    //       parentBlock: 'div[data-id="426"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     505: {
    //       parentBlock: 'div[data-id="505"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //   },
    //   hor: {
    //     103: {
    //       parentBlock: 'div[data-id="103"]',
    //       buttons: {
    //         btn: 'a[data-type="b_hor_s1_103"]',
    //       },
    //     },
    //     167: {
    //       parentBlock: 'div[data-id="167"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     169: {
    //       parentBlock: 'div[data-id="169"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     197: {
    //       parentBlock: 'div[data-id="197"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     199: {
    //       parentBlock: 'div[data-id="199"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     220: {
    //       parentBlock: 'div[data-id="220"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     223: {
    //       parentBlock: 'div[data-id="223"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     252: {
    //       parentBlock: 'div[data-id="252"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     254: {
    //       parentBlock: 'div[data-id="254"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     281: {
    //       parentBlock: 'div[data-id="281"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     291: {
    //       parentBlock: 'div[data-id="291"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     294: {
    //       parentBlock: 'div[data-id="294"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     378: {
    //       parentBlock: 'div[data-id="378"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     379: {
    //       parentBlock: 'div[data-id="379"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     390: {
    //       parentBlock: 'div[data-id="390"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     392: {
    //       parentBlock: 'div[data-id="392"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     428: {
    //       parentBlock: 'div[data-id="428"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //     430: {
    //       parentBlock: 'div[data-id="430"]',
    //       buttons: {
    //         btn: '',
    //       },
    //     },
    //   },
    // },
  },
  footer: {},
};
export const Header = Selectors.header;
export const Forms = Selectors.forms;
export const ContentContainer = Selectors.contentContainer;
export const Sidebar = Selectors.sidebar;
export const Cookies = Selectors.cookies;
export const Footer = Selectors.footer;

const majorForexPairs = [
  ["AUDUSD", "Australian Dollar vs United States Dollar", 5],
  ["EURUSD", "Euro vs United States Dollar", 5],
  ["GBPUSD", "Great British Pound vs United States Dollar", 5],
  ["NZDUSD", "New Zealand Dollar vs United States Dollar", 5],
  ["USDCAD", "United States Dollar vs Canadian Dollar", 5],
  ["USDCHF", "United States Dollar vs Swiss Franc", 5],
  ["USDJPY", "United States Dollar vs Japanese Yen", 3],
  ["AUDCAD", "Australian Dollar vs Canadian Dollar", 5],
  ["AUDCHF", "Australian Dollar vs Swiss Franc", 5],
  ["AUDJPY", "Australian Dollar vs Japanese Yen", 3],
  ["AUDNZD", "Australian Dollar vs New Zealand Dollar", 5],
  ["CADCHF", "Canadian Dollar vs Swiss Franc", 5],
  ["CADJPY", "Canadian Dollar vs Japanese Yen", 3],
  ["CHFJPY", "Swiss Franc vs Japanese Yen", 3],
  ["EURAUD", "Euro vs Australian Dollar", 5],
  ["EURCAD", "Euro vs Canadian Dollar", 5],
  ["EURCHF", "Euro vs Swiss Franc", 5],
  ["EURGBP", "Euro vs Great British Pound", 5],
  ["EURJPY", "Euro vs Japanese Yen", 3],
  ["EURNZD", "Euro vs New Zealand Dollar", 5],
  ["GBPAUD", "Great British Pound vs Australian Dollar", 5],
  ["GBPCAD", "Great British Pound vs Canadian Dollar", 5],
  ["GBPCHF", "Great British Pound vs Swiss Franc", 5],
  ["GBPJPY", "Great British Pound vs Japanese Yen", 3],
  ["GBPNZD", "Great British Pound vs New Zealand Dollar", 5],
  ["NZDCAD", "New Zealand Dollar vs Canadian Dollar", 5],
  ["NZDCHF", "New Zealand Dollar vs Swiss Franc", 5],
  ["NZDJPY", "New Zealand Dollar vs Japanese Yen", 3],
];

const exoticForexPairs = [
  ["USDCNH", "United States Dollar vs Chinese Offshore Yuan"],
  ["USDHKD", "United States Dollar vs Hong Kong Dollar"],
  ["USDMXN", "United States Dollar vs Mexican Peso"],
  ["USDNOK", "United States Dollar vs Norwegian Krone"],
  ["USDPLN", "United States Dollar vs Polish Zloty"],
  ["USDSEK", "United States Dollar vs Swedish Krona"],
  ["USDSGD", "United States Dollar vs Singapore Dollar"],
  ["USDTRY", "United States Dollar vs Turkish Lira"],
  ["USDZAR", "United States Dollar vs South African Rand"],
];

const indices = [
  ["100GBP", "UK FTSE 100 Index", 10, 1],
  ["200AUD", "Australia S&P/ASX 200 Index", 10, 1],
  ["225JPY", "Japan Nikkei 225 Index", 100, 1],
  ["CNIUSD", "China A50 Index", 10, 1],
  ["D30EUR", "Germany DAX 30 Index", 10, 1],
  ["E50EUR", "Euro STOXX 50 Index", 10, 1],
  ["F40EUR", "France CAC40 Index", 10, 1],
  ["HSIHKD", "Hong Kong Hang Seng Index", 10, 1],
  ["NASUSD", "US NASDAQ-100 Index", 10, 1],
  ["SPXUSD", "US S&P 500 Index", 100, 2],
  ["U30USD", "US Dow Jones Industrial Average Index", 10, 1],
  ["RUTUSD", "Russell 2000 Index", 100, 2],
];

const stocks = [
  "ABBV.N", "ABT.N", "ACN.N", "AMT.N", "AXP.N", "AZO.N", "BA.N", "BABA.N", "BAC.N", "BMY.N",
  "BSX.N", "CAT.N", "COP.N", "CRM.N", "CVX.N", "DHR.N", "DIS.N", "EFX.N", "ENB.N", "EOG.N",
  "ETN.N", "EW.N", "GE.N", "GS.N", "HD.N", "IBM.N", "ITW.N", "JNJ.N", "JPM.N", "KO.N",
  "LLY.N", "LMT.N", "MA.N", "MCD.N", "MCK.N", "MDT.N", "MMC.N", "MMM.N", "MO.N", "MRK.N",
  "MS.N", "NEE.N", "NIO.N", "NKE.N", "NOW.N", "NSC.N", "NUE.N", "NVO.N", "NVS.N", "O.N",
  "OC.N", "OKE.N", "ORCL.N", "PAG.N", "PAYC.N", "PFE.N", "PG.N", "PGR.N", "PH.N", "PHM.N",
  "PINS.N", "PKG.N", "PLD.N", "PM.N", "PNC.N", "PSA.N", "PSX.N", "PWR.N", "QSR.N", "RACE.N",
  "RMD.N", "ROK.N", "RSG.N", "RTX.N", "RY.N", "SAP.N", "SCHW.N", "SHW.N", "SLB.N", "SO.N",
  "SONY.N", "SPG.N", "SPGI.N", "SRE.N", "STLA.N", "STT.N", "STZ.N", "SU.N", "SYK.N", "SYY.N",
  "TD.N", "TEL.N", "TFC.N", "TM.N", "TME.N", "TMO.N", "TRGP.N", "TSM.N", "TT.N", "UBER.N",
  "UNH.N", "UNP.N", "UPS.N", "V.N", "VEEV.N", "VICI.N", "VLO.N", "VZ.N", "WDAY.N", "WFC.N",
  "WM.N", "WMT.N", "XOM.N", "XPEV.N", "ZTS.N", "AAPL.OQ", "ADBE.OQ", "AMAT.OQ", "AMD.OQ",
  "AMGN.OQ", "AMZN.OQ", "ASML.OQ", "AVGO.OQ", "BIDU.OQ", "BRKb.N", "CMCSA.OQ", "COST.OQ",
  "CSCO.OQ", "GOOGL.OQ", "HON.OQ", "INTC.OQ", "INTU.OQ", "JD.OQ", "LI.OQ", "LIN.OQ",
  "LRCX.OQ", "META.OQ", "MSFT.OQ", "MU.OQ", "NFLX.OQ", "NTES.OQ", "NVDA.OQ", "PDD.OQ",
  "PEP.OQ", "PYPL.OQ", "QCOM.OQ", "TCOM.OQ", "TMUS.OQ", "TSLA.OQ", "TXN.OQ",
];

const etfs = [
  "AGG.P", "BIL.P", "BSV.P", "DGRO.P", "DIA.P", "EEM.P", "EFA.P", "EWT.P", "EWW.P", "EWY.P",
  "EWZ.P", "FVD.P", "FXI.P", "GDX.P", "GDXJ.P", "GLD.P", "HDV.P", "HYG.P", "IEMG.P", "IJH.P",
  "IJR.P", "ITOT.P", "IVE.P", "IVV.P", "IVW.P", "IWB.P", "IWD.P", "IWF.P", "IWM.P", "IWN.P",
  "IWS.P", "LQD.P", "MDY.P", "RSP.P", "SCHB.P", "SCHD.P", "SCHF.P", "SCHG.P", "SCHX.P",
  "SDY.P", "SPDW.P", "SPY.P", "SPYG.P", "SPYV.P", "TIP.P", "UNG.P", "URA.P", "USO.P", "VB.P",
  "VDE.P", "VEA.P", "VEU.P", "VGT.P", "VHT.P", "VIG.P", "VNQ.P", "VO.P", "VOE.P", "VOO.P",
  "VT.P", "VTI.P", "VTV.P", "VUG.P", "VWO.P", "VXF.P", "VYM.P", "XLB.P", "XLE.P", "XLF.P",
  "XLI.P", "XLK.P", "XLP.P", "XLU.P", "XLV.P", "XLY.P", "AAXJ.OQ", "ACWI.OQ", "BND.OQ",
  "BNDX.OQ", "DVY.OQ", "EMB.OQ", "IBB.OQ", "ICLN.OQ", "IEI.OQ", "INDY.OQ", "IUSG.OQ",
  "IUSV.OQ", "MCHI.OQ", "PFF.OQ", "QQQ.OQ", "SHV.OQ", "SHY.OQ", "SKYY.OQ", "SMH.OQ",
  "SOXX.OQ", "TLT.OQ", "TQQQ.OQ", "VCIT.OQ", "VCSH.OQ", "VXUS.OQ",
];

function makeProduct({
  symbol,
  name,
  assetClass,
  contractSize,
  digits,
  leverageMode,
  defaultLeverage,
  defaultPrice = 1,
  marginCurrency = "USD",
  profitCurrency = "USD",
  swapMethod = "points",
  tripleDay = "wed",
}) {
  return {
    symbol,
    name,
    assetClass,
    contractSize,
    pointSize: 1 / 10 ** digits,
    digits,
    defaultPrice,
    leverageMode,
    defaultLeverage,
    swap: {
      method: swapMethod,
      long: 0,
      short: 0,
      tripleDay,
    },
    currency: {
      profit: profitCurrency,
      margin: marginCurrency,
    },
  };
}

function makeForexProduct([symbol, name, digits], leverageMode) {
  return makeProduct({
    symbol,
    name,
    assetClass: leverageMode === "exotic-forex" ? "forex exotic" : "forex",
    contractSize: 100000,
    digits,
    leverageMode,
    defaultLeverage: leverageMode === "exotic-forex" ? 50 : 500,
    marginCurrency: symbol.slice(0, 3),
    profitCurrency: symbol.slice(3, 6),
    tripleDay: ["USDCAD", "USDTRY"].includes(symbol) ? "thu" : "wed",
  });
}

const products = [
  ...majorForexPairs.map((product) => makeForexProduct(product, "adjustable")),
  ...exoticForexPairs.map((product) => makeForexProduct([...product, 5], "exotic-forex")),
  makeProduct({
    symbol: "XAGUSD",
    name: "Silver vs United States Dollar",
    assetClass: "metal",
    contractSize: 5000,
    digits: 3,
    leverageMode: "adjustable",
    defaultLeverage: 500,
    defaultPrice: 30,
  }),
  makeProduct({
    symbol: "XAUUSD",
    name: "Gold vs United States Dollar",
    assetClass: "metal",
    contractSize: 100,
    digits: 2,
    leverageMode: "adjustable",
    defaultLeverage: 500,
    defaultPrice: 2350.5,
  }),
  makeProduct({
    symbol: "XBRUSD",
    name: "UK Brent Crude Spot",
    assetClass: "energy",
    contractSize: 1000,
    digits: 3,
    leverageMode: "fixed",
    defaultLeverage: 100,
    defaultPrice: 82,
  }),
  makeProduct({
    symbol: "XNGUSD",
    name: "Natural Gas Spot",
    assetClass: "natural gas",
    contractSize: 10000,
    digits: 4,
    leverageMode: "fixed",
    defaultLeverage: 50,
    defaultPrice: 2.5,
  }),
  makeProduct({
    symbol: "XTIUSD",
    name: "US West Texas Oil Spot",
    assetClass: "energy",
    contractSize: 1000,
    digits: 3,
    leverageMode: "fixed",
    defaultLeverage: 100,
    defaultPrice: 78.25,
  }),
  makeProduct({
    symbol: "BTCUSD",
    name: "Bitcoin / US Dollar",
    assetClass: "crypto",
    contractSize: 1,
    digits: 2,
    leverageMode: "btc",
    defaultLeverage: 200,
    defaultPrice: 60000,
    swapMethod: "percentage",
    tripleDay: "fri",
  }),
  ...indices.map(([symbol, name, contractSize, digits]) =>
    makeProduct({
      symbol,
      name,
      assetClass: "index",
      contractSize,
      digits,
      leverageMode: "fixed",
      defaultLeverage: 100,
      profitCurrency: symbol.slice(-3),
      marginCurrency: symbol.slice(-3),
      tripleDay: "fri",
    }),
  ),
  ...stocks.map((symbol) =>
    makeProduct({
      symbol,
      name: symbol,
      assetClass: "stock",
      contractSize: 1,
      digits: 2,
      leverageMode: "fixed",
      defaultLeverage: 5,
      swapMethod: "percentage",
      tripleDay: "fri",
    }),
  ),
  ...etfs.map((symbol) =>
    makeProduct({
      symbol,
      name: symbol,
      assetClass: "ETF",
      contractSize: 1,
      digits: 2,
      leverageMode: "fixed",
      defaultLeverage: 5,
      swapMethod: "percentage",
      tripleDay: "fri",
    }),
  ),
];

const conversionRates = {
  USD: 1,
  AUD: 1.52,
  CAD: 1.37,
  CHF: 0.91,
  CNH: 7.24,
  EUR: 0.93,
  GBP: 0.8,
  HKD: 7.81,
  JPY: 155.8,
  MXN: 17,
  MYR: 4.74,
  NOK: 10.8,
  NZD: 1.66,
  PLN: 3.99,
  SEK: 10.75,
  SGD: 1.35,
  TRY: 32.2,
  ZAR: 18.5,
};

let accountLeverage = 500;
let currentLanguage = "en";
let replyLanguage = currentLanguage;

const translations = {
  en: {
    eyebrow: "Trading tools",
    title: "Margin & Swap Calculator",
    language: "Language",
    searchProduct: "Search product",
    searchPlaceholder: "Search symbol, name, or category",
    product: "Product",
    buy: "Buy",
    sell: "Sell",
    lots: "Lots",
    leverage: "Leverage",
    openPrice: "Open price",
    holdingDays: "Holding days",
    buySwap: "Buy swap",
    sellSwap: "Sell swap",
    pointValue: "Point value",
    requiredMargin: "Required margin",
    dailySwap: "Daily swap",
    totalSwap: "Total swap",
    formulaBreakdown: "Formula Breakdown",
    productSpec: "Product Spec",
    replyFormats: "Auto Reply",
    replyTemplate: "Reply type",
    replyLanguage: "Reply language",
    copyReply: "Copy reply",
    replyMarginSwapAuto: "Current margin & swap (auto-filled)",
    replyStopOutAuto: "Current stop-out calculation (auto-filled)",
    calculatorMode: "Calculator mode",
    modeMarginSwap: "Margin & swap",
    modeStopOut: "Stop-out price",
    equity: "Account equity",
    stopOutRatio: "Stop-out ratio (%)",
    stopOutPrice: "Stop-out price",
    stopOutAmount: "Stop-out amount",
    losableAmount: "Losable amount",
    noMatches: "No matching products",
    productsCount: "products",
    ofProducts: "of",
    marginRateLabel: "{currency} to USD rate",
    marginRateNote: "Enter how many USD 1 {currency} is worth for this product.",
    btcNote: "BTCUSD leverage uses 2/5 of account leverage. Check TML for the final applicable leverage.",
    accountUsd: "Account denomination: USD.",
    marginRateText: "Margin conversion rate: 1 {currency} = {rate} USD.",
    formula: "Formula",
    appliedFormula: "Applied Formula",
    margin: "Margin",
    swap: "Swap",
    pointValueTitle: "Point Value",
    beforeConversion: "Before conversion",
    marginInUsd: "Margin in USD",
    dailySwapText: "Daily swap",
    swapInUsd: "Swap in USD",
    totalSwapText: "Total swap",
    pointValueText: "Point value",
    daily: "daily",
    holdingDay: "holding day",
    holdingDaysText: "holding days",
    copied: "Copied",
    copy: "Copy",
    specSymbol: "Symbol",
    specName: "Name",
    specAssetClass: "Asset class",
    specContractSize: "Contract size",
    specPointSize: "Point size",
    specCurrencies: "Currencies",
    specLeverage: "Leverage",
    specLeverageNote: "Leverage note",
    specSwap: "Swap",
    specTripleDay: "Triple day",
    fixed: "Fixed",
    marginCurrency: "Margin",
    profitCurrency: "profit",
    long: "long",
    short: "short",
    assetForex: "Forex",
    assetForexExotic: "Exotic forex",
    assetMetal: "Metal",
    assetEnergy: "Energy",
    assetNaturalGas: "Natural gas",
    assetCrypto: "Crypto",
    assetIndex: "Index",
    assetStock: "Stock",
    assetEtf: "ETF",
    swapMethodPoints: "points",
    swapMethodPercentage: "percentage",
    swapMethodMoney: "money",
    dayWed: "Wednesday",
    dayThu: "Thursday",
    dayFri: "Friday",
    pointValueUsd: "Point value already calculated in USD.",
    pointValueDirect: "Converted from {currency} to USD through current {symbol} price.",
    pointValueBase: "Converted with base currency rate: 1 {currency} = {rate} USD.",
    pointValueIndicative: "Converted with indicative rate: 1 {currency} = {rate} USD.",
    fMarginBase: "Lots x Contract Size / Leverage",
    fMarginPrice: "Lots x Contract Size x Open Price / Leverage",
    fPointDirect: "Contract Size x Point Size",
    fPointIndirect: "Contract Size x Point Size / Current Price",
    fPointCross: "Contract Size x Point Size / Currency Pair x Base Currency to USD Rate",
    fPointProfit: "Contract Size x Point Size x Profit Currency to USD Rate",
    fSwapMoney: "Lots x Swap Amount",
    fSwapPercent: "(Swap % / 360) x Contract Size x Lots x Days x Open Price x Swap Points",
    fSwapPoints: "Point Value x Swap Points x Lots",
  },
  zh: {
    eyebrow: "交易工具",
    title: "保证金与隔夜利息计算器",
    language: "语言",
    searchProduct: "搜索产品",
    searchPlaceholder: "搜索代码、名称或类别",
    product: "产品",
    buy: "买入",
    sell: "卖出",
    lots: "手数",
    leverage: "杠杆",
    openPrice: "开仓价",
    holdingDays: "持仓天数",
    buySwap: "买入隔夜利息",
    sellSwap: "卖出隔夜利息",
    pointValue: "点值",
    requiredMargin: "需用保证金",
    dailySwap: "每日隔夜利息",
    totalSwap: "总隔夜利息",
    formulaBreakdown: "算式拆解",
    productSpec: "产品规格",
    replyFormats: "自动回复",
    replyTemplate: "回复类型",
    replyLanguage: "回复语言",
    copyReply: "复制回复",
    replyMarginSwapAuto: "当前保证金与隔夜利息（自动带入）",
    replyStopOutAuto: "当前爆仓计算（自动带入）",
    calculatorMode: "计算模式",
    modeMarginSwap: "保证金与隔夜利息",
    modeStopOut: "爆仓价格",
    equity: "账户净值",
    stopOutRatio: "强平比例 (%)",
    stopOutPrice: "爆仓价格",
    stopOutAmount: "爆仓金额",
    losableAmount: "可亏损金额",
    noMatches: "没有匹配的产品",
    productsCount: "个产品",
    ofProducts: "/",
    marginRateLabel: "{currency} 兑 USD 汇率",
    marginRateNote: "请输入 1 {currency} 等于多少 USD。",
    btcNote: "BTCUSD 杠杆按账户杠杆的 2/5 计算，最终适用杠杆请检查 TML。",
    accountUsd: "账户币种：USD。",
    marginRateText: "保证金换算汇率：1 {currency} = {rate} USD。",
    formula: "公式",
    appliedFormula: "代入公式",
    margin: "保证金",
    swap: "隔夜利息",
    pointValueTitle: "点值",
    beforeConversion: "换算前",
    marginInUsd: "USD 保证金",
    dailySwapText: "每日隔夜利息",
    swapInUsd: "USD 隔夜利息",
    totalSwapText: "总隔夜利息",
    pointValueText: "点值",
    daily: "每日",
    holdingDay: "持仓天",
    holdingDaysText: "持仓天",
    copied: "已复制",
    copy: "复制",
    specSymbol: "代码",
    specName: "名称",
    specAssetClass: "类别",
    specContractSize: "每手合约量",
    specPointSize: "最小变动单位",
    specCurrencies: "货币",
    specLeverage: "杠杆",
    specLeverageNote: "杠杆备注",
    specSwap: "隔夜利息",
    specTripleDay: "三倍日",
    fixed: "固定",
    marginCurrency: "保证金",
    profitCurrency: "盈亏",
    long: "买入",
    short: "卖出",
    assetForex: "外汇",
    assetForexExotic: "稀有货币对",
    assetMetal: "贵金属",
    assetEnergy: "能源",
    assetNaturalGas: "天然气",
    assetCrypto: "加密货币",
    assetIndex: "指数",
    assetStock: "美股",
    assetEtf: "ETF",
    swapMethodPoints: "点数",
    swapMethodPercentage: "百分比",
    swapMethodMoney: "金额",
    dayWed: "周三",
    dayThu: "周四",
    dayFri: "周五",
    pointValueUsd: "点值已按 USD 计算。",
    pointValueDirect: "通过当前 {symbol} 价格将 {currency} 换算为 USD。",
    pointValueBase: "使用基础货币汇率换算：1 {currency} = {rate} USD。",
    pointValueIndicative: "使用参考汇率换算：1 {currency} = {rate} USD。",
    fMarginBase: "手数 x 合约量 / 杠杆",
    fMarginPrice: "手数 x 合约量 x 开仓价 / 杠杆",
    fPointDirect: "合约量 x 最小变动单位",
    fPointIndirect: "合约量 x 最小变动单位 / 现价",
    fPointCross: "合约量 x 最小变动单位 / 货币对现价 x 基础货币兑 USD 汇率",
    fPointProfit: "合约量 x 最小变动单位 x 盈亏货币兑 USD 汇率",
    fSwapMoney: "手数 x 隔夜利息金额",
    fSwapPercent: "（百分比 ÷ 360）× 合约量 × 手数 × 天数 × 现价 × 隔夜利息点数",
    fSwapPoints: "点值 x 隔夜利息点数 x 手数",
  },
};

const form = document.querySelector("#calculatorForm");
const calculatorModeSelect = document.querySelector("#calculatorMode");
const languageSelect = document.querySelector("#languageSelect");
const productSelect = document.querySelector("#product");
const productSearchInput = document.querySelector("#productSearch");
const productSearchCount = document.querySelector("#productSearchCount");
const marginRateField = document.querySelector("#marginRateField");
const marginRateLabel = document.querySelector("#marginRateLabel");
const marginRateInput = document.querySelector("#marginRate");
const marginRateNote = document.querySelector("#marginRateNote");
const priceInput = document.querySelector("#price");
const leverageSelect = document.querySelector("#leverage");
const leverageNote = document.querySelector("#leverageNote");
const longSwapInput = document.querySelector("#longSwap");
const shortSwapInput = document.querySelector("#shortSwap");
const pointValueResult = document.querySelector("#pointValueResult");
const marginResult = document.querySelector("#marginResult");
const dailySwapResult = document.querySelector("#dailySwapResult");
const totalSwapResult = document.querySelector("#totalSwapResult");
const stopOutFields = document.querySelector("#stopOutFields");
const stopOutMetric = document.querySelector("#stopOutMetric");
const stopOutPriceResult = document.querySelector("#stopOutPriceResult");
const conversionNote = document.querySelector("#conversionNote");
const breakdown = document.querySelector("#breakdown");
const specList = document.querySelector("#specList");
const resetButton = document.querySelector("#resetButton");
const replyTemplateSelect = document.querySelector("#replyTemplate");
const replyLanguageSelect = document.querySelector("#replyLanguageSelect");
const replyText = document.querySelector("#replyText");
const copyReplyButton = document.querySelector("#copyReplyButton");
let breakdownCopyPayloads = [];
const autoReplyTextByType = {
  "auto-margin-swap": "",
  "auto-stopout": "",
};

const replyTemplates = [
  {
    id: "auto-margin-swap",
    titleKey: "replyMarginSwapAuto",
  },
  {
    id: "auto-stopout",
    titleKey: "replyStopOutAuto",
  },
];

function t(key, replacements = {}) {
  const template = translations[currentLanguage][key] ?? translations.en[key] ?? key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    template,
  );
}

function formatMoney(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value, maximumFractionDigits = 5) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const fromRate = conversionRates[fromCurrency];
  const toRate = conversionRates[toCurrency];

  return (amount / fromRate) * toRate;
}

function getDefaultUsdRate(currency) {
  return currency === "USD" ? 1 : 1 / conversionRates[currency];
}

function convertMarginToUsd(amount, marginCurrency, marginToUsdRate) {
  if (marginCurrency === "USD") {
    return amount;
  }

  return amount * marginToUsdRate;
}

function getSelectedProduct() {
  return products.find((product) => product.symbol === productSelect.value);
}

function getFilteredProducts() {
  const query = productSearchInput.value.trim().toLowerCase();

  if (!query) {
    return products;
  }

  return products.filter((product) =>
    [product.symbol, product.name, product.assetClass].some((value) => value.toLowerCase().includes(query)),
  );
}

function getSide() {
  return new FormData(form).get("side");
}

function getCalculatorMode() {
  return calculatorModeSelect.value;
}

function updateCalculatorMode() {
  const isStopOutMode = getCalculatorMode() === "stopOut";
  stopOutFields.classList.toggle("is-hidden", !isStopOutMode);
  stopOutMetric.classList.toggle("is-hidden", !isStopOutMode);
  document.querySelectorAll(".swap-field, .swap-metric").forEach((element) => {
    element.classList.toggle("is-hidden", isStopOutMode);
  });
}

function applyStaticText() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  resetButton.title = currentLanguage === "zh" ? "重置输入" : "Reset inputs";
  resetButton.setAttribute("aria-label", resetButton.title);
}

function populateReplyTemplates(selectedTemplate = replyTemplateSelect?.value) {
  if (!replyTemplateSelect) {
    return;
  }

  replyTemplateSelect.innerHTML = replyTemplates
    .map((template) => `<option value="${template.id}">${escapeHtml(getReplyTemplateTitle(template))}</option>`)
    .join("");
  replyTemplateSelect.value = replyTemplates.some((template) => template.id === selectedTemplate)
    ? selectedTemplate
    : replyTemplates[0].id;
}

function getReplyTemplateTitle(template) {
  return t(template.titleKey);
}

function syncReplyTemplate() {
  if (!replyTemplateSelect || !replyText) {
    return;
  }

  const template = replyTemplates.find((item) => item.id === replyTemplateSelect.value);
  replyText.value = autoReplyTextByType[template?.id] ?? "";
}

function refreshAutoReplies(replies) {
  Object.assign(autoReplyTextByType, replies);
  syncReplyTemplate();
}

function buildMarginSwapReply({
  product,
  lots,
  price,
  appliedLeverage,
  margin,
  marginConversionText,
  convertedMargin,
  swap,
  convertedDailySwap,
  convertedTotalSwap,
  days,
  language = currentLanguage,
}) {
  if (language === "en") {
    return [
      `For the margin and swap calculation of ${product.symbol}, please refer to the details below:`,
      "",
      `Product: ${product.symbol}`,
      `Contract size: ${formatNumber(product.contractSize)}`,
      `Lots: ${formatNumber(lots, 2)}`,
      `Open price: ${formatNumber(price)}`,
      `Leverage: 1:${formatNumber(appliedLeverage, 1)}`,
      "",
      `Margin formula: [${margin.originalFormula}]`,
      `Applied calculation: ${margin.formula} = ${formatMoney(margin.value, margin.currency)}`,
      ...(margin.currency !== "USD"
        ? [
            marginConversionText,
            `Converted USD margin: ${formatMoney(margin.value, margin.currency)} = ${formatMoney(convertedMargin, "USD")}`,
          ]
        : []),
      `Therefore, the required margin for this order is ${formatMoney(convertedMargin, "USD")}.`,
      "",
      `Swap formula: [${swap.originalFormula}]`,
      `Applied calculation: ${swap.formula} = ${formatMoney(convertedDailySwap, "USD")} / day`,
      `Total swap: ${formatMoney(convertedDailySwap, "USD")} x ${days} day${days === 1 ? "" : "s"} = ${formatMoney(convertedTotalSwap, "USD")}.`,
    ].join("\n");
  }

  return [
    `关于 ${product.symbol} 的保证金与隔夜利息计算，请参考以下说明：`,
    "",
    `产品：${product.symbol}`,
    `合约量：${formatNumber(product.contractSize)}`,
    `交易手数：${formatNumber(lots, 2)}`,
    `开仓价：${formatNumber(price)}`,
    `杠杆：1:${formatNumber(appliedLeverage, 1)}`,
    "",
    `保证金计算公式：【${margin.originalFormula}】`,
    `代入计算：${margin.formula} = ${formatMoney(margin.value, margin.currency)}`,
    ...(margin.currency !== "USD"
      ? [
          marginConversionText,
          `换算成美元保证金：${formatMoney(margin.value, margin.currency)} = ${formatMoney(convertedMargin, "USD")}`,
        ]
      : []),
    `因此，该订单所需保证金为 ${formatMoney(convertedMargin, "USD")}。`,
    "",
    `隔夜利息计算公式：【${swap.originalFormula}】`,
    `代入计算：${swap.formula} = ${formatMoney(convertedDailySwap, "USD")} / 天`,
    `总隔夜利息：${formatMoney(convertedDailySwap, "USD")} × ${days} 天 = ${formatMoney(convertedTotalSwap, "USD")}。`,
  ].join("\n");
}

function buildStopOutReply({
  product,
  lots,
  price,
  appliedLeverage,
  margin,
  marginConversionText,
  convertedMargin,
  stopOut,
  stopOutRatio,
  equity,
  side,
  language = currentLanguage,
}) {
  if (language === "en") {
    return [
      `For the stop-out calculation of ${product.symbol}, please refer to the details below:`,
      "",
      `Account equity: ${formatMoney(equity, "USD")}`,
      `Leverage: ${formatNumber(appliedLeverage, 1)}x`,
      `Entry price: ${formatNumber(price)}`,
      `Trade direction: ${side === "buy" ? "Long" : "Short"}`,
      `Contract size: ${formatNumber(product.contractSize)}`,
      `Lots: ${formatNumber(lots, 2)}`,
      "",
      `Margin calculation: ${margin.formula} = ${formatMoney(margin.value, margin.currency)}`,
      ...(margin.currency !== "USD"
        ? [
            marginConversionText,
            `Converted USD margin: ${formatMoney(margin.value, margin.currency)} = ${formatMoney(convertedMargin, "USD")}`,
          ]
        : []),
      `Stop-out amount: ${formatMoney(convertedMargin, "USD")} x ${formatNumber(stopOutRatio, 2)}% = ${formatMoney(stopOut.stopOutAmount, "USD")}`,
      `Losable amount: ${formatMoney(equity, "USD")} - ${formatMoney(stopOut.stopOutAmount, "USD")} = ${formatMoney(stopOut.losableAmount, "USD")}`,
      `Stop-out price: ${formatNumber(price)} entry price ${side === "buy" ? "-" : "+"} (${formatMoney(stopOut.losableAmount, "USD")} / ${formatNumber(lots, 2)} lots / ${formatNumber(product.contractSize)} contract size) = ${formatNumber(stopOut.stopOutPrice, product.digits)}`,
      `P/L calculation: price difference ${formatNumber(stopOut.priceDistance, product.digits)} x ${formatNumber(product.contractSize)} contract size x ${formatNumber(lots, 2)} lots = -${formatMoney(stopOut.loss, "USD")}`,
      "",
      `This means stop-out is triggered when the market price ${side === "buy" ? "falls" : "rises"} to ${formatNumber(stopOut.stopOutPrice, product.digits)}.`,
    ].join("\n");
  }

  return [
    `关于强平计算，请查看以下 ${product.symbol} 示例，为您说明保证金计算、强平价格以及实际亏损情况。`,
    "",
    `账户净值：${formatMoney(equity, "USD")}`,
    `杠杆倍数：${formatNumber(appliedLeverage, 1)}倍`,
    `入场价格：${formatNumber(price)}`,
    `交易方向：${side === "buy" ? "做多" : "做空"}`,
    `合约量：${formatNumber(product.contractSize)}`,
    `手数：${formatNumber(lots, 2)}`,
    "",
    `保证金计算：${margin.formula} = ${formatMoney(margin.value, margin.currency)}`,
    ...(margin.currency !== "USD"
      ? [marginConversionText, `换算成美元保证金：${formatMoney(margin.value, margin.currency)} = ${formatMoney(convertedMargin, "USD")}`]
      : []),
    `强平比例计算：${formatMoney(convertedMargin, "USD")} × ${formatNumber(stopOutRatio, 2)}% = ${formatMoney(stopOut.stopOutAmount, "USD")}`,
    `可承受亏损金额：${formatMoney(equity, "USD")} − ${formatMoney(stopOut.stopOutAmount, "USD")} = ${formatMoney(stopOut.losableAmount, "USD")}`,
    `强平价格计算：${formatNumber(price)} 入场价 ${side === "buy" ? "−" : "+"}（${formatMoney(stopOut.losableAmount, "USD")} ÷ ${formatNumber(lots, 2)} 手数 ÷ ${formatNumber(product.contractSize)} 合约量）= ${formatNumber(stopOut.stopOutPrice, product.digits)} 触发强平`,
    `盈亏计算：价格差 ${formatNumber(stopOut.priceDistance, product.digits)} × ${formatNumber(product.contractSize)} 合约量 × ${formatNumber(lots, 2)} 手数 = -${formatMoney(stopOut.loss, "USD")}`,
    "",
    `等于当市场价格${side === "buy" ? "下跌" : "上涨"}至 ${formatNumber(stopOut.stopOutPrice, product.digits)} 时即已触发强平。`,
  ].join("\n");
}

function getAppliedLeverage(product, accountLeverage) {
  if (product.leverageMode === "fixed") {
    return product.defaultLeverage;
  }

  if (product.leverageMode === "exotic-forex") {
    return Math.max(1, accountLeverage / 10);
  }

  if (product.leverageMode === "btc") {
    return Math.max(1, accountLeverage * 0.4);
  }

  return accountLeverage;
}

function updateLeverageControl(product) {
  const isFixed = product.leverageMode === "fixed";
  leverageSelect.disabled = isFixed;
  leverageSelect.title = isFixed ? "Fixed leverage for this product" : "Adjust account leverage";
  leverageNote.textContent = "";

  if (isFixed) {
    leverageSelect.value = String(product.defaultLeverage);
  }

  if (product.leverageMode === "btc") {
    leverageNote.textContent = t("btcNote");
  }
}

function updateMarginRateControl(product) {
  const marginCurrency = product.currency.margin;

  if (marginCurrency === "USD") {
    marginRateField.classList.add("is-hidden");
    marginRateInput.value = "1";
    marginRateInput.required = false;
    return;
  }

  const defaultRate = getDefaultUsdRate(marginCurrency);
  marginRateField.classList.remove("is-hidden");
  marginRateLabel.textContent = t("marginRateLabel", { currency: marginCurrency });
  marginRateInput.required = true;
  marginRateInput.value = formatNumber(defaultRate, 5);
  marginRateNote.textContent = t("marginRateNote", { currency: marginCurrency });
}

function calculateMargin(product, lots, price, leverage) {
  const notional = lots * product.contractSize * price;
  const currency = product.currency.margin;
  const usesBaseCurrency = product.currency.margin !== product.currency.profit;
  const margin = usesBaseCurrency ? (lots * product.contractSize) / leverage : notional / leverage;
  const originalFormula = usesBaseCurrency ? t("fMarginBase") : t("fMarginPrice");
  const formula = usesBaseCurrency
    ? `(${lots} x ${formatNumber(product.contractSize)}) / ${leverage}`
    : `(${lots} x ${formatNumber(product.contractSize)} x ${formatNumber(price)}) / ${leverage}`;

  return {
    value: margin,
    currency,
    label: "Leverage margin",
    originalFormula,
    formula,
  };
}

function calculatePointValue(product, price, marginToUsdRate) {
  const baseCurrency = product.symbol.slice(0, 3);
  const profitCurrency = product.currency.profit;
  const rawPointValue = product.contractSize * product.pointSize;
  const isForex = product.assetClass.includes("forex");

  if (profitCurrency === "USD") {
    return {
      value: rawPointValue,
      currency: "USD",
      originalFormula: t("fPointDirect"),
      formula: `${formatNumber(product.contractSize)} x ${product.pointSize}`,
      conversionText: t("pointValueUsd"),
    };
  }

  if (isForex && baseCurrency === "USD") {
    return {
      value: rawPointValue / price,
      currency: "USD",
      originalFormula: t("fPointIndirect"),
      formula: `${formatNumber(product.contractSize)} x ${product.pointSize} / ${formatNumber(price)}`,
      conversionText: t("pointValueDirect", { currency: profitCurrency, symbol: product.symbol }),
    };
  }

  if (isForex) {
    const baseToUsdRate = baseCurrency === product.currency.margin ? marginToUsdRate : getDefaultUsdRate(baseCurrency);
    return {
      value: (rawPointValue / price) * baseToUsdRate,
      currency: "USD",
      originalFormula: t("fPointCross"),
      formula: `${formatNumber(product.contractSize)} x ${product.pointSize} / ${formatNumber(price)} x ${formatNumber(baseToUsdRate, 5)}`,
      conversionText: t("pointValueBase", { currency: baseCurrency, rate: formatNumber(baseToUsdRate, 5) }),
    };
  }

  const profitToUsdRate = getDefaultUsdRate(profitCurrency);
  return {
    value: rawPointValue * profitToUsdRate,
    currency: "USD",
    originalFormula: t("fPointProfit"),
    formula: `${formatNumber(product.contractSize)} x ${product.pointSize} x ${formatNumber(profitToUsdRate, 5)}`,
    conversionText: t("pointValueIndicative", { currency: profitCurrency, rate: formatNumber(profitToUsdRate, 5) }),
  };
}

function calculateSwap(product, lots, side, longSwap, shortSwap, pointValue, price) {
  const swapValue = side === "buy" ? longSwap : shortSwap;

  if (product.swap.method === "money") {
    const dailySwap = lots * swapValue;
    return {
      daily: dailySwap,
      currency: product.currency.profit,
      label: "Money swap",
      originalFormula: t("fSwapMoney"),
      formula: `${lots} lots x ${formatMoney(swapValue, product.currency.profit)} per lot`,
    };
  }

  if (product.swap.method === "percentage") {
    const notional = lots * product.contractSize * price;
    const daysPerYear = product.swap.daysPerYear ?? 360;
    const dailySwap = (notional * (swapValue / 100)) / daysPerYear;
    return {
      daily: dailySwap,
      currency: product.currency.profit,
      label: "Percentage swap",
      originalFormula: t("fSwapPercent"),
      formula: `(${formatNumber(100)} ÷ ${daysPerYear}) × ${formatNumber(product.contractSize)} × ${formatNumber(lots, 2)} × 1 × ${formatNumber(price)} × ${formatNumber(swapValue / 100, 5)}`,
      totalFormula: (days) =>
        `(${formatNumber(100)} ÷ ${daysPerYear}) × ${formatNumber(product.contractSize)} × ${formatNumber(lots, 2)} × ${formatNumber(days)} × ${formatNumber(price)} × ${formatNumber(swapValue / 100, 5)}`,
    };
  }

  const dailySwap = pointValue.value * swapValue * lots;
  return {
    daily: dailySwap,
    currency: pointValue.currency,
    label: "Points swap",
    originalFormula: t("fSwapPoints"),
    formula: `${formatMoney(pointValue.value, pointValue.currency)} x ${swapValue} points x ${lots}`,
  };
}

function calculateStopOut(entryPrice, equity, stopOutRatio, marginUsd, lots, contractSize, side) {
  const stopOutAmount = marginUsd * (stopOutRatio / 100);
  const losableAmount = equity - stopOutAmount;
  const priceDistance = losableAmount / lots / contractSize;
  const stopOutPrice = side === "buy" ? entryPrice - priceDistance : entryPrice + priceDistance;
  const loss = priceDistance * contractSize * lots;

  return {
    stopOutAmount,
    losableAmount,
    priceDistance,
    stopOutPrice,
    loss,
  };
}

function renderBreakdown(lines) {
  breakdownCopyPayloads = lines.map((line) => line.copyText ?? "");
  breakdown.innerHTML = lines
    .map((line, index) => {
      const copyButton = line.copyText
        ? `<button class="copy-button" type="button" data-copy-index="${index}">${t("copy")}</button>`
        : "";

      return `
        <div class="formula-item">
          <div class="formula-line-header">
            <span>${escapeHtml(line.label)}</span>
            ${copyButton}
          </div>
          <div class="formula-line">
            <code>${escapeHtml(line.formula).replaceAll("\n", "<br />")}</code>
          </div>
        </div>
      `;
    })
    .join("");
}

function formatAssetClass(assetClass) {
  const assetClassKeys = {
    forex: "assetForex",
    "forex exotic": "assetForexExotic",
    metal: "assetMetal",
    energy: "assetEnergy",
    "natural gas": "assetNaturalGas",
    crypto: "assetCrypto",
    index: "assetIndex",
    stock: "assetStock",
    ETF: "assetEtf",
  };

  return t(assetClassKeys[assetClass] ?? assetClass);
}

function formatSwapMethod(method) {
  const methodKeys = {
    points: "swapMethodPoints",
    percentage: "swapMethodPercentage",
    money: "swapMethodMoney",
  };

  return t(methodKeys[method] ?? method);
}

function formatTripleDay(day) {
  const dayKeys = {
    wed: "dayWed",
    thu: "dayThu",
    fri: "dayFri",
  };

  return t(dayKeys[day] ?? day);
}

function renderSpec(product) {
  const selectedLeverage = Number(leverageSelect.value);
  const appliedLeverage = getAppliedLeverage(product, selectedLeverage);
  const leverageText =
    product.leverageMode === "fixed"
      ? `${t("fixed")} 1:${product.defaultLeverage}`
      : product.leverageMode === "exotic-forex"
        ? `1:${formatNumber(appliedLeverage, 1)} (${formatNumber(selectedLeverage, 0)} / 10)`
        : product.leverageMode === "btc"
          ? `1:${formatNumber(appliedLeverage, 1)} (${formatNumber(selectedLeverage, 0)} x 2/5)`
        : `1:${selectedLeverage}`;
  const leverageNoteRow =
    product.leverageMode === "btc"
      ? `<dt>${t("specLeverageNote")}</dt><dd>${t("btcNote")}</dd>`
      : "";

  specList.innerHTML = `
    <dt>${t("specSymbol")}</dt><dd>${product.symbol}</dd>
    <dt>${t("specName")}</dt><dd>${product.name}</dd>
    <dt>${t("specAssetClass")}</dt><dd>${formatAssetClass(product.assetClass)}</dd>
    <dt>${t("specContractSize")}</dt><dd>${formatNumber(product.contractSize)}</dd>
    <dt>${t("specPointSize")}</dt><dd>${product.pointSize}</dd>
    <dt>${t("specCurrencies")}</dt><dd>${t("marginCurrency")} ${product.currency.margin}, ${t("profitCurrency")} ${product.currency.profit}</dd>
    <dt>${t("specLeverage")}</dt><dd>${leverageText}</dd>
    ${leverageNoteRow}
    <dt>${t("specSwap")}</dt><dd>${formatSwapMethod(product.swap.method)}, ${t("long")} ${product.swap.long}, ${t("short")} ${product.swap.short}</dd>
    <dt>${t("specTripleDay")}</dt><dd>${formatTripleDay(product.swap.tripleDay)}</dd>
  `;
}

function calculate() {
  const product = getSelectedProduct();
  const lots = Number(document.querySelector("#lots").value);
  const price = Number(priceInput.value);
  const leverage = Number(leverageSelect.value);
  const days = Number(document.querySelector("#days").value);
  const longSwap = Number(longSwapInput.value);
  const shortSwap = Number(shortSwapInput.value);
  const marginToUsdRate = Number(marginRateInput.value);
  const accountCurrency = "USD";
  const side = getSide();
  const mode = getCalculatorMode();
  const equity = Number(document.querySelector("#equity").value);
  const stopOutRatio = Number(document.querySelector("#stopOutRatio").value);

  const appliedLeverage = product ? getAppliedLeverage(product, leverage) : 0;
  const needsMarginRate = product?.currency.margin !== "USD";
  const needsStopOutInputs = mode === "stopOut";

  if (
    !product ||
    lots <= 0 ||
    price <= 0 ||
    appliedLeverage <= 0 ||
    days <= 0 ||
    Number.isNaN(longSwap) ||
    Number.isNaN(shortSwap) ||
    (needsMarginRate && (Number.isNaN(marginToUsdRate) || marginToUsdRate <= 0)) ||
    (needsStopOutInputs && (equity <= 0 || stopOutRatio <= 0 || Number.isNaN(equity) || Number.isNaN(stopOutRatio)))
  ) {
    marginResult.textContent = "-";
    pointValueResult.textContent = "-";
    dailySwapResult.textContent = "-";
    totalSwapResult.textContent = "-";
    stopOutPriceResult.textContent = "-";
    conversionNote.textContent = "";
    refreshAutoReplies({
      "auto-margin-swap": "",
      "auto-stopout": "",
    });
    return;
  }

  const pointValue = calculatePointValue(product, price, marginToUsdRate);
  const margin = calculateMargin(product, lots, price, appliedLeverage);
  const swap = calculateSwap(product, lots, side, longSwap, shortSwap, pointValue, price);
  const totalSwap = swap.daily * days;
  const convertedPointValue = pointValue.value;
  const convertedMargin = convertMarginToUsd(margin.value, margin.currency, marginToUsdRate);
  const stopOut = calculateStopOut(price, equity, stopOutRatio, convertedMargin, lots, product.contractSize, side);
  const convertedDailySwap = convertCurrency(swap.daily, swap.currency, accountCurrency);
  const convertedTotalSwap = convertCurrency(totalSwap, swap.currency, accountCurrency);
  const marginConversionText =
    margin.currency === "USD"
      ? ""
      : t("marginRateText", { currency: margin.currency, rate: formatNumber(marginToUsdRate, 5) });
  const marginFormulaLines = [
    `${t("formula")}: ${margin.originalFormula}`,
    `${margin.formula} = ${formatMoney(margin.value, margin.currency)}`,
  ];
  const marginCopyLines = [
    `${t("margin")} (${product.symbol})`,
    `${t("formula")}: ${margin.originalFormula}`,
    `${t("appliedFormula")}: ${margin.formula}`,
  ];

  if (margin.currency === "USD") {
    marginCopyLines.push(`${t("margin")}: ${formatMoney(convertedMargin, "USD")}`);
  } else {
    marginFormulaLines.push(marginConversionText, `${formatMoney(margin.value, margin.currency)} -> ${formatMoney(convertedMargin, "USD")}`);
    marginCopyLines.push(
      `${t("beforeConversion")}: ${formatMoney(margin.value, margin.currency)}`,
      marginConversionText,
      `${t("marginInUsd")}: ${formatMoney(convertedMargin, "USD")}`,
    );
  }

  const swapAppliedFormula = swap.totalFormula ? swap.totalFormula(days) : swap.formula;
  const swapFormulaLines = [
    `${t("formula")}: ${swap.originalFormula}`,
    `${swapAppliedFormula} = ${formatMoney(convertedTotalSwap, "USD")}`,
  ];
  const swapCopyLines = [
    `${t("swap")} (${product.symbol}, ${side === "buy" ? t("buy") : t("sell")})`,
    `${t("formula")}: ${swap.originalFormula}`,
    `${t("appliedFormula")}: ${swapAppliedFormula}`,
  ];
  const swapDailyForTotal = formatMoney(convertedDailySwap, "USD");

  if (swap.currency !== "USD") {
    swapFormulaLines.push(`${formatMoney(swap.daily, swap.currency)} -> ${swapDailyForTotal} ${t("daily")}`);
    swapCopyLines.push(
      `${t("beforeConversion")}: ${formatMoney(swap.daily, swap.currency)} ${t("daily")}`,
      `${t("swapInUsd")}: ${swapDailyForTotal} ${t("daily")}`,
    );
  } else {
    swapCopyLines.push(`${t("dailySwapText")}: ${swapDailyForTotal}`);
  }

  if (!swap.totalFormula) {
    const dayText = days === 1 ? t("holdingDay") : t("holdingDaysText");
    swapFormulaLines.push(`${swapDailyForTotal} x ${days} ${dayText} = ${formatMoney(convertedTotalSwap, "USD")}`);
    swapCopyLines.push(`${t("totalSwapText")}: ${swapDailyForTotal} x ${days} ${dayText} = ${formatMoney(convertedTotalSwap, "USD")}`);
  }

  pointValueResult.textContent = formatMoney(convertedPointValue, accountCurrency);
  marginResult.textContent = formatMoney(convertedMargin, accountCurrency);
  dailySwapResult.innerHTML = `<span class="${convertedDailySwap < 0 ? "negative" : ""}">${formatMoney(convertedDailySwap, accountCurrency)}</span>`;
  totalSwapResult.innerHTML = `<span class="${convertedTotalSwap < 0 ? "negative" : ""}">${formatMoney(convertedTotalSwap, accountCurrency)}</span>`;
  stopOutPriceResult.textContent = mode === "stopOut" ? formatNumber(stopOut.stopOutPrice, product.digits) : "-";
  conversionNote.textContent =
    margin.currency === "USD" && swap.currency === "USD"
      ? t("accountUsd")
      : `${t("accountUsd")} ${marginConversionText || ""}`.trim();

  const pointValueBreakdown = {
    label: t("pointValueTitle"),
    formula: `${t("formula")}: ${pointValue.originalFormula}\n${pointValue.formula} = ${formatMoney(pointValue.value, pointValue.currency)}\n${pointValue.conversionText}`,
    copyText: [
      `${t("pointValueTitle")} (${product.symbol})`,
      `${t("formula")}: ${pointValue.originalFormula}`,
      `${t("appliedFormula")}: ${pointValue.formula}`,
      pointValue.conversionText,
      `${t("pointValueText")}: ${formatMoney(convertedPointValue, "USD")}`,
    ].join("\n"),
  };
  const marginBreakdown = {
    label: t("margin"),
    formula: marginFormulaLines.join("\n"),
    copyText: marginCopyLines.join("\n"),
  };
  const swapBreakdown = {
    label: t("swap"),
    formula: swapFormulaLines.join("\n"),
    copyText: swapCopyLines.join("\n"),
  };
  const stopOutBreakdown = {
    label: t("stopOutPrice"),
    formula: [
      `${t("margin")}: ${formatMoney(convertedMargin, "USD")}`,
      `${t("stopOutAmount")}: ${formatMoney(convertedMargin, "USD")} x ${formatNumber(stopOutRatio, 2)}% = ${formatMoney(stopOut.stopOutAmount, "USD")}`,
      `${t("losableAmount")}: ${formatMoney(equity, "USD")} - ${formatMoney(stopOut.stopOutAmount, "USD")} = ${formatMoney(stopOut.losableAmount, "USD")}`,
      `${t("stopOutPrice")}: ${formatNumber(price)} ${side === "buy" ? "-" : "+"} (${formatMoney(stopOut.losableAmount, "USD")} / ${formatNumber(lots, 2)} / ${formatNumber(product.contractSize)}) = ${formatNumber(stopOut.stopOutPrice, product.digits)}`,
    ].join("\n"),
    copyText: [
      `${t("stopOutPrice")} (${product.symbol}, ${side === "buy" ? t("buy") : t("sell")})`,
      `${t("margin")}: ${formatMoney(convertedMargin, "USD")}`,
      `${t("stopOutAmount")}: ${formatMoney(convertedMargin, "USD")} x ${formatNumber(stopOutRatio, 2)}% = ${formatMoney(stopOut.stopOutAmount, "USD")}`,
      `${t("losableAmount")}: ${formatMoney(equity, "USD")} - ${formatMoney(stopOut.stopOutAmount, "USD")} = ${formatMoney(stopOut.losableAmount, "USD")}`,
      `${t("stopOutPrice")}: ${formatNumber(price)} ${side === "buy" ? "-" : "+"} (${formatMoney(stopOut.losableAmount, "USD")} / ${formatNumber(lots, 2)} / ${formatNumber(product.contractSize)}) = ${formatNumber(stopOut.stopOutPrice, product.digits)}`,
    ].join("\n"),
  };

  renderBreakdown(
    mode === "stopOut"
      ? [marginBreakdown, stopOutBreakdown]
      : [pointValueBreakdown, marginBreakdown, swapBreakdown],
  );
  renderSpec(product);

  refreshAutoReplies({
    "auto-margin-swap": buildMarginSwapReply({
      product,
      lots,
      price,
      appliedLeverage,
      margin,
      marginConversionText,
      convertedMargin,
      swap,
      convertedDailySwap,
      convertedTotalSwap,
      days,
      language: replyLanguage,
    }),
    "auto-stopout": buildStopOutReply({
      product,
      lots,
      price,
      appliedLeverage,
      margin,
      marginConversionText,
      convertedMargin,
      stopOut,
      stopOutRatio,
      equity,
      side,
      language: replyLanguage,
    }),
  });
}

function populateProducts(selectedSymbol = productSelect.value) {
  const filteredProducts = getFilteredProducts();

  productSelect.innerHTML = filteredProducts
    .map((product) => `<option value="${product.symbol}">${product.symbol} - ${product.name}</option>`)
    .join("");

  if (filteredProducts.length === 0) {
    productSelect.disabled = true;
    productSearchCount.textContent = t("noMatches");
    calculate();
    return;
  }

  productSelect.disabled = false;
  productSelect.value = filteredProducts.some((product) => product.symbol === selectedSymbol)
    ? selectedSymbol
    : filteredProducts[0].symbol;
  productSearchCount.textContent =
    filteredProducts.length === products.length
      ? `${products.length} ${t("productsCount")}`
      : currentLanguage === "zh"
        ? `${filteredProducts.length} ${t("ofProducts")} ${products.length} ${t("productsCount")}`
        : `${filteredProducts.length} ${t("ofProducts")} ${products.length} ${t("productsCount")}`;
}

function syncProductDefaults() {
  const product = getSelectedProduct();
  if (!product) {
    return;
  }

  priceInput.value = product.defaultPrice;
  if (product.leverageMode !== "fixed") {
    leverageSelect.value = String(accountLeverage);
  }
  updateLeverageControl(product);
  updateMarginRateControl(product);
  longSwapInput.value = product.swap.long;
  shortSwapInput.value = product.swap.short;
}

async function copyBreakdownText(button, text) {
  if (!text) {
    return;
  }

  const resetLabel = button.dataset.copyLabel || button.textContent;
  button.dataset.copyLabel = resetLabel;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = t("copied");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    button.textContent = t("copied");
  }

  window.setTimeout(() => {
    button.textContent = button.dataset.copyLabel || t("copy");
  }, 1400);
}

productSelect.addEventListener("change", () => {
  syncProductDefaults();
  calculate();
});

productSearchInput.addEventListener("input", () => {
  populateProducts();
  syncProductDefaults();
  calculate();
});

calculatorModeSelect.addEventListener("change", () => {
  updateCalculatorMode();
  calculate();
});

replyTemplateSelect?.addEventListener("change", syncReplyTemplate);

replyLanguageSelect?.addEventListener("change", () => {
  replyLanguage = replyLanguageSelect.value;
  calculate();
});

copyReplyButton?.addEventListener("click", () => {
  copyBreakdownText(copyReplyButton, replyText.value);
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  applyStaticText();
  populateReplyTemplates();
  populateProducts();
  syncProductDefaults();
  calculate();
});

leverageSelect.addEventListener("change", () => {
  const product = getSelectedProduct();
  if (product.leverageMode !== "fixed") {
    accountLeverage = Number(leverageSelect.value);
  }
  calculate();
});

form.addEventListener("input", calculate);
form.addEventListener("change", calculate);

breakdown.addEventListener("click", (event) => {
  const button = event.target.closest("[data-copy-index]");

  if (!button) {
    return;
  }

  const copyIndex = Number(button.dataset.copyIndex);
  copyBreakdownText(button, breakdownCopyPayloads[copyIndex]);
});

resetButton.addEventListener("click", () => {
  form.reset();
  accountLeverage = 500;
  populateProducts();
  syncProductDefaults();
  calculate();
});

applyStaticText();
updateCalculatorMode();
populateReplyTemplates();
syncReplyTemplate();
populateProducts();
syncProductDefaults();
calculate();

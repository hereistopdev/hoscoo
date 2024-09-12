const convertCurrencyToCountryCode = (currency = "USD") => {
  return currency.slice(0, 2).toLowerCase();
};

export default convertCurrencyToCountryCode;

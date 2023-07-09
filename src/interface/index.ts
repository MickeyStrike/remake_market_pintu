export interface ResponsePriceChange {
  code:    string;
  message: string;
  payload: PayloadPriceChange[];
}

export interface PayloadPriceChange {
  pair:        string;
  latestPrice: string;
  day:         string;
  week:        string;
  month:       string;
  year:        string;
}

export interface ResponseSupportedCurrencies {
  code:    string;
  message: string;
  payload: PayloadSupportedCurrencies[];
}

export interface PayloadSupportedCurrencies {
  currencyGroup:  string;
  color:          string;
  currencySymbol: string;
  name:           string;
  logo:           string;
  decimal_point:  number;
  listingDate:    Date;
  wallets:        Wallet[];
}

export interface Wallet {
  currencyGroup:  string;
  tokenSymbol:    string;
  decimal_point:  number;
  tokenType:      string;
  blockchain:     string;
  explorer:       string;
  listingDate:    Date;
  blockchainName: string;
  logo:           string;
}
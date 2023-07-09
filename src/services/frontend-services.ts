import axios from "axios";
import { ResponsePriceChange, ResponseSupportedCurrencies } from "../interface";

export const getPriceChange = () => axios({
  url: 'https://api.pintu.co.id/v2/trade/price-changes',
  method: 'GET',
  headers: {
    "Content-Type": 'application/json',
    Accept: 'application/json, text/plain, */*'
  }
})
export const getSupportedCurrencies = () => axios.get<ResponseSupportedCurrencies>('https://api.pintu.co.id/v2/wallet/supportedCurrencies')

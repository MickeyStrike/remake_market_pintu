import axios from "axios";
import { ResponsePriceChange, ResponseSupportedCurrencies, ResponseTags } from "../interface";

export const getPriceChange = () => axios.get<ResponsePriceChange>('https://api.pintu.co.id/v2/trade/price-changes')
export const getSupportedCurrencies = () => axios.get<ResponseSupportedCurrencies>('https://api.pintu.co.id/v2/wallet/supportedCurrencies')
export const getListTags = () => axios.get<ResponseTags[]>('https://content.pintu.co.id/market-tags?language.name=ID&_sort=order:ASC')

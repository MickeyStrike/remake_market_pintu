import axios from "axios";
import { ResponsePriceChange, ResponseSupportedCurrencies, ResponseTags } from "../interface";

const instance = axios.create({
  baseURL: 'http://localhost:8001',
  headers: {
    "Content-Type": 'application/json'
  }
})

export const getPriceChange = () => instance.get<ResponsePriceChange>('/price-changes')
export const getSupportedCurrencies = () => instance.get<ResponseSupportedCurrencies>('supportedCurrencies')
export const getListTags = () => axios.get<ResponseTags[]>('/market-tags')

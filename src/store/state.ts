import { PayloadPriceChange, PayloadSupportedCurrencies } from "../interface"

export interface GlobalStateType {
	dataSupportedCurrencies: PayloadSupportedCurrencies[]
	dataPriceChange: PayloadPriceChange[]
}

// DEFAULT VALUE GLOBAL STATE
export const globalState: GlobalStateType = {
	dataSupportedCurrencies: [],
  dataPriceChange: []
}
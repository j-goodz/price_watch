import axios from 'axios';

export function fetchBTCPrice(){
	return(dispatch) => {
		return axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then((res) => {
			dispatch(updateBTCPrice(res.data.data.amount));
			// console.log("btc refreshed")
		})
	}
}

export function fetchETHPrice(){
	return(dispatch) => {
		return axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot').then((res) => {
			dispatch(updateETHPrice(res.data.data.amount));
			// console.log("eth refreshed")
		})
	}
}

export function fetchPriceHist(){
	return(dispatch) => {
		return axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365&aggregate=1&e=CCCAGG&UTCHourDiff=-4').then((res) => {
			// dispatch(updateETHPrice(res.data.data.amount));
			 console.log("price hist: ", res.data.Data)
		})
	}
}



export function updateBTCPrice(amount){
    return{
        type:"UPDATE_BTC_PRICE",
        btc_price:amount
    }
}

export function updateETHPrice(amount){
    return{

        type:"UPDATE_ETH_PRICE",
        eth_price:amount
    }
}



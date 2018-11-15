import axios from 'axios';

export function fetchBTCPrice(){
	return(dispatch) => {
		return axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then((res) => {
			dispatch(updateBTCPrice(res.data.data.amount));
			console.log("btc refreshed")
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



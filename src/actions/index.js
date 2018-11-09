import axios from 'axios';
import moment from 'moment';


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
	return async (dispatch) => {
		return await axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365&aggregate=1&e=CCCAGG&UTCHourDiff=-4').then((res) => {
		let tempData = res.data.Data.map( (item) => {
				const date = moment.unix(item.time).format('YYYY-MM-DD')
				return { date: date, close: item.close } 
				// return { [date]: item.close } 
				// return tempData[date] = item.close
			})
			
			dispatch(updatePriceHist(tempData));

			let tempPrice = 0
			let tempDate = null
			for (let i = tempData.length-1; i >= 0; i--) {
				if (tempPrice < tempData[i].close) {
					tempDate = tempData[i].date
					tempPrice = tempData[i].close
				}
			}

			let snapshots = {
				peak_price: { date: tempDate, close: tempPrice },
				m1_price: tempData[tempData.length-30],
				m2_price: tempData[tempData.length-60],
				m3_price: tempData[tempData.length-90],
				m4_price: tempData[tempData.length-120],
				m5_price: tempData[tempData.length-150],
				m6_price: tempData[tempData.length-180]
			}
			
			dispatch(updatePriceSnapshots(snapshots))
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

export function updatePriceHist(history){
    return{
        type:"UPDATE_PRICE_HIST",
        price_hist: history
    }
}

export function updatePeakPrice(peakPrice){
    return{
        type:"UPDATE_PEAK_PRICE",
        peak_price: peakPrice
    }
}

export function updatePriceSnapshots(snapshots){
    return{
        type:"UPDATE_PRICE_SNAPSHOTS",
			snapshots: {
				peak_price: snapshots.peak_price,
				m1_price: snapshots.m1_price,
				m2_price: snapshots.m2_price,
				m3_price: snapshots.m3_price,
				m4_price: snapshots.m4_price,
				m5_price: snapshots.m5_price,
				m6_price: snapshots.m6_price
			}
    }
}


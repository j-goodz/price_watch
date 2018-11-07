
let defaultState = {
    send_addr: '0xcfA3c2407a547fC5cd248BBF43b829096a60Fcc0',
    interval: 60,
    btc_price: 0,
	eth_price: 0,
	price_hist: [],
	recommendation: null,
	peak_price: 0,
	m1_peak_price: 0,
	m2_peak_price: 0,
	m3_peak_price: 0,
	m4_peak_price: 0,
	m5_peak_price: 0
    };

const mainReducer = (state = defaultState, action) => {

	if(action.type === 'UPDATE_BTC_PRICE') {
		return{
			...state,
			btc_price: action.btc_price
		} 
	} else if(action.type === 'UPDATE_ETH_PRICE') {
		return{
			...state,
			eth_price: action.eth_price
		}
	} else {
		return{
			...state
		}
	}

}

export default mainReducer;

let defaultState = {
    send_addr: '0xcfA3c2407a547fC5cd248BBF43b829096a60Fcc0',
    interval: 60,
    btc_price: 0,
	eth_price: 0,
	price_hist : [],
	snapshots: {
		peak_price: 0,
		m1_price: 0,
		m2_price: 0,
		m3_price: 0,
		m4_price: 0,
		m5_price: 0,
		m6_price: 0
	}
}

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
	} else if(action.type === 'UPDATE_PRICE_HIST') {
		return{
			...state,
			price_hist: action.price_hist
		}
	} else if(action.type === 'UPDATE_PRICE_SNAPSHOTS') {
		return{
			...state,
			snapshots: action.snapshots
		}
	} else {
		return{
			...state
		}
	}

}

export default mainReducer


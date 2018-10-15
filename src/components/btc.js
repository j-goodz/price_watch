import React, { Component } from 'react';
//import { connect } from 'react-redux';

const BTCPrice = (props) => {
	console.log(props)
	return <div><p>1 BTC = {props.btc_price} USD </p></div>;
}

// function mapStateToProps(state){
// 	console.log('mapStateToProps: ', state)
// 	return {
// 		btc_price: state.btc_price
// 	}
// }

export default BTCPrice;
// export default connect(mapStateToProps)(BTCPrice);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class RefreshButton extends Component {
	constructor(props){
		super(props);
		this.refreshPrice = this.refreshPrice.bind(this)
	}
	
	refreshPrice() {
    	this.props.fetchBTCPrice();
    	this.props.fetchETHPrice();
  	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.refreshPrice}>Refresh Price</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { fetchBTCPrice, fetchETHPrice } = state
  	return { fetchBTCPrice, fetchETHPrice }
}


export default connect(mapStateToProps, actionCreators)(RefreshButton)


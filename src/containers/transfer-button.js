import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';

class TransferButton extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     web3: null
    //   }
	this.handleClick = this.handleClick.bind(this)
  	}

  	componentDidMount() {

  	}

	async handleClick() { 

  	}


	render() {
		return (
			<div>
				<button type="button" onClick={this.handleClick} >Transfer $5 <br />({  1 /  this.props.eth_price * 5  } Ether)</button> 
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return state
}

export default connect (mapStateToProps)(TransferButton)



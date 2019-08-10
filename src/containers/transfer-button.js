import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';

export class TransferButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        web3: null,
        from_addr: null
      }
	this.handleClick = this.handleClick.bind(this)
  	}

  	async componentDidMount() {
		try {

			if (this.state.web3 === null ) {
				let web3 = new Web3(window.web3.currentProvider);
				this.setState({ web3 })

				let [ from_addr, _ ] = await web3.eth.getAccounts()
				this.setState({ from_addr })
			}
			console.log("this.state:", this.state);

		} catch (err) {
      		console.log("Error finding web3.", err);
    	}
  	}

	async handleClick() { 
		try {
			console.log("this.state.web3:", this.state.web3);
			let amount = ""+(1 / this.props.eth_price * 5)
 			await this.state.web3.eth.sendTransaction({
	            from: this.state.from_addr,
	            to: this.props.send_addr,
	            value: this.state.web3.utils.toWei(amount , 'ether')
        	})   
        } catch (err) {
      		console.log(err);
    	}   
  	}


	render() {
		return (
			<div>
				<button type="button" onClick={this.handleClick} >Transfer $5 <br />({  1 / this.props.eth_price * 5  } Ether)</button> 
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { btc_price, eth_price, send_addr } = state
  	return { btc_price, eth_price, send_addr }
}

export default connect (mapStateToProps)(TransferButton)



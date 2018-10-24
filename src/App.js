import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timer: null
      }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount() {
    let timer = setInterval(this.tick, 1000 * this.props.interval)
    this.setState({timer})
    this.refreshPrice()
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer)
  }

  refreshPrice() {
    this.props.fetchBTCPrice()
    this.props.fetchETHPrice()
    console.log("refreshed price!")
  }

  tick() {
    this.refreshPrice()
  }

  render() {
    return (
      <div className="App">
        <p>Price updates every {this.props.interval} seconds.</p>
        <BTCPrice btc_price={this.props.btc_price} />
        <ETHPrice eth_price={this.props.eth_price} />
      </div>
    );
  }
}

const mapStateToProps=(state) => {
  const { btc_price, eth_price, interval } = state
  return { btc_price, eth_price, interval }
};

export default connect (mapStateToProps, actionCreators)(App);


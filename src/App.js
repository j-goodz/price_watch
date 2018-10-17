import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import './App.css';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';


class App extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this)
  }

  async componentDidMount() {
    let timer = setInterval(this.tick, 1000 * this.props.interval)
    this.setState({timer})
    this.props.fetchBTCPrice()
    this.props.fetchETHPrice()
  }

  componentWillUnmount() {
    this.clearInterval(this.props.timer)
  }

  tick() {
    this.setState({counter: this.props.counter + 1})
    this.props.fetchBTCPrice()
    this.props.fetchETHPrice()
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
  return state
};

export default connect (mapStateToProps, actionCreators)(App);


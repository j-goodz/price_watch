import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      send_addr: '0xcfA3c2407a547fC5cd248BBF43b829096a60Fcc0',
      timer: null,
      interval: 4,
      counter: 0,
      btc_price: 0,
      eth_price: 0
    };

    this.fetchPrices = this.fetchPrices.bind(this)
    this.tick = this.tick.bind(this)
  }

  async componentDidMount() {
    let timer = setInterval(this.tick, 1000 * this.state.interval)
    this.setState({timer})
    this.fetchPrices()
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer)
  }

  tick() {
    this.setState({counter: this.state.counter + 1})
    this.fetchPrices()
    // console.log("state: ", this.state)
  }

  async fetchPrices() {
      await axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot').then((res) => {
        this.setState({ btc_price: res.data.data.amount })
      })
      await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot').then((res) => {
        this.setState({ eth_price: res.data.data.amount })
      })
  }

  render() {
    return (
      <div className="App">
        <p>Price updates every {this.state.interval} seconds.</p>
        <BTCPrice btc_price={this.state.btc_price} />
        <ETHPrice eth_price={this.state.eth_price} />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      send_addr: '0xcfA3c2407a547fC5cd248BBF43b829096a60Fcc0',
      timer: null,
      counter: 0,
      "btc_data": {
        "base": "BTC",
        "currency": "USD",
        "amount": "6210.98"
      },
      "eth_data": {
        "base": "ETH",
        "currency": "USD",
        "amount": "205.01"
      }
    };

    this.tick = this.tick.bind(this)
  }

  async componentDidMount() {
    let timer = setInterval(this.tick, 1000 * 1)
    this.setState({timer})
    console.log("state: ", this.state)
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer)
  }

  tick() {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div className="App">

        <BTCPrice btc_price={this.state.btc_data.amount} />
        <ETHPrice eth_price={this.state.eth_data.amount} />

      </div>
    );
  }
}

export default App;

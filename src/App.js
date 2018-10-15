import React, { Component } from 'react';
import './App.css';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btc_price: 0,
      eth_price: 0
    };

  }

  render() {
    return (
      <div className="App">


        <BTCPrice btc_price={this.state.btc_price} />

        <ETHPrice />


      </div>
    );
  }
}

export default App;

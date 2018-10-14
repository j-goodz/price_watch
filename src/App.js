import React, { Component } from 'react';
import './App.css';
import BTCPrice from './components/btc';
import ETHPrice from './components/eth';

class App extends Component {
  render() {
    return (
      <div className="App">


        <BTCPrice />

        <ETHPrice />


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Web3 = require('web3');
let web3 = new Web3('http://127.0.0.1:8545');


class App extends Component {
  state:State
  constructor(){
    super()
    this.state = {
      accounts:[],
      op:''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => {
          web3.eth.getBalance('0x60E0A40639497b3cBb73eb5AFE7A3Ea0F2a4f042').then((price)=>this.setState({op: price}))
        }}>
          operation
        </button>
        <p className="App-intro">
          {this.state.op}
        </p>
        <button onClick={() => {
          web3.eth.getAccounts().then((accounts)=>this.setState({accounts}))
        }}>
          Show accounts
        </button>
        {
          this.state.accounts.map(acc => (
            <p className="App-intro" key={acc}>
              {acc}
            </p>
          ))
        }
      </div>
    );
  }
}

export default App;

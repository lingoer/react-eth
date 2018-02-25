import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Web3 = require('web3');
let web3 = new Web3('http://127.0.0.1:8545');
const abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendCoin",
      "outputs": [
        {
          "name": "sufficient",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalanceInEth",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
const add = '0xc2eb6169480b6166e0114a37637f98113532f035'
const contract = new web3.eth.Contract(abi, add);


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
          console.log(contract.methods.sendCoin('0x4ee684FeAC6a7a7028480ECc82D48fa9C326610F', 10))
          contract.methods.getBalance('0x4ee684FeAC6a7a7028480ECc82D48fa9C326610F').call().then(console.log);
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

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    cryptos: []
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        this.setState({
          cryptos
        })
      })
  }

  render() {
    return (
      <div className="App">
        {
          Object.keys(this.state.cryptos).map((item, index) => (
            <div key={index} id="crypto-container">
              <span className="left">{item}</span>
              <span className="right">{this.state.cryptos[item].USD}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;

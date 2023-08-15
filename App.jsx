import React, { Component } from 'react';
import CostumChart from './components/costumChart';
import CryptoList from './components/cryptoList';
import CryptoTime from './components/cryptoTime';
import HomeLogo from './components/homeLogo';
import NavBar from './components/navBar';
import Trending from './components/trending';

class App extends Component {
  state = {
    coins: [{ id: 'bitcoin', name: 'Bitcoin' },
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'tether', name: 'Tether' },
    { id: 'binancecoin', name: 'BNB' },
    { id: 'ripple', name: 'XRP' },
    { id: 'usd-coin', name: 'USD Coin' },
    { id: 'staked-ether', name: 'Lido Staked Ether' },
    { id: 'dogecoin', name: 'Dogecoin' },
    { id: 'cardano', name: 'Cardano' },
    { id: 'solana', name: 'Solana' },
    ],
    selectedTime: null,
    selectedCoin: null,
  }

  handleCoinSelect = (coin) => {
    this.setState({ selectedCoin: coin });
  };

  handleTimeSelect = (time) => {
    this.setState({ selectedTime: time });
  };

  render() {
    const { coins, selectedCoin, selectedTime } = this.state;
    return (
      <div>
        <NavBar />
        <div className='container'>
          <HomeLogo className="homeLogo" />
          <CostumChart
            title="Chart"
            coins={coins}
            selectedCoin={selectedCoin}
            onCoinSelect={this.handleCoinSelect}
            selectedTime={selectedTime}
            onTimeSelect={this.handleTimeSelect}
          />

          <CryptoList
            title="Crypto List"
            coins={coins}
            selectedCoin={selectedCoin}
            onCoinSelect={this.handleCoinSelect}
          />
          <CryptoTime
            title="Crypto Time"
            selectedTime={selectedTime}
            onTimeSelect={this.handleTimeSelect}
          />
        </div>
        <Trending coins={coins} selectedTime={selectedTime} />
      </div>
    );
  }
}
export default App;

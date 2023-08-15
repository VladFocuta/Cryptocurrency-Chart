import React from 'react';

const CryptoList = ({ coins, selectedCoin, onCoinSelect }) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedCoin ? selectedCoin.name : 'Crypto List'}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {coins.map((coin) => (
            <button
              key={coin.id}
              className="dropdown-item"
              type="button"
              onClick={() => {
                onCoinSelect(coin);
              }}
            >
              {coin.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default CryptoList;

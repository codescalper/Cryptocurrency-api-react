import React, { useState } from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

import "./Coins.css";

const Coins = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = props.coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for CryptoCurrencies..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {filteredCoins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;

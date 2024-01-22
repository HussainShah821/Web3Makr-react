// Home.js

import React from 'react';

import Homebg from '../Assets/Images/Homebg.png';
import PlayImage from '../Assets/Images/Play 02.png';
import ScreenImage from '../Assets/Images/Screen.png';

const Home = () => {
  return (
    <section className="home-background" style={{ backgroundImage: `url(${Homebg})` }}>
      <div className="container">
        <p id="web3">Web3Makr Redefining How You Create</p>
      </div>
      <div className="container desc-layout">
        <p id="web3-desc">Unlock the blockchain potential to create Web3 Applications</p>
      </div>
      <div className="play">
        <img src={PlayImage} alt="" />
      </div>
      <div className="col-md-12">
        <div className="Screen w-75">
          <img src={ScreenImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import Burger_Queen01 from '../../Image/Burger_Queen01.png';
import './style.css';

const Logo = () => {
  return (
    <figure className="figure-login">
      <img src={Burger_Queen01} alt="Logo" className="logo-login"></img>
    </figure>
  );
};

export default Logo;

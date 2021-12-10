/* eslint-disable func-names */
import React from 'react';
import Clock from 'react-live-clock';
import LogoLet from '../assets/Logo_let.png';

import './Styles/Header.css';

const Header = function () {
  const fecha = new Date().toString().slice(4, 16);

  return (
    <section id="header">
      <img src={LogoLet} alt="Burger-Queen-Logo" id="logo2" />
      <h1 id="time">
        {fecha}
        <Clock format="HH:mm:ss" ticking timezone="US/Central" />
      </h1>
    </section>
  );
};

export default Header;

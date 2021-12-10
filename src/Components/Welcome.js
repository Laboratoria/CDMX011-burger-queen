/* eslint-disable func-names */
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import hamburger from '../assets/hamburger.gif';

import './Styles/Nav.css';

const Welcome = function () {
  return (
    <section>
      <Header />
      <Nav />
      <div className="image_hamburger">
        <img src={hamburger} alt="Burger-Queen" id="img-wlm" />
      </div>
    </section>
  );
};
export default Welcome;

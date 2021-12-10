/* eslint-disable func-names */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import LogoFig from '../assets/Logo_fig.png';

import './Styles/Nav.css';

const Nav = function () {
  return (
    <nav>
      <img src={LogoFig} alt="Burger-Queen-Logo" id="logo1" />
      <Link to="/newOrder">
        <button className="section btn-nav" id="btn-new-ord">
          Nueva orden
        </button>
      </Link>
      <Link to="/cooking">
        <button className="section btn-nav" id="btn-recep">
          Recepción
        </button>
      </Link>
      <Link to="/delivered">
        <button className="section btn-nav" id="btn-recep">
          Entregas
        </button>
      </Link>
    </nav>
  );
};

export default Nav;

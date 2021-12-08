import React from "react";
import "./Styles/Nav.css";
import LogoFig from "../assets/Logo_fig.png";
import { Link } from "react-router-dom";

function Nav() {
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
}

export default Nav;

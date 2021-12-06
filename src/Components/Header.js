import React from "react";
import "./Styles/Header.css";
import LogoLet from "../assets/Logo_let.png";

function Header() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let time = `${d} ${h}:${m}:${s}`;
  let shortTime = time.slice(4, 25);

  return (
    <section id="header">
      <img src={LogoLet} alt="Burger-Queen-Logo" id="logo2" />
      <p id="time">{shortTime} </p>
    </section>
  );
}

export default Header;

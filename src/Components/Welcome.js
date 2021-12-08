import React from "react";
import hamburger from "../assets/hamburger.gif";
import "./Styles/Nav.css";
import Header from "./Header";
import Nav from "./Nav";

const Welcome = () => {
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

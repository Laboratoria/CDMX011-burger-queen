import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import ShowMenu from "./ShowMenu";
import { createOrder } from "../firebase.js";

function Orders() {
  const addClient = (clientData) => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = d + h + ":" + m + ":" + s;

    createOrder(`order/${time}`, clientData);
    console.log("nueva orden agregada");
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceAround",
      }}
    >
      <Header />
      <Nav />
      <ShowMenu addOrder={addClient} />
    </section>
  );
}

export default Orders;

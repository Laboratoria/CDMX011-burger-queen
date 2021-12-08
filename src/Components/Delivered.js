import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./Styles/Reception.css";
import db from "../firebase";

function Delivered() {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, "order"),
    orderBy("createdTime", "asc")
  );

  useEffect(() => {
    const allOrders = async () => {
      onSnapshot(getOrders, (querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
            // if(doc.status === "Entregada"){
                orders.push({ ...doc.data(), id: doc.id });
            //}
        });
        setComanda(orders);
      });
    };
    allOrders();
  }, [getOrders]);

  return (
    <section>
      <Header />
      <Nav />
      <div id="comanda-container">
        {comanda.map((item, i) => {
        //   if (item.status === "Entregada"){
          return (
            <section id="postit">
              <div id="order-header">
                <h1>Cliente: {item.client}</h1>
                <h1>Mesa: {item.table}</h1>
              </div>

              <div id="order-content">
                <hr />
                {item.order.map((elem, i) => {
                  return (
                    <table>
                      <tbody>
                        <tr key={i}>
                          <td>{elem.qty}</td>
                          <td>{elem.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
                <hr />
                <p>Creada: {item.id.slice(4, 25)}</p>
                <p>{item.Timer}</p>
              </div>

              <div id="order-info">
                <h1 id="delivered-status">{item.status}</h1>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Delivered;

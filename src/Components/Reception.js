import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./Styles/Reception.css";
import db from "../firebase";
import check from "../assets/check.png";
import delivery from "../assets/delivery.png"

function Cooking() {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, "order"),
    orderBy("createdTime", "asc")
  );

  const handleStatus = (status, id) => {
    //console.log(status)
    if (status === "En proceso") {
      const orderRef = doc(db, "order", id);
      updateDoc(orderRef, {
        status: "Preparado", cooked: serverTimestamp()
      });
      console.log("Status actualizado");
    }
  };

  useEffect(() => {
    const allOrders = async () => {
      onSnapshot(getOrders, (querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ ...doc.data(), id: doc.id });
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
          //console.log(item)
          return (
            <section id="postit">
              <div id="order-header">
                <h1>Cliente: {item.client}</h1>
                <h1>Mesa: {item.table}</h1>
              </div>

              <div id="order-content">
                <hr />
                {item.order.map((elem, i, j) => {
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
                {/* <p>Finalizada: {item.cooked}</p> */}
              </div>

              <div id="order-info">
                <h1 id="status">{item.status}</h1>
                <img
                  id="check"
                  src={check}
                  alt="OK"
                  key={item.id}
                  onClick={() => handleStatus(item.status, item.id)}
                ></img>
                <img
                id="delivery"
                src={delivery}
                alt="delivery"
                ></img>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Cooking;

import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./Styles/Reception.css";
import db from "../firebase";
import check from "../assets/check.png";
import delivery from "../assets/delivery.png";

function Cooking() {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, "order"),
    orderBy("createdTime", "asc")
  );

  const handleStatus = async (status, id, createdTime, cooked) => {
    //console.log(status)
    //console.log(createdTime)
    if (status === "En proceso") {
      let orderRef = doc(db, "order", id);

      await updateDoc(orderRef, {
        status: "Preparado",
        cooked: new Date(),
      });
      console.log("Status actualizado");
    }
    if (status === "Preparado") {
      const firstTime = new Date(createdTime * 1000);
      const totalMinutesFirst =
        firstTime.getHours() * 60 + firstTime.getMinutes();

      const secondTime = new Date();
      const totalMinutesSecond =
        secondTime.getHours() * 60 + secondTime.getMinutes();

      const finalTime = `Tu orden tardó ${
        totalMinutesSecond - totalMinutesFirst
      } minutos en hacerse`;

      console.log(finalTime);

      let orderRef = doc(db, "order", id);

      updateDoc(orderRef, {
        Timer: finalTime,
      });
      console.log("Timer");
    }
  };

  const handleDelivery = async (status, id) => {
    if (status === "Preparado") {
      let orderRef =  doc(db, "order", id);

      await updateDoc(orderRef, {
        status: "Entregada",
      });
      console.log("Orden entregada");
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
                <h1 id="status">{item.status}</h1>
                <img
                  id="check"
                  src={check}
                  alt="OK"
                  key={item.id}
                  onClick={() =>
                    handleStatus(
                      item.status,
                      item.id,
                      item.createdTime,
                      item.cooked
                    )
                  }
                ></img>
                <img
                  id="delivery"
                  src={delivery}
                  alt="delivery"
                  onClick={() => handleDelivery(item.status, item.id)}
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

/* eslint-disable func-names */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';
import check from '../assets/check.png';
import delivery from '../assets/delivery.png';

import db from '../firebase';
import './Styles/Reception.css';

const Cooking = function () {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, 'order'),
    orderBy('createdTime', 'asc'),
  );

  const handleStatus = async (status, id, createdTime, cooked) => {
    if (status === 'En proceso') {
      const orderRef = doc(db, 'order', id);

      await updateDoc(orderRef, {
        status: 'Preparado',
        cooked: new Date(),
      });
    }
    if (status === 'Preparado') {
      const firstTime = new Date(createdTime * 1000);
      const totalMinutesFirst = firstTime.getHours() * 60 + firstTime.getMinutes();

      const secondTime = new Date();
      const totalMinutesSecond = secondTime.getHours() * 60 + secondTime.getMinutes();

      const finalTime = `Tu orden tardó ${
        totalMinutesSecond - totalMinutesFirst
      } minutos en hacerse.`;

      const orderRef = doc(db, 'order', id);

      updateDoc(orderRef, {
        Timer: finalTime,
      });
    }
  };

  const handleDelivery = async (status, id) => {
    if (status === 'Preparado') {
      const orderRef = doc(db, 'order', id);

      await updateDoc(orderRef, {
        status: 'Entregada',
      });
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
        {comanda.map((item, i) => (
          <section id="postit">
            <div id="order-header">
              <h1>
                Cliente:
                {item.client}
              </h1>
              <h1>
                Mesa:
                {item.table}
              </h1>
            </div>

            <div id="order-content">
              <hr />
              {item.order.map((elem, i) => (
                <table>
                  <tbody>
                    <tr key={i}>
                      <td>{elem.qty}</td>
                      <td>{elem.name}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
              <hr />
              <p>
                Creada:
                {item.id.slice(4, 25)}
              </p>
              <p>{item.Timer}</p>
            </div>

            <div id="order-info">
              <h1 id="status">{item.status}</h1>
              <img
                id="check"
                src={check}
                alt="OK"
                key={item.id}
                onClick={() => handleStatus(
                  item.status,
                  item.id,
                  item.createdTime,
                  item.cooked,
                )}
              />
              <img
                id="delivery"
                src={delivery}
                alt="delivery"
                onClick={() => handleDelivery(item.status, item.id)}
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Cooking;

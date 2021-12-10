/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';

import db from '../firebase';
import './Styles/Reception.css';

const Delivered = function () {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, 'order'),
    where('status', '==', 'Entregada'),
    orderBy('createdTime', 'asc'),
  );

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
        {comanda.map((item, i) =>
          (
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
                {item.order.map((elem) => (
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
                <h1 id="delivered-status">{item.status}</h1>
              </div>
            </section>
          ))}
      </div>
    </section>
  );
};

export default Delivered;

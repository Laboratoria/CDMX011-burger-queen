/* eslint-disable func-names */
/* eslint-disable react/no-invalid-html-attribute */
/* eslint-disable react/react-in-jsx-scope */
import Header from './Header';
import Nav from './Nav';
import ShowMenu from './ShowMenu';

import { createOrder } from '../firebase.js';

const Orders = function () {
  const addClient = (clientData) => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const time = `${d + h}:${m}:${s}`;

    createOrder(`order/${time}`, clientData);
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceAround',
      }}
    >
      <Header />
      <Nav />
      <ShowMenu addOrder={addClient} />
    </section>
  );
};

export default Orders;

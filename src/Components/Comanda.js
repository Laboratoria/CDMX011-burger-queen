/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TotalItems from './TotalItems';
import Submit from './Submit';

import './Styles/ShowMenu.css';

const Comanda = function ({
  order,
  client,
  table,
  category,
  addOrder,
  onRemove,
  onAdd,
  reset,
}) {
  const totalOrder = order.length !== 0
    ? order.map((product) => product.price)
    : [];

  return (
    <div>
      <div id="resumen">
        <div id="resumen-header">
          <label className="resume-values">
            Cliente:
            {client}
          </label>
          <label className="resume-values">
            Mesa:
            {table}
          </label>
          <label className="resume-values">{category}</label>
        </div>
        <hr />
        {order.map((item, i) => (
          <table id="items" key={i}>
            <tbody>
              <tr>
                <td id="dish">{item.name}</td>
                <td className="priceTrash">
                  {item.qty}
                  {' '}
                  x $
                  {item.price}
                </td>
                <td>
                  <button
                    className="qty-item"
                    onClick={() => {
                      onAdd(item);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="qty-item"
                    onClick={() => {
                      onRemove(item);
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        <div id="total_price">
          <TotalItems order={order} price={totalOrder} />
        </div>
      </div>
      <Submit
        reset={reset}
        addOrder={addOrder}
        order={order}
        client={client}
        table={table}
        category={category}
        price={totalOrder}
      />
    </div>
  );
};

export default Comanda;

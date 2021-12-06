import React from "react";
import "./Styles/ShowMenu.css";
import TotalItems from "./TotalItems";
import Submit from "./Submit";

const Comanda = ({
  order,
  client,
  table,
  category,
  addOrder,
  onRemove,
  onAdd,
  reset,
}) => {
  //condicionar para que aparezca el 0 si aún no se han escogido elementos
  const totalOrder =
    order.length !== 0
      ? order.map((product) => {
        return product.price;
      })
      : [];

  return (
    <div>
      <div id="resumen">
        <div id="resumen-header">
          <label className="resume-values">Cliente: {client} </label>
          <label className="resume-values">Mesa: {table} </label>
          <label className="resume-values">{category}</label>
        </div>
        <hr />
        {order.map((item, i) => (
          <table id="items" key={i}>
            <tbody>
              <tr>
                <td id="dish">{item.name}</td>
                <td className="priceTrash">
                  {item.qty} x ${item.price}
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
                {/* <td className='priceTrash'><i className="fas fa-trash-alt"></i></td>  */}
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

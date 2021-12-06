import React, { useState } from "react";
import Data from "../Data/menu.json";
import "./Styles/Cards.css";
import Comanda from "./Comanda";

function MenuMeals({ category, addOrder }) {
  const meals = Data.items.filter(
    (item) => item.category === "Comida" || item.category === "extra"
  );

  //Declaración del estado inicial, el valor y lo que hará que el valor cambie
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");

  const resetElem = (e) => {
    setOrder([]);
    setClient("");
    setTable("");
  };

  const handleName = (e) => {
    const { value } = e.target;
    setClient(value);
  };

  const handleTable = (e) => {
    const { value } = e.target;
    setTable(value);
  };

  const onAdd = (item) => {
    const exist = order.find((x) => x.id === item.id);
    if (exist) {
      setOrder(
        order.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setOrder([...order, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const exist = order.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setOrder(order.filter((x) => x.id !== item.id));
    } else {
      setOrder(
        order.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <div id="order">
        <label>Cliente: </label>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={client}
          onChange={handleName}
        />
        <label>Mesa: </label>
        <input
          id="input-table"
          type="text"
          placeholder="0"
          name="table"
          value={table}
          onChange={handleTable}
        ></input>
      </div>
      <section className="op-container">
        {meals.map((product) => (
          <button
            className="add-meals"
            key={product.id}
            value={product.name}
            onClick={() => {
              setOrder([
                ...order,
                { name: product.name, price: product.price, id: product.id },
              ]);
              onAdd(product);
            }}
          >
            {product.name} <br /> ${product.price}
          </button>
        ))}
        <Comanda
          reset={resetElem}
          onRemove={onRemove}
          onAdd={onAdd}
          addOrder={addOrder}
          order={order}
          client={client}
          table={table}
          category={category}
        />
      </section>
    </div>
  );
}

export default MenuMeals;

import React, { useState } from "react";
import Data from "../Data/menu.json";
import "./Styles/Cards.css";
import Comanda from "./Comanda";

function MenuBf({ category, addOrder }) {
  const breakfast = Data.items.filter((item) => item.category === "Desayuno");

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
          onSubmit={resetElem}
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
      <section className="op-container-bf menu_bf">
        {breakfast.map((product) => {
          return (
            <button
              className="add-bf"
              key={product.id}
              value={product.name}
              onClick={() => {
                setOrder([
                  ...order,
                  { name: product.name, price: product.price, id: product.id },
                ]);
                onAdd(product);
                console.log(order);
              }}
            >
              {product.name} <br /> ${product.price}
            </button>
          );
        })}
        <Comanda
          reset={resetElem}
          onAdd={onAdd}
          onRemove={onRemove}
          order={order}
          client={client}
          table={table}
          category={category}
          addOrder={addOrder}
        />
      </section>
    </div>
  );
}

export default MenuBf;

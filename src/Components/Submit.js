import React, { useState } from "react";
import { serverTimestamp } from "firebase/firestore";

const Submit = ({ order, client, table, category, addOrder, reset }) => {
  const initialValues = {
    client: "",
    table: "",
    category: "",
    order: [],
  };

  let [status] = useState("En proceso");

  let [values] = useState(initialValues);

  values = {
    client: client,
    table: table,
    category: category,
    order: order,
    createdTime: serverTimestamp(),
    status: status,
  };

  const resetPage = (e) => {
    alert("¿Estás seguro?");
    reset(e);
  };

  const resetComanda = (e) => {
    //console.log(e)
    handleSubmit(e);
    reset(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('holi', e)
    addOrder(values);
  };

  return (
    <div id="btn-send">
      <button className="btn-op cancel" type="submit" onClick={resetPage}>
        Cancelar
      </button>
      <button className="btn-op confirm" type="submit" onClick={resetComanda}>
        Confirmar
      </button>
    </div>
  );
};

export default Submit;

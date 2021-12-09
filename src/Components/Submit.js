/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';

const Submit = function ({
  order, client, table, category, addOrder, reset,
}) {
  const initialValues = {
    client: '',
    table: '',
    category: '',
    order: [],
  };

  const [status] = useState('En proceso');

  let [values] = useState(initialValues);

  values = {
    client,
    table,
    category,
    order,
    createdTime: serverTimestamp(),
    status,
  };

  const resetPage = (e) => {
    alert('¿Estás seguro?');
    reset(e);
  };

  const resetComanda = (e) => {
    handleSubmit(e);
    reset(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

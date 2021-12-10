/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';

import './Styles/ShowMenu.css';

const TotalItems = function ({ price, order }) {
  const [total, setTotal] = useState(0);

  const multPrice = order.map((item) => item.qty * item.price);

  useEffect(() => {
    const suma = multPrice.length !== 0
      ? multPrice.reduce((a, b) => a + b)
      : 0;
    setTotal(suma);
  }, [total, price, multPrice]);

  return (
    <div id="total-price">
      Total: $
      {total}
    </div>
  );
};

export default TotalItems;

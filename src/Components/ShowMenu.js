/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React, { useState } from 'react';
import MenuBf from './MenuBf';
import MenuMeals from './MenuMeal';

import './Styles/ShowMenu.css';

const ShowMenu = function ({ addOrder }) {
  const [typeOfFood, setTypeOfFood] = useState('Desayuno');

  const selectCategory = (e) => {
    setTypeOfFood(e.target.value);
  };

  return (
    <div id="menu-container">
      <div id="btn-options">
        <input
          type="button"
          className="btn-op menu-bf"
          name="category"
          value="Desayuno"
          onClick={selectCategory}
        />
        <input
          type="button"
          className="btn-op menu-m"
          name="category"
          value="Comida"
          onClick={selectCategory}
        />
      </div>
      <div id="menu">
        {typeOfFood === 'Desayuno' ? (
          <MenuBf addOrder={addOrder} category={typeOfFood} />
        ) : (
          <MenuMeals addOrder={addOrder} category={typeOfFood} />
        )}
      </div>
    </div>
  );
};

export default ShowMenu;

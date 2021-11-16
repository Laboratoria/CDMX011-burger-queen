import React, { useState } from 'react';
import MenuBf from './MenuBf';
import MenuMeals from './MenuMeal';
import './Styles/ShowMenu.css';

function ShowMenu(props) {
  //se declara lo que quiero que cambie
  //const [client, setClient] = useState('');
  const [typeOfFood, setTypeOfFood] = useState('breakfast');

    //Cachar el nombre del cliente y mesa
    const handleInputChange = (e) => {
      const {name, value} = e.target;
      //console.log(name, value)
      setValues({...values, [name]: value})     
    };

    //Estado inicial de la toma de orden
    const initialStateValues = {      
      client: '',
      table: '',
      category: '',
      order: [],
      total: 0    
    };

    const [values, setValues] = useState(initialStateValues);

    //Enviar datos del formulario y resetear
    const handleSubmit = (e) => {
      e.preventDefault()
      //console.log(values)
      props.addOrEdit(values);
      setValues({...initialStateValues})
    };
    
    return (
      <div id="menu-container">
        <div id="btn-options">
          <button className="btn-op menu-bf" onClick={()=>{setTypeOfFood('breakfast')}}>Desayuno</button>
          <button className="btn-op menu-m" onClick={()=>{setTypeOfFood('meal')}}>Almuerzo</button>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <div id="order">
          <label>Cliente: </label> 
          <input 
            type="text" 
            name="client"
            value={values.client}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <label>Mesa: </label>           
          <input id="input-table" name="table" value={values.table} onChange={handleInputChange} type="text" placeholder="0" ></input>
          {/* <p>Conteo: {count}</p>           */}
        </div>
        <div id="menu">
          {
            typeOfFood === 'breakfast'? <MenuBf/>:<MenuMeals/>
          }
        </div>
        <section id="resumen"></section>
        <div id="btn-send">
          <button className="btn-op cancel" >Cancelar</button>
          <button className="btn-op confirm" type="submit" onClick={handleSubmit} >Confirmar</button>
        </div>
        {/* </form> */}
      </div>  
    )  
}

export default ShowMenu

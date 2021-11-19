import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
import Comanda from './Comanda';


function MenuMeals() {

const meals = Data.items.filter(item => item.category === "Comida" || item.category === "extra")

const handleInputChange = (e) => { console.log(e) }
//Declaración del estado inicial, el valor y lo que hará que el valor cambie
const [order, setOrder]= useState([])

// const selectElem = (e) => {
//     setTypeOfElem(e.target.value)
//     handleInputChange(e)
//     //console.log(typeOfElem)
//   }

    return (
        <section className="op-container">
            {meals.map(product =>  (
                <button className= "add-meals" key={product.id} value={product.name} onClick={()=>{setOrder([...order, {name:product.name, price:product.price}]);
            console.log(order)}}> 
                    {product.name} <br/> ${product.price}
                </button>
            ))}   
        <Comanda order={order}/>
        </section>
          
    )

}

export default MenuMeals

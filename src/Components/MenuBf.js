import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
import Comanda from './Comanda';


function MenuBf() {

const breakfast = Data.items.filter(item => item.category === "Desayuno")

//Declaración del estado inicial, el valor y lo que hará que el valor cambie
const [order, setOrder]= useState([])


return (
    <section className="op-container-bf">
        {breakfast.map(product => {
        return (
            <button className= "add-bf" key={product.id} value={product.name} onClick={()=>{setOrder([...order, {name:product.name, price:product.price}]);
            console.log(order)}}> 
                {product.name} <br/> ${product.price}
            </button>
        )})}                   
    <Comanda order={order}/>
    </section>
      
)
}

export default MenuBf


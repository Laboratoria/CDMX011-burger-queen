import React from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
//import AddItem from './AddItem';


function MenuMeals() {
const meals = Data.items.filter(item => item.category === "Comida" || item.category === "extra")

    return (
        <section className="op-container">
            {meals.map(({name, price, id, }) => {
            return (
                <button className= "add-meals" key={name} id = {id} price = {price}> 
                    {name} <br/> ${price}
                </button>

            )
            })}                   

        </section>
          
    )
}

export default MenuMeals

// <table className="menu-bf">
            //     <thead>
            //         <tr>
            //             <th>Platillo</th>
            //             <th>Precio</th>
            //             <th>Cantidad</th>
            //             <th>Total</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {meals.map((item, i) => {
            //             return (
            //                     <tr key={i}>
            //                     <td>{item.name}</td>
            //                     <td>${item.price}</td>
            //                     <td><AddItem /></td>
            //                     <td>$0</td>
            //                 </tr>
            //             );
            //         })}
            //     </tbody>
            // </table>
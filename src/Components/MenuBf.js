import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
import Comanda from './Comanda';


function MenuBf() {

const breakfast = Data.items.filter(item => item.category === "Desayuno")

const handleInputChange = (e) => { console.log(e) }
//Declaración del estado inicial, el valor y lo que hará que el valor cambie
const [order, setOrder]= useState([])

// const [cost, setCost] = useState(0)
// const [keyItem, setKeyItem] = useState(0)
// const catchvalue = (e, k) => {
//     console.log(e)
//     setCost(e)
//     setKeyItem(k)
// }
// const { handleItem } = props;

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


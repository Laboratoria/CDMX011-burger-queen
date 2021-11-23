import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
import Comanda from './Comanda';


function MenuBf({category}) {

const breakfast = Data.items.filter(item => item.category === "Desayuno")

//Declaración del estado inicial, el valor y lo que hará que el valor cambie
const [order, setOrder]= useState([])
const [client, setClient]= useState([])
const [table, setTable] = useState([])

const handleName = (e) => {
   const {value} = e.target
    setClient(value)
    //console.log(client)
}
const handleTable = (e) => {
    const {value} = e.target
    setTable(value)
}


return (
    <div>
    <div id="order">
          <label>Cliente: </label> 
          <input type="text" placeholder="Nombre" name="name" value={client.value} onChange={handleName}
           />
          <label>Mesa: </label>           
          <input id="input-table" type="text" placeholder="0" name="table" value={table.value} onChange={handleTable}></input>
          
        </div>
    <section className="op-container-bf">
        {breakfast.map(product => {
        return (
            <button className= "add-bf" key={product.id} value={product.name} onClick={()=>{setOrder([...order, {name:product.name, price:product.price}]);
            console.log(order)}}> 
                {product.name} <br/> ${product.price}
            </button>
        )})}                   
    <Comanda order={order} client={client} table={table} category={category}/>
    </section>
    </div>
      
)
}

export default MenuBf


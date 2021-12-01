import React, {useState, useEffect} from 'react';
import Header from './Header';
import Nav from './Nav';
import './Styles/Reception.css'
import {collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../firebase'

function Cooking(){
  
    const [comanda, setComanda] = useState([])
    const getOrders = query(collection(db, "order"), orderBy("createdTime", "asc") );

   
    useEffect(() => {
        const allOrders = async () => {onSnapshot(getOrders, (querySnapshot) => {
            const orders =[];
            querySnapshot.forEach((doc) => {          
                 orders.push({...doc.data(), id:doc.id});
            });
            setComanda(orders);
        })}
       allOrders();
    }, [getOrders]);
    

    return (
        <section>
            <Header />
            <Nav />
            <div id="comanda-container">
                {comanda.map((item, i) => {
                    return (
                    <section id="postit">
                        <div className="card-comanda" key={i}>
                         
                        <h2>Cliente: {item.client}</h2>
                        <h1>Mesa: {item.table}</h1>
                        {/* <h1>Categoría: {item.category}</h1> */}
                        {item.order.map((elem, i, j) => {
                            return (
                                // <table key={i}>
                                //     <tbody>
                                         <div>
                                            <p key={i}>{elem.qty} {elem.name}</p>  
                                            <p key={j}>{elem.createdTime}</p> 
                                        </div>
                                    /*</tbody>
                                </table> */
                                )
                        })}
                        </div>
                    </section>
                    )
                })}
            </div>            
            
        </section>
    )
}

export default Cooking
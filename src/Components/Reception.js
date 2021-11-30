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
                    <section className="card-comanda" key={i}>
                         
                        <h1>{item.client}</h1>
                        {item.order.map((elem, i) => {
                            return (
                                <table key={i}>
                                    <tbody>
                                        <tr>
                                            <td>{elem.qty}</td>   
                                            <td>{elem.name}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                )
                        })}
                       
                    </section>
                    )
                })}
            </div>            
            
        </section>
    )
}

export default Cooking
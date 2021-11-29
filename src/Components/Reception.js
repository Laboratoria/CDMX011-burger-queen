import React, {useState, useEffect} from 'react';
import Header from './Header';
import Nav from './Nav';
import './Styles/Reception.css'
import {collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../firebase'

function Cooking(){
    // const obtenerDatos = async() => {
    //     const orders = await getDocs(collection(db, 'order'))
    //     //console.log(orders.docs.data())
    //     orders.forEach((documento)=> {
    //         console.log(documento.data())
    //         //return documento.data()
    //     })
    // }
    const [comanda, setComanda] = useState([])
    const getOrders = query(collection(db, "order"), orderBy("createdTime", "asc") );

   
    useEffect(() => {
        const allOrders = async () => {onSnapshot(getOrders, (querySnapshot) => {
            const orders =[];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                // console.log(doc.id)            
                 orders.push({...doc.data(), id:doc.id});
            });
            //console.log()
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
                                <ul>
                                <li key={i}>{elem.qty}</li>   
                                <li>{elem.name}</li>
                                </ul>
                                )
                        })}
                       
                        {/* <p>{item.Timestamp(new Date())}</p> */}
                    </section>
                    )
                })}
            </div>            
            
        </section>
    )
}

export default Cooking
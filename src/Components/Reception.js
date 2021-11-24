import React, {useState, useEffect} from 'react';
import Header from './Header';
import Nav from './Nav';
//import {collection , getDocs} from 'firebase/firestore'
import {collection, query, onSnapshot} from 'firebase/firestore'
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
    const getOrders = query(collection(db, "order"));

    useEffect(() => {
        const allOrders = async () => {onSnapshot(getOrders, (querySnapshot) => {
            const orders =[];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                // console.log(doc.id)            
                 orders.push({...doc.data(), id:doc.id});
            });
            //console.log(orders)
            setComanda(orders);
        })}
       allOrders();
    }, [getOrders]);
    

    return (
        <section>
            {/* <Header />
            <Nav /> */}
            <div>
                {comanda.map((item, i) => {
                    return (
                    <section key={i}>
                        <p>{item.client}</p>
                        {item.order.map((elem, i) => {
                            return (<p key={i}>{elem.name}</p>)
                        })}
                    </section>
                    )
                })}
            </div>            
            
        </section>
    )
}

export default Cooking
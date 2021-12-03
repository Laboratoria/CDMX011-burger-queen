import React, {useState, useEffect} from 'react';
import Header from './Header';
import Nav from './Nav';
import './Styles/Reception.css'
import {collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../firebase'

function Cooking(){
  
    const [comanda, setComanda] = useState([])
    const getOrders = query(collection(db, "order"), orderBy("createdTime", "asc") );

    let [setStatus] = useState('En proceso')
    
    // const handleStatus = (e) => {

    //     setStatus('Listo para entregar')
    // }

   
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
                    //console.log(item)
                    return (
                    <section id="postit">
                        <table className="card-comanda" key={i}>
                         <tbody>
                             <tr>
                                <th>Cliente:</th>
                                <td>{item.client}</td>
                                <th>Mesa:</th>
                                <td>{item.table}</td>
                                <td>{item.id}</td>
                                
                                {item.order.map((elem, i, j) => {
                                    return (
                                        // <table >
                                        //     <tbody>
                                                <tr key={i}>                                             
                                                    <td>{elem.createdTime}</td>
                                                    <td>{elem.qty}</td>
                                                    <td>{elem.name}</td>   
                                                
                                                </tr>
                                        //     </tbody>
                                        // </table>
                                        )
                                })}
                                <td>{item.status}</td>
                            </tr>
                         </tbody>
                        </table>
                        {/* <button onClick={handleStatus}>Lista</button> */}
                    </section>
                    )
                })}
            </div>            
            
        </section>
    )
}

export default Cooking
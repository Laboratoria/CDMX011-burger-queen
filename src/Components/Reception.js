import React, {useEffect} from 'react';
import Header from './Header';
import Nav from './Nav';
import {collection , getDocs} from 'firebase/firestore'
import db from '../firebase'

function Cooking(){
    useEffect(() => {
        const obtenerDatos = async() => {
            
            const orders = await getDocs(collection(db, 'ordenes'))
            //console.log(orders.docs.data())
            orders.forEach((documento)=> {
                console.log(documento.data())
            })
        }
        obtenerDatos()
    }, []);
    return (
        <section>
            <Header />
            <Nav />
            {/* <p>{orders}</p> */}
        </section>
    )
}

export default Cooking
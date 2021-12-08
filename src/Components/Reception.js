import {
  collection,
  doc,
  query,
  onSnapshot,
  orderBy,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "./Styles/Reception.css";
import db from "../firebase";
import check from "../assets/check.png";
import delivery from "../assets/delivery.png"

function Cooking() {
  const [comanda, setComanda] = useState([]);
  const getOrders = query(
    collection(db, "order"),
    orderBy("createdTime", "asc")
  );

  /*const timer = (id)=> {
    
    const eachOrder = comanda.map((item, i) => {return (console.log(item.createdTime, item.cooked))})
    //console.log(eachOrder)

    // const initialTime = eachOrder.map((elem, i) => new Date (elem.createdTime*1000).toString().slice(16,24))
    // const cookedTime = eachOrder.map((elem, i) => new Date(elem.cooked*1000).toString().slice(16,24))
    // const timer = parseInt(cookedTime-initialTime)
    // console.log(initialTime)
    // console.log(cookedTime)
    // alert(timer)
    // return (timer)
  }*/
    
    

  const handleStatus = (status, id, createdTime, cooked) => {
    //console.log(status)
    //console.log(createdTime)
    if (status === "En proceso") {
      const orderRef = doc(db, "order", id);
      
      updateDoc(orderRef, {
        status: "Preparado", cooked: serverTimestamp()
      });
      console.log("Status actualizado");
      
    } if ( status === "Preparado"){
//       //b
//       const fecha = new Date(cooked*1000)
//       console.log(cooked)
//       //a
//       const fecha2 = new Date(createdTime*1000)
//       console.log(createdTime)
// const minFecha = (fecha.getHours()*60)+fecha.getMinutes()
// const minFecha2 = (fecha2.getHours()*60)+fecha2.getMinutes()
// console.log(minFecha-minFecha2)

      
    
      const firstTime = new Date(createdTime*1000)
      const totalMinutesFirst = (firstTime.getHours() * 60) + (firstTime.getMinutes());
      

    
      const secondTime = new Date(cooked*1000)
      const totalMinutesSecond = (secondTime.getHours() * 60) + (secondTime.getMinutes());
      

     
      const finalTime = `Tu orden tardó ${totalMinutesSecond - totalMinutesFirst} minutos en hacerse`;
      
      // console.log(minutesFirst)
      // console.log(typeof minutesSecond)
      
      console.log(finalTime)

      const orderRef = doc(db, "order", id);
      
      updateDoc(orderRef, {
        Timer: finalTime, 
      });
      console.log("Timer");
    }
    //timer(id)
    // if (status === "Preparado"){
    //   const orderRef = doc(db, "order", id);
    //   updateDoc(orderRef, {
    //     cookedTime: timer()
    //   })
    // }
    
  };

  const handleDelivery = (status, id) => {
    if (status === "Preparado") {
      const orderRef = doc(db, "order", id);
      
      updateDoc(orderRef, {
        status: "Entregada",
      });
      console.log("Orden entregada");
      
    }
  }

  useEffect(() => {
    const allOrders = async () => {
      onSnapshot(getOrders, (querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ ...doc.data(), id: doc.id });
        });
        setComanda(orders);
      });
    };
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
              <div id="order-header">
                <h1>Cliente: {item.client}</h1>
                <h1>Mesa: {item.table}</h1>
              </div>

              <div id="order-content">
                <hr />
                {item.order.map((elem, i, j) => {
                  return (
                    <table>
                      <tbody>
                        <tr key={i}>
                          <td>{elem.qty}</td>
                          <td>{elem.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
                <hr />
                <p>Creada: {item.id.slice(4, 25)}</p>
                <p>Finalizada: {item.Timer}</p>
              </div>

              <div id="order-info">
                <h1 id="status">{item.status}</h1>
                <img
                  id="check"
                  src={check}
                  alt="OK"
                  key={item.id}
                  onClick={() => handleStatus(item.status, item.id, item.createdTime, item.cooked)}
                ></img>
                <img
                id="delivery"
                src={delivery}
                alt="delivery"
                onClick={() => handleDelivery(item.status, item.id)}
                ></img>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Cooking;

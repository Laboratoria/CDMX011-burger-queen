import React from 'react'
import './Styles/ShowMenu.css';

const Comanda = ({order,client}) => {
  console.log(client)
    return (
        <section id="resumen">
          <div id="resumen-header">
            <label className="resume-values">Cliente: {" "} </label>
            <label className="resume-values">Mesa:  </label>
            <label className="resume-values"></label>
          </div>
          <hr/>
          {order.map((item, i) => (
          <div id="items" key={i}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          ))}
        </section>
    )
}

export default Comanda


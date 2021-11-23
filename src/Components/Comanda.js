import React from 'react'
import './Styles/ShowMenu.css';
import TotalItems from './TotalItems';
import Submit from './Submit';
//import DeleteItem from './DeleteItem';

const Comanda = ({order,client, table, category, addOrder}) => {
 // console.log(client)
 //condicionar para que aparezca el 0 si aún no se han escogido elementos
    const totalOrder = order.length !== 0 ? order.map(product => {return product.price}):[]
    
    return (
        <section>
          <div id="resumen">
            <div id="resumen-header">
              <label className="resume-values">Cliente: {client} </label>
              <label className="resume-values">Mesa: {table} </label>
              <label className="resume-values">{category}</label>
            </div>
            <hr/>
            {order.map((item, i) => (
            <table id="items" key={i}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td><i className="fas fa-trash-alt"></i></td>
            </table>
            ))
          }
            <p><TotalItems price={totalOrder}/></p>
            {/* {console.log(TotalItems)} */}
          </div>
          <Submit addOrder={addOrder} order={order} client={client} table={table} category={category} price={totalOrder} />
        </section>
    )
}

export default Comanda


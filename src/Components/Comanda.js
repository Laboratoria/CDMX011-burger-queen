import React from 'react'
import './Styles/ShowMenu.css';
import TotalItems from './TotalItems';
import DeleteItem from './DeleteItem';

const Comanda = ({order,client, table, category}) => {
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
              <td><DeleteItem /></td>
            </table>
            ))}
            <p><TotalItems price={totalOrder}/></p>
          </div>
          <div id="btn-send">
            <button className="btn-op cancel" >Cancelar</button>
            <button className="btn-op confirm" type="submit"  >Confirmar</button>
          </div>
        </section>
    )
}

export default Comanda


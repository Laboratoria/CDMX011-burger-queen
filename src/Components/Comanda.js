import React, {useState} from 'react'
import './Styles/ShowMenu.css';
import TotalItems from './TotalItems';
//import Submit from './Submit';
//import DeleteItem from './DeleteItem';

const Comanda = ({order,client, table, category, addOrder}) => {
 // console.log(client)
 //condicionar para que aparezca el 0 si aún no se han escogido elementos
    const totalOrder = order.length !== 0 ? order.map(product => {return product.price}):[]

  const initialValues = {
      client:'',
      table: '',
      category: '',
      order: []
  }
  let [values, setValues] = useState(initialValues)

  values = {
      client: client,
      table: table,
      category: category,
      order: order
  }
  //console.log(values)

  // const resetComanda = (e) => {
  //     console.log(e)
  //     handleSubmit(e)
  //     setValues({...initialValues})
  // }

  const handleSubmit = (e) => {
      //console.log(e)
      e.preventDefault()
      //console.log('holi', e)
      addOrder(values);
      setValues({...initialValues});
  }
    
    return (
        <form onSubmit={handleSubmit}>
          <div id="resumen" >
            <div id="resumen-header">
              <label className="resume-values">Cliente: {client} </label>
              <label className="resume-values">Mesa: {table} </label>
              <label className="resume-values">{category}</label>
            </div>
            <hr/>
            {order.map((item, i) => (
            <table id="items" key={i}>
              <td id="dish">{item.name}</td>
              <td className='priceTrash'>${item.price}</td>
              <td className='priceTrash'><i className="fas fa-trash-alt"></i></td>
            </table>
            ))
          }
            <div id="total_price"><TotalItems price={totalOrder}/></div>
            {/* {console.log(TotalItems)} */}
          </div>
          <div id="btn-send">
            <button className="btn-op cancel" >Cancelar</button>
            <button className="btn-op confirm" type="submit">Confirmar</button>
        </div>
          {/* <Submit addOrder={addOrder} order={order} client={client} table={table} category={category} price={totalOrder} /> */}
        </form>
    )
}

export default Comanda


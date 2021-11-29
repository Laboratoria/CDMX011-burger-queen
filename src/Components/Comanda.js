import React from 'react'
import './Styles/ShowMenu.css';
import TotalItems from './TotalItems';
import Submit from './Submit';
//import DeleteItem from './DeleteItem';

const Comanda = ({order,client, table, category, addOrder, onRemove, onAdd, reset}) => {
 
 //condicionar para que aparezca el 0 si aún no se han escogido elementos
    const totalOrder = order.length !== 0 ? order.map(product => { return product.price} ):[]
  
  //date: firebase.firestore.Timestamp.fromDate(new Date())

  // const initialValues = {
  //     client:'',
  //     table: '',
  //     category: '',
  //     order: [],
      
  // }
  // let [values, setValues] = useState(initialValues)

  // values = {
  //     client: client,
  //     table: table,
  //     category: category,
  //     order: order
  // }
  //console.log(values)

  // const resetComanda = (e) => {
  //     console.log(e)
  //     handleSubmit(e)
  //     setValues({...initialValues})
  // }

  //Enviar los datos de la orden a Firebase
  // const handleSubmit = (e) => {
  //     //console.log(e)
  //     e.preventDefault()
  //     //console.log('holi', e)
  //     addOrder(values);
  //     //setValues({...initialValues});
  // }
    
    return (
        <div>
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
              <td className='priceTrash'>{item.qty} x ${item.price}</td>            
              <td><button onClick={()=>{onAdd(item)}}>+</button></td>
              <td><button onClick={()=>{onRemove(item)}}>-</button></td>
              <td className='priceTrash'><i className="fas fa-trash-alt"></i></td> 
            </table>
            ))
          }
            <div id="total_price">
              <TotalItems order={order} price={totalOrder}/>
            </div>
          </div>
          {/* <div id="btn-send">
            <button className="btn-op cancel" >Cancelar</button>
            <button className="btn-op confirm" type="submit" onClick= {handleSubmit} >Confirmar</button>
        </div> */}
          <Submit reset={reset} addOrder={addOrder} order={order} client={client} table={table} category={category} price={totalOrder} />
        </div>
    )
}

export default Comanda


import React, {useState, useEffect} from 'react'
//import TotalItems from './TotalItems'

const Submit = ({order, client,  table, category, addOrder}) => {

    const initialValues = {
        client:'',
        table: '',
        category: '',
        order: []
    }
    let [values, setValues] = useState(initialValues);
    values = {
        client: client,
        table: table,
        category: category,
        order: order
    }
    console.log(values)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('holi', e)
        addOrder(values)
        setValues({...initialValues})
    }

    //console.log(order, client,  table, category, price)
    return (
        <div id="btn-send">
            <button className="btn-op cancel" >Cancelar</button>
            <button className="btn-op confirm" type="submit" onClick={handleSubmit}>Confirmar</button>
        </div>
    )
}

export default Submit


import React, { useState } from 'react'
import { serverTimestamp } from 'firebase/firestore'

const Submit = ({order, client,  table, category, addOrder, reset}) => {

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
        order: order,
        createdTime: serverTimestamp()
    }
      

    // useEffect(()=> {
    //     const handleSubmit = (e) => {
    //         console.log(e)
    //         // e.preventDefault()
    //         console.log('holi', e)
    //         addOrder(values)
    //         setValues({
    //             client:'',
    //             table: '',
    //             category: '',
    //             order: []
    //         })
    //     }
    //     handleSubmit();
    //     return ({
    //         client:'',
    //         table: '',
    //         category: '',
    //         order: []
    //     })

    // },[order, client,  table, category, addOrder, values]
    // )

    const resetPage = (e) => {
        alert("¿Estás seguro?")
        reset(e)
    }

    const resetComanda = (e) => {
        //console.log(e)
        handleSubmit(e)
        // setValues({...initialValues})
        reset(e)
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('holi', e)
        addOrder(values)
    }

    return (
        <div id="btn-send">
            <button className="btn-op cancel" type="submit" onClick={resetPage}>Cancelar</button>
            <button className="btn-op confirm" type="submit" onClick={resetComanda} >Confirmar</button>
        </div>
    )
}

export default Submit


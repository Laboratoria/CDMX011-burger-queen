import React, {useState, useEffect} from 'react';
import './Styles/ShowMenu.css';

function TotalItems({price, order}){
    console.log(order)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        //console.log(price)
        const suma = price.length !== 0?price.reduce((a,b) => {return a+b}):0
        // console.log(suma)
        setTotal(suma)
    },[total, price]); //el estado y price pasan como segundo argumento

        return (
            <div id="total-price">Total: ${total}</div>
        )

}

export default TotalItems
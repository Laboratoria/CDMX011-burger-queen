import React, {useState, useEffect} from 'react';
import './Styles/ShowMenu.css';

function TotalItems({price}){
    //console.log(price)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(price)
        const suma = price.length !== 0?price.reduce((a,b) => {return a+b}):0
        // console.log(suma)
        setTotal(suma)
    },[total, price]); //price pasa como segundo argumento

        return (
            <p id="total-price">Total: ${total}</p>
        )

}

export default TotalItems
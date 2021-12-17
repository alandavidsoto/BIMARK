import '../carrito/AcumuladorCarrito.scss'
import React from 'react'
import add from '../../images/add.svg'
import minus from '../../images/minus.svg'

export const AcumuladorProducto = ({handlerAcumulador,acumulador}) => {
    
    return (
        <div className="cantidad">
            <button onClick={()=>handlerAcumulador("minus")}><img src={minus} alt="minus"/></button>
                <span>{acumulador}</span>
            <button  onClick={()=>handlerAcumulador("add")}><img src={add} alt="add"/></button>
        </div>
    )
}

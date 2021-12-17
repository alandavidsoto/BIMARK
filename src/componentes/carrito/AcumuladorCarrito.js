import './AcumuladorCarrito.scss'
import React from 'react'
import add from '../../images/add.svg'
import minus from '../../images/minus.svg'
import { useDispatch } from 'react-redux'
import { decrement_product_action, increment_product_action } from '../../redux/actions/action'

export const AcumuladorCarrito = ({elemento}) => {
    const dispatch = useDispatch()
    return (
        <div className="cantidad">
            <button onClick={()=>dispatch(decrement_product_action(elemento.id))}><img src={minus} alt="minus"/></button>
                <span>{elemento.cantidad}</span>
            <button  onClick={()=>dispatch(increment_product_action(elemento.id))}><img src={add} alt="add"/></button>
        </div>
    )
}

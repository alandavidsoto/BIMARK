import React from 'react'
import cross from '../../images/cross.svg'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove_product_action } from '../../redux/actions/action';
import { AcumuladorCarrito } from './AcumuladorCarrito';

export const ItemCarrito = ({elemento}) => {
    const dispatch = useDispatch()
    const precioTotal = elemento.precioFinal * elemento.cantidad;
    return (
        <article className="item-carrito">
            <div className="producto-img">
                <img src={elemento.imagen} alt={elemento.nombre}/>
            </div>
            <div className="producto-descripcion">
                <span className='nombre-producto'>
                    <Link to={`productos/${elemento.id}`} style={{color: "333 !important"}}>
                        {elemento.nombre}
                    </Link>&nbsp;&nbsp;
                </span>
                {(elemento.descuento)&& <span className='cartel-descuento'>Descuento del {elemento.descuento} %</span>}
                
                <AcumuladorCarrito elemento={elemento} />
            </div>
            <div className="boton-eliminar">
                <img alt="eliminar" onClick={() => dispatch(remove_product_action(elemento.id))} src= {cross} style={{width: "18px"}}/>
            </div>
            <div className="producto-precio">
                <span style={{background: "#eee",padding: "5px",borderRadius: "5px",color: "#444"}}>
                $ {precioTotal}
                </span> 
            </div>
        </article>
    )
}

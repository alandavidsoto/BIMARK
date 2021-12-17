import './Carrito.scss'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../../images/cart.png';

export const Carrito = () => {
    const productos = useSelector((state)=> state.reducer_product.product)

    return (
        <div className="content_carrito_user" >
            <Link to="/carrito" className="carrito" >
                <img src={cart} alt="Imagen de un icono de carrito de compras" />
                {(productos.length > 0) && <span className="indicador_carrito">{productos.length}</span>}
            </Link>
        </div>
    )
}

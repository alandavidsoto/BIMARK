import './Card.scss'
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { buy_product_action,increment_product_action } from "../../redux/actions/action"
import { SweetAlert } from "../../util/SetupAlert"
import { Link } from 'react-router-dom'
import { ButtonAgregar } from '../buttonAgregar/ButtonAgregar'

export const Card = ({element, skeleton}) => {
    const dispatch = useDispatch()
    const ids = useSelector((state)=> state.reducer_product.ids)
    const productos = useSelector((state) => state.reducer_product.product)
    if(element){
        var {id,nombre,imagen,precio,descuento,precioFinal} = element
    }  
    

    const prevDispatch = (element) => {
        if (ids.includes(id)){
            dispatch(increment_product_action(id))
        } else {
            dispatch(buy_product_action(element))
            SweetAlert("success",`Se agregó 1 unidad de este Producto `)
        }
        
        productos.map(prod => {
            if(prod.id === id) {
                SweetAlert("success",`Se agregó ${prod.cantidad} unidades de este Producto `)
            }
        })
    }
    
    return (
        <article className="card">
            {(!element)? 
                skeleton
            :
                <>
                    {(descuento) && 
                        <span className="descuento">
                        {`Desc. del ${descuento}%`}
                        </span>
                    }
                    <div className="contenedor-imagen" >
                        <img src={imagen} alt={nombre}/>
                    </div>
                    <span className="nombre_producto" >
                        {nombre}
                    </span>
                    <div className="precio_producto">
                        {(descuento)? 
                        <>
                            <del><span className="precio">$ {precio}<sup>00</sup></span></del>
                            <span className="precio_descuento">$ {precioFinal}<sup>00</sup></span>
                        </>
                        :
                        <span className="precio">$ {precio}<sup>00</sup></span>
                        }
                    </div>
                    <div className="contenedor-botones">
                        <ButtonAgregar className="agregar" onClick={()=> prevDispatch(element)} >Agregar</ButtonAgregar>
                        <button className="ver"><Link to={`/productos/${id}`}>Ver</Link></button>
                    </div>
                </>
            }
        </article>
    )
}
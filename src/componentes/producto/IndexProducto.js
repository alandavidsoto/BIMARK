import '../../App.scss'
import './IndexProducto.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import http from '../helper/http'
import { AcumuladorProducto } from './AcumuladorProducto'
import { useDispatch, useSelector } from 'react-redux'
import { buy_product_action,increment_product_action } from '../../redux/actions/action'
import { SweetAlert } from '../../util/SetupAlert'
import { CarouselOfertas } from '../home/CarouselOfertas'
import { Titulo } from '../titulo/Titulo'
import { ButtonAgregar } from '../buttonAgregar/ButtonAgregar'
import Skeleton from 'react-loading-skeleton'

const IndexProducto = () => {
    const [acumulador,setAcumulador] = useState(1)
    const [producto,setProducto] = useState(null)
    const param = useParams()
    const ids = useSelector(state => state.reducer_product.ids)
    const dispatch = useDispatch()

    const handlerAcumulador = (opcion) =>{
        switch(opcion){
            case "add":
                setAcumulador(acumulador+1)
                break;
            case "minus":
                (acumulador > 1) && setAcumulador(acumulador-1);
                break;
            default:
                break;
        }   
    }
    const agregar = () => {
        const cantidad = acumulador
        const product = producto
        if(ids.includes(product.id)){
            dispatch(increment_product_action(product.id,cantidad))
        } else {
            dispatch(buy_product_action(product,cantidad))
        }
        SweetAlert("success",`Se agrego ${cantidad} U. de este Producto`)
        setAcumulador(1)
    }

    useEffect(()=>{
        window.scrollBy({
            top: -(window.innerHeight),
            left: 0,
            behavior: "smooth"
        })
        http(`${process.env.REACT_APP_API_URL}/api/productos/${param.id}`).then(res=> setProducto(res[0]))
        
    },[param])
    
    return (
        <>
        {
            <>
            <section className="container-producto">
                <div className="container-imagen">
                    {(producto)?
                    <img src={producto.imagen} alt={producto.nombre}/>
                    :
                    <Skeleton width="100%" height="100%" ></Skeleton>
                    }    
                </div>
                <div className="container-descripcion">
                    
                    {(producto)?
                    <h2>{producto.nombre}</h2>
                     :
                     <Skeleton height="50px" width="80%" style={{marginBottom: "3%"}}></Skeleton>
                    }
                    {producto?
                    <div className="container-precio">
                        <span className="precio-final">$ {producto.precioFinal},00</span>
                        {
                            (producto.descuento) &&
                            <>
                                <span className="precio-anterior"><del>$ {producto.precio},00</del></span>
                                <span className="cartel-descuento">-{producto.descuento}%</span>
                            </>
                        }
                    
                     </div>
                    :
                    <Skeleton height="40px" width="70%" style={{marginBottom: "3%"}} ></Skeleton>
                    }
                    {producto?
                    <div style={{display: "flex",alignItems: "center"}}>
                        <span style={{fontSize: "1.2em"}}>Cantidad: &nbsp;</span>
                        <AcumuladorProducto elemento={producto} handlerAcumulador={handlerAcumulador} acumulador={acumulador}/>
                    </div>
                    :
                    <Skeleton height="40px" width="60%" style={{marginBottom: "3%"}}></Skeleton>
                    }
                    {producto? 
                    <ButtonAgregar className="agregar_carrito" onClick={()=> agregar()}>Agregar al carrito</ButtonAgregar>
                    :
                    <Skeleton height="40px" width="50%" style={{marginBottom: "3%"}}></Skeleton>
                    }
                    
                    
                </div>
            </section>
            <Titulo message="Productos relacionados" />
            {producto? 
            <CarouselOfertas category={producto.categoria} />
            :
            <Skeleton height="250px"></Skeleton>
            }
            </>
        }
        </>

    )
}

export default IndexProducto;
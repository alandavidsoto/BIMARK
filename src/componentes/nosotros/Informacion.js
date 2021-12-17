import React, { Fragment } from 'react'
import { Titulo } from '../titulo/Titulo'

export const Informacion = () => {
    return (
        <Fragment>
            <section style={{width: "100%",maxWidth:"1300px",margin: "0px auto",padding: "5px",textAlign: "center",height: "75vh"}}>
                <Titulo message="¿ Quienes somos ?" />
                <p>Somos una empresa dedicada a la venta de productos Perecederos y electrodomesticos, Nacida en 2021  por
                Alan david soto</p>
                <Titulo message="¿ Qué queremos ofrecerte ?" />
                <p>
                Nuestro principal objetivo sos vos. Nuestro cliente . las empresas no pueden sostenerse si no satisfacen las necesidades de sus consumidores.  Queremos Brindarte la mejor atencion y los mejores precios para que vuelvas a elegirnos una y otra vez, manteniendo una buena relacion entre vos y Bimark. 
                </p>
            </section>
            
        </Fragment>
    )
}

import './IndexProductos.scss'
import React, { Fragment,useState } from 'react'
import { Categorias } from './Categorias'
import { Destacados } from '../home/Destacados'
import { BanderaCategoria } from './BanderaCategoria'

const IndexProductos = () => {
    const [categoria,setCategoria] = useState("snacks")
    return (
        <Fragment>
            <section className="contenedor-productos">
                <Categorias setCategoria={setCategoria}/>
                <div>
                    <BanderaCategoria categoria={categoria} />
                    <Destacados category={categoria}/>
                </div>
            </section>

        </Fragment>
    )
}

export default IndexProductos;
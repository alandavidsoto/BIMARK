import '../home/Destacados.scss'
import React, { Fragment, useEffect, useState } from 'react'
import http from '../helper/http'
import { Card } from '../home/Card'
import { BanderaCategoria } from '../productos/BanderaCategoria'
import { SkeletonCard } from '../SkeletonCard'

const IndexOfertas = () => {
    const [resultado,setResultado] = useState(null)
    useEffect(()=>{
        http(`${process.env.REACT_APP_API_URL}/api/ofertas`,).then(res => setResultado(res))
    },[])
    const setSkeletons = (cantidad) => {
        let resultados = [];
        for (let i = 1; i <= cantidad; i++) {
            resultados.push(<Card  key={i} skeleton={<SkeletonCard />} />)
            
        }
        return resultados
    }
    return (
        <Fragment>
            <section>
                <div>
                    <BanderaCategoria categoria="OFERTAS" />
                    <div className="grid-destacados">
                    {(resultado)?
                        resultado.map(element => <Card key={element.id} element={element}/>)
                        :
                        setSkeletons(10)
                    }
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default IndexOfertas;
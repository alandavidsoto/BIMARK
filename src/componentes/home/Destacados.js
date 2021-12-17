import './Destacados.scss'
import React, { useEffect, useState } from 'react'
import {Card} from './Card'
import http from '../helper/http'
import { SkeletonCard } from '../SkeletonCard'
export const Destacados = ({category}) => {
    const [resultado,setResultado] = useState(null)

    useEffect(()=>{
        setResultado(null)
        http(`${process.env.REACT_APP_API_URL}/api/categoria/${category}`,).then(res => setResultado(res))
    },[category])

    const setSkeletons = (cantidad) => {
        let resultados = [];
        for (let i = 1; i <= cantidad; i++) {
            resultados.push(<Card  key={i} skeleton={
                <SkeletonCard />
            } />)
            
        }
        return resultados
    }

    return (
        <div className="grid-destacados">
            {(resultado)?
            resultado.map(element => <Card key={element.id} element={element}/>)
            :
            setSkeletons(10)
            }
        </div>
    )
}



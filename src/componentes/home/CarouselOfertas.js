import React, { Fragment, useEffect, useState } from 'react'
import Glide from '@glidejs/glide'
import {Controls} from '@glidejs/glide/dist/glide.modular.esm'
import http from '../helper/http'
import { Card } from './Card'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { SkeletonCard } from '../SkeletonCard'

export const CarouselOfertas = ({category}) => {
    const mobile = useMediaQuery(0,600)
    const tablet = useMediaQuery(600,950)
    const desktop = useMediaQuery(950,1500)
    const desktop_xl = useMediaQuery(1500,2000)
    const [ofertas,setOfertas] = useState(null)
    useEffect(()=>{
        let point = (category !== "ofertas")? `categoria/${category}` :  category; 
        http(`${process.env.REACT_APP_API_URL}/api/${point}`,).then(res => {
            setOfertas(res.map(elemento => <li key={elemento.id} className="glide__slide"><Card  key={elemento.id} element={elemento} /></li>))})
    },[])
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
        <Fragment>
            {(!ofertas)?
                <>
                    {mobile && 
                    <div style={{display: "grid",gridTemplateColumns: "repeat(2,1fr)"}}>
                        {setSkeletons(2)}
                    </div>}
                    {tablet && <div style={{display: "grid",gridTemplateColumns: "repeat(3,1fr)"}}>
                        {setSkeletons(3)}
                    </div>}
                    {desktop && <div style={{display: "grid",gridTemplateColumns: "repeat(4,1fr)"}}>
                        {setSkeletons(4)}
                    </div>}
                    {desktop_xl && <div style={{display: "grid",gridTemplateColumns: "repeat(5,1fr)"}}>
                        {setSkeletons(5)}
                    </div>}
                </>
                : 
                <Glides ofertas={ofertas} />
            }
            
        </Fragment>
    )
}



export const Glides = ({ofertas}) => {
    useEffect(()=>{
        new Glide('.glide',{
            type: 'carousel',
            autoplay: 2000,
            startAt: 1,
            dragThreshold: 50,
            breakpoints: {
                600: {
                    perView: 2
                },
                950: {
                    perView: 3
                },
                1500:  {
                    perView : 4
                },
                2000:  {
                    perView : 5
                }
            },
        }).mount({Controls})
    },[])
    
    return (
        <div className="glide" style={{position: "relative"}}>
            
            <div className="glide__track" data-glide-el="track" style={{overflow: "hidden"}}>
                <ul className="glide__slides" style={{display: "grid",gridTemplateColumns: `repeat(${ofertas.length + 13},1fr)`}}>
                    {ofertas}
                </ul>
            </div>
            <div data-glide-el="controls">
                <button data-glide-dir="<" style={{position: "absolute",bottom: "50%",left: "5px",background: "#F53E3E",borderRadius: "5px",padding: "5px"}}><i style={{color: "#fff",fontSize: "25px"}} className="fas fa-chevron-left"></i></button>
                <button data-glide-dir=">" style={{position: "absolute",bottom: "50%",right: "5px",background: "#F53E3E",borderRadius: "5px",padding: "5px"}}><i style={{color: "#fff",fontSize: "25px"}} className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}


import abstract from '../../images/abstract-blur-in-supermarket.jpg'
import personas from '../../images/personas.jpg'
import React from 'react'


export const Galeria = () => {
    return (
        <div className="grid_gallery">
            <div>
                <img src={abstract} alt="imagen con blur"/></div>
            <div>
                <img src={personas} alt="personas comprando"/></div>
        </div>
    )
}

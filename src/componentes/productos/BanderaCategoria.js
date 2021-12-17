import './BanderaCategoria.scss'
import React from 'react'

export const BanderaCategoria = ({categoria}) => {
    let textFormat;

    if(categoria.includes("_")) {
        const text = categoria.split("_")
        textFormat = text.join(" ")
    } else {
        textFormat = categoria
    }
    return (
        <div className="bandera-categoria">
            <span>Categoria {textFormat}</span>
        </div>
    )
}

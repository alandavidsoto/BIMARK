import './Loader.scss'
import React from 'react'

export const Loader = ({color= "#333"}) => {
    return (
        <div className="loader" style={{borderLeftColor: color,borderTopColor: color }}></div>
    )
}

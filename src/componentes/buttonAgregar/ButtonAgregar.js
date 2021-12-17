import './ButtonAgregar.scss'
import React from 'react'

export const ButtonAgregar = ({children,...rest}) => {
    return (
        <button
        id="buttonAgregar"
        {...rest}
        >
        {children}
        </button>
    )
}

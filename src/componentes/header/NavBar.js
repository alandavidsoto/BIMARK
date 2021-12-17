import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <div className="row-navbar">
            <nav className="navbar" >
                <h2 style={{color: "#fff"}}>Menú</h2>
                <div style={{width: "100%", height: "2px",background: "#ccc"}}></div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/ofertas">Ofertas</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                </ul>
            </nav>
        </div>
    )
}

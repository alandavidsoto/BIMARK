import React, { useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export const Categorias = ({setCategoria}) => {
    const mediaQuery_desktop = useMediaQuery(950,2000)
    const changeCategory = (categoria) => {
        setCategoria(categoria)
    }
    
    return (
        <div className="categorias" style={{position: "relative"}}>
            {(mediaQuery_desktop)? 
            <CategoriaDesktop changeCategory={changeCategory}/> 
            :
            <CategoriaMobile changeCategory={changeCategory}/>}
        </div>
    )
}

export const CategoriaMobile = ({changeCategory}) => {
    const [isSwipe,setIsSwipe] = useState(false)
    const swipe = () =>{ (!isSwipe)? setIsSwipe(true): setIsSwipe(false)
    }
    return (
        <>
        <button onClick={swipe} className="swipe">Categorias <i className="fas fa-sort-down"></i></button>
            {
                (isSwipe) && 
                <div style={{boxShadow: "0px 0px 2px #bbb",position: "absolute",left: "0",right: "0",backgroundColor : "#fff",padding: "5px"}}>
                     <span style={{cursor: "pointer"}} onClick={ ()=> {changeCategory("snacks"); setIsSwipe(false)} }>Snacks</span><br />
                     <span style={{cursor: "pointer"}} onClick={ ()=> {changeCategory("vinos_Alcohol"); setIsSwipe(false)} }>Vinos y Alcohol</span><br />
                     <span style={{cursor: "pointer"}} onClick={ ()=> {changeCategory("refrigerados_Congelados"); setIsSwipe(false)} }>Refrigerados y Congelados</span><br />
                     <span style={{cursor: "pointer"}} onClick={ ()=> {changeCategory("lacteos"); setIsSwipe(false)} }>Lacteos</span><br />
                </div>
            }
        </>
    )
}
export const CategoriaDesktop = ({changeCategory}) => {
    return (
        <>
            <h2>CATEGORIAS</h2>
            <hr />
            <div style={{padding: "5px",height: "40vh",display: "flex",flexDirection: "column",justifyContent: "space-evenly"}}>  
                <span style={{cursor: "pointer"}} onClick={ ()=> changeCategory("snacks") }>Snacks</span><br />
                <span style={{cursor: "pointer"}} onClick={ ()=> changeCategory("vinos_Alcohol") }>Vinos y Alcohol</span><br />
                <span style={{cursor: "pointer"}} onClick={ ()=> changeCategory("refrigerados_Congelados") }>Refrigerados y Congelados</span><br />
                <span style={{cursor: "pointer"}} onClick={ ()=> changeCategory("lacteos") }>Lacteos</span><br />
            </div>
        </>
    )
}



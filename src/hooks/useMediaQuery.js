import React, { useEffect, useState } from 'react'

export const useMediaQuery = (min,max) => {
    const [isTrue,setIsTrue] = useState(false)
    useEffect(()=>{
        // agregamos un evento para el header
        window.addEventListener("resize",()=> {
            (window.screen.availWidth >= min && window.screen.availWidth < max)? setIsTrue(true) : setIsTrue(false)
        })
        // por unica vez hacemos esto al recargar la pagina.
        if (window.screen.availWidth >= min && window.screen.availWidth < max){
            setIsTrue(true)
        }
        
    },[])
    return isTrue
}

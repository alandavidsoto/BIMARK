import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import loupe from '../../images/loupe.png'
import { Loader } from '../loader/Loader'
import http from '../helper/http'
export const Buscador = () => {
    const refs = useRef()
    const [resultado, setResultado] = useState([])
    const [loading,setLoading] = useState(false)
    
    const inputChange = (e)=>{
        e.preventDefault()
        const query = (e.target.value).toLowerCase()
        if(query.length >= 3){
            setLoading(true)
            http(`${process.env.REACT_APP_API_URL}/api/productos?search=${query}`).then(data => {
                setResultado(data)
            }).finally(() => setLoading(false))
        } else {
            setResultado([])
        }
    }
    return (
        <form className="formulario" style={{position: "relative"}}>
            
            <input ref={refs} type="text" placeholder="Busca Tu producto Aqui" onChange={inputChange} />
            
            <span className="button">
            {(loading)?
                <Loader color="#3584FB" />
                :
                <img src={loupe} alt="buscador" srcSet="" />
            }
            </span>
            
                {
                    resultado.length > 0 && (
                    <div style={{zIndex: "200",position: "absolute",top: "100%",width: "100%",background: "white",boxShadow: "1px 10px 12px #aaa",
                    padding: "5px"}}>
                        {
                            resultado.map(element => (
                                <div>
                                    <Link to={`/productos/${element.id}`} onClick={()=> {refs.current.value = ""; setResultado([])}} style={{fontSize: "0.7em",color: "#333"}}>
                                        {element.nombre}
                                    </Link>
                                </div>))
                        }
                    </div>)
                }
        </form>
    )
}

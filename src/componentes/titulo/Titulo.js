import './Titulo.scss'
export const Titulo = ({message}) => {
    return (
        <div style={{display: "flex",justifyContent: "center"}}>
            <span className="titulo" >{message.toUpperCase()}</span>
        </div>
    )
}

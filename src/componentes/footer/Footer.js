import './Footer.scss'
export const Footer = () => {
    return (
        <footer className="footer" style={{marginTop: "5%"}}>
            <div className="redes">
                <h2 style={{fontFamily: "tahoma"}}>REDES</h2>
                <span>
                    Facebook &nbsp; <i className="fab fa-facebook-square"></i>
                </span><br />
                <span>
                    Instagram &nbsp; <i class="fab fa-instagram-square"></i>
                </span><br />
                <span>
                    Linkedin &nbsp; <i class="fab fa-linkedin"></i>
                </span><br />
            </div>
            <div className="creditos" >
                <h2 style={{fontFamily: "tahoma"}}>AUTOR</h2>
                Sitio web creado por Alan David Soto.<br />
                Contacto &nbsp;<a href="mailto:alansoto2015@outlook.com" >alansoto2015@outlook.com</a>
            </div>        
        </footer>
    )
}

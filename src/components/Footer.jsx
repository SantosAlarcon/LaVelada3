import React from 'react'
import instagram from "/instagram.svg"
import twitter from "/twitter.svg"
import logoVelada3 from "/logo-footer.webp"
import patrocinadores from "/patrocinadores.webp"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <div id="redes-sociales">
                    <a href="https://instagram.com/infolavelada" target='_blank'><img src={instagram} /></a>
                    <a href="https://twitter.com/infoLaVelada" target='_blank'><img src={twitter} /></a>
                </div>
                <div id="logo-footer">
                    <img src={logoVelada3} alt="logo" />
                </div>
                <div id="patrocinadores">
                    <img src={patrocinadores} alt="patrocinadores" />
                </div>
            </div>
            <p id="copyright">
                @ 2023 La Velada del Año III | Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer

import React from 'react'
import logoVelada3 from "/logo-footer.webp"
import patrocinadores from "/patrocinadores2.webp"
import "../styles/Footer.css"
import LogoInstagram from "./IconoInstagram"
import LogoTwitter from "./IconoTwitter"

const Footer = () => {
    return (
        <footer>
            <div>
                <div id="redes-sociales">
                    <a href="https://instagram.com/infolavelada" target='_blank'><LogoInstagram /></a>
                    <a href="https://twitter.com/infoLaVelada" target='_blank'><LogoTwitter /></a>
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

import React from 'react'
import "../styles/Combate.css"
import vs from "/VS.webp"

const Combate = ({boxeador1, boxeador2}) => {
    return (
        <section id="info">
            <div id="combate">
                <div id="boxeador1">
                    <h2>{boxeador1}</h2>
                </div>
                <span>
                    <img src={vs} alt="vs" />
                </span>
                <div id="boxeador2">
                    <h2>{boxeador2}</h2>
                </div>
            </div>
        </section>
    )
}

export default Combate

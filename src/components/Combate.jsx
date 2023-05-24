import React from 'react'
import "../styles/Combate.css"
import vs from "/VS.webp"

const Combate = ({ boxeador1, boxeador2 }) => {
    return (
        <section id="combate">
            <div id="boxeador1">
                <h2>{boxeador1}</h2>
            </div>
            <img src={vs} alt="vs" />
            <div id="boxeador2">
                <h2>{boxeador2}</h2>
            </div>
        </section>
    )
}

export default Combate

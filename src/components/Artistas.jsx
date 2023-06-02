import React from 'react'
import artistas from "/Artistas.jpg"
import "../styles/Artistas.css"

const Artistas = () => {
    return (
        <section id="artistas">
            <h2>Artistas</h2>
            <img src={artistas} alt="artistas" />
        </section>
    )
}

export default Artistas

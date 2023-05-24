import React, { useRef, useEffect, useState } from 'react'
import "../styles/Contenido.css"
import Info from './Info'
import Combate from "./Combate"

const Contenido = () => {
    const [hovered, setHovered] = useState(false);
    const [boxeador1, setBoxeador1] = useState("");
    const [boxeador2, setBoxeador2] = useState("");
    const [boxIzq, setBoxIzq] = useState(null);
    const [boxDer, setBoxDer] = useState(null);
    const boxeadoresRef = useRef();

    useEffect(() => {
        setBoxIzq(boxeadoresRef.current.children[0].children);
        setBoxDer(boxeadoresRef.current.children[1].children);
    }, [])

    // Cuando se pone el puntero sobre la imágen, se añade el estilo.
    const handleHover = (id) => {
        setHovered(true);
        const box1 = boxIzq[id].getAttribute("alt");
        const box2 = boxDer[id].getAttribute("alt");

        setBoxeador1(box1);
        setBoxeador2(box2);

        boxIzq[id].setAttribute("style", "scale: 1.1; contrast: 1.1; transition: all .3s ease-in-out");
        boxDer[id].setAttribute("style", "scale: 1.1; contrast: 1.1; transition: all .3s ease-in-out");

        Object.keys(boxIzq).forEach((box, index) => {
            if (index !== id) {
                boxIzq[index].setAttribute("style", "filter: blur(2px) grayscale(0.8); transition: all .3s ease-in-out");
            }
        })

        Object.keys(boxDer).forEach((box, index) => {
            if (index !== id) {
                boxDer[index].setAttribute("style", "filter: blur(2px) grayscale(0.8); transition: all .3s ease-in-out");
            }
        })
    }

    // Cuando se va el ratón de la imágen, se eliminan los filtros de todos los
    // boxeadores.
    const handleMouseleave = () => {
        Object.keys(boxIzq).forEach((box, index) => boxIzq[index].setAttribute("style", "transition: all .3s ease-in-out; filter: blur(0) grayscale(0)"));
        Object.keys(boxDer).forEach((box, index) => boxDer[index].setAttribute("style", "transition: all .3s ease-in-out; filter: blur(0) grayscale(0)"));
        setHovered(false);
        setBoxeador1("");
        setBoxeador2("");
    }

    return (
        <section id="contenido">
            <div ref={boxeadoresRef} id="boxeadores">
                <div id="boxers-izquierda">
                    <img fetchpriority="true" onMouseLeave={() => handleMouseleave(0)} onMouseEnter={() => handleHover(0)} src="/coscu.webp" alt="coscu" />
                    <img onMouseLeave={() => handleMouseleave(1)} onMouseEnter={() => handleHover(1)} src="/mayichi.webp" alt="mayichi" />
                    <img onMouseLeave={() => handleMouseleave(2)} onMouseEnter={() => handleHover(2)} src="/viruzz.webp" alt="viruzz" />
                    <img onMouseLeave={() => handleMouseleave(3)} onMouseEnter={() => handleHover(3)} src="/fernanfloo.webp" alt="fernanfloo" />
                    <img onMouseLeave={() => handleMouseleave(4)} onMouseEnter={() => handleHover(4)} src="/larivers.webp" alt="larivers" />
                    <img onMouseLeave={() => handleMouseleave(5)} onMouseEnter={() => handleHover(5)} src="/papigavi.webp" alt="papigavi" />
                </div>
                <div id="boxers-derecha">
                    <img fetchpriority="true" onMouseLeave={() => handleMouseleave(0)} onMouseEnter={() => handleHover(0)} src="/german.webp" alt="german" />
                    <img onMouseLeave={() => handleMouseleave(1)} onMouseEnter={() => handleHover(1)} src="/amouranth.webp" alt="amouranth" />
                    <img onMouseLeave={() => handleMouseleave(2)} onMouseEnter={() => handleHover(2)} src="/shelao.webp" alt="shelao" />
                    <img onMouseLeave={() => handleMouseleave(3)} onMouseEnter={() => handleHover(3)} src="/luzu.webp" alt="luzu" />
                    <img onMouseLeave={() => handleMouseleave(4)} onMouseEnter={() => handleHover(4)} src="/rivers.webp" alt="rivers" />
                    <img onMouseLeave={() => handleMouseleave(5)} onMouseEnter={() => handleHover(5)} src="/ampeter.webp" alt="ampeter" />
                </div>
            </div>
            {hovered ? <Combate boxeador1={boxeador1} boxeador2={boxeador2} /> : <Info />}
        </section>
    )
}

export default Contenido

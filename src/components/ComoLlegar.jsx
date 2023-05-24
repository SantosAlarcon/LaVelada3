import mapa from "/map.png"
import "../styles/ComoLlegar.css"

const ComoLlegar = () => {
    return (
        <section id="como-llegar">
            <h2>Cómo llegar al evento</h2>
            <a href="https://www.google.com/maps/place/Estadio+C%C3%ADvitas+Metropolitano/@40.4351624,-3.604488,16.61z/data=!4m6!3m5!1s0xd422fea8401b789:0x245d0d64dad50ec4!8m2!3d40.4361939!4d-3.5994674!16s%2Fm%2F05515km" target="_blank"><img src={mapa} /></a>
        </section>
    )
}

export default ComoLlegar

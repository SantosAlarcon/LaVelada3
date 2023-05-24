import revolut from "/revolut-velada.png";
import alsa from "/alsa.png";
import "../styles/Publi.css";

const Publi = () => {
	return (
		<section id="publicidad">
			<a href="https://www.revolut.com/es-ES/promo/velada-de-ibai/" target="_blank"><img src={revolut} /></a>
			<a href="https://cloud.e.alsa.com/veladaIII?utm_source=c%C3%B3mo_llegar&utm_medium=web&utm_campaign=2023_07_lavelada&utm_content=abr-jul" target="_blank"><img src={alsa} /></a>
		</section>
	);
};

export default Publi;

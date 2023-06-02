import "./App.css";
import Header from "./components/Header";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";
import ComoLlegar from "./components/ComoLlegar";
import Publi from "./components/Publi";
import Artistas from "./components/Artistas"

function App() {
	return (
		<>
            <Header />
            <Contenido />
            <Publi />
            <ComoLlegar />
            <Artistas />
			<Footer />
		</>
	);
}

export default App;

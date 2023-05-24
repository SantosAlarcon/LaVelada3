import logo from "/Logov3.webp";
import "../styles/Header.css";

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
                <h1 className="titulo">
                    <span>la velada del año </span>
                    <span>III</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;

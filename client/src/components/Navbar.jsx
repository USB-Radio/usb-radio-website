import { useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaBroadcastTower,
  FaBullhorn,
  FaDeezer,
  FaEnvelope,
  FaExclamation,
  FaHeadset,
  FaInstagram,
  FaMicrophone,
  FaSpotify,
  FaHome,
} from "react-icons/fa";
import "../styles/navbar.css";
import { Marquee } from "./Marquee";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("response_nav");
  };

  return (
    <header className="navbar">
      <div className="top-navbar">
        <div className="follow-box">
          <p className="bold">Siguenos en:</p>
          <div className="follow-icons">
            <i>{<FaInstagram />}</i>
            <i>{<FaSpotify />}</i>
            <i>{<FaDeezer />}</i>
            <i>{<FaMicrophone />}</i>
          </div>
        </div>
        <div className="info-box">
          <div className="info-box-section">
            <i>{<FaEnvelope />}</i>
            <div className="info-box-content">
              <p>Escribenos a:</p>
              <p className="bold">usbradio@usbbog.edu.co</p>
            </div>
          </div>
          <div className="info-box-section">
            <i>{<FaExclamation />}</i>
            <div className="info-box-content">
              <p>Ubicados en el primer piso:</p>
              <p className="bold">Edificio Guillermo de Ockham</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <img src="/images/Logo-radio.png" alt="Logo" />
        <nav ref={navRef}>
          <div>
            <i>{<FaHome />}</i>
            <a href="/#">Inicio</a>
          </div>
          <div>
            <i>{<FaBroadcastTower />}</i>
            <a href="/#">Nosotros</a>
          </div>
          <div>
            <i>{<FaBullhorn />}</i>
            <a href="/#">Noticias</a>
          </div>
          <div>
            <i>{<FaHeadset />}</i>
            <a href="/#">Programas</a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <div>
        <Marquee />
      </div>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
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
  FaMugHot,
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
            <a
              href="https://www.instagram.com/usb_radio?igsh=YW56ZGZzYTR6dG1k"
              target="_blank"
            >
              <i>{<FaInstagram />}</i>
            </a>
            <a
              href="https://open.spotify.com/show/6PXeoziWiDG7nDO9IqO4lg?si=d3812d8504474e6a"
              target="_blank"
            >
              {" "}
              <i>{<FaSpotify />}</i>
            </a>
            <a
              href="https://www.spreaker.com/user/usb-radio--8429931"
              target="_blank"
            >
              {" "}
              <i>{<FaMicrophone />}</i>
            </a>
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
          <Link to="/">
            {" "}
            <div className="navbar-divs">
              <i>{<FaHome />}</i>
              Inicio
            </div>
          </Link>
          <div className="navbar-divs">
            <i>{<FaBroadcastTower />}</i>
            <Link to="/nosotros">Nosotros</Link>
          </div>
          {/* <div className="navbar-divs">
            <i>{<FaBullhorn />}</i>
            <a href="/#">Noticias</a>
          </div> */}
          <div className="navbar-divs">
            <i>{<FaHeadset />}</i>
            <Link to="/programas">Programas</Link>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="nav-decor-message">
          <i>
            <FaMugHot />
          </i>
          <p> Ponle Play</p>
        </div>
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

import { FaComment, FaCopyright } from "react-icons/fa";
import { useData } from "../context/radioContext";
import { useState, useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
  const { radioData } = useData();

  // Estados para controlar dirección del scroll y si estamos en el final de la página
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const currentSongTitle =
    radioData?.currentPlaying?.song?.title || "No estamos al aire 😞";
  const nextSongText =
    radioData?.nextPlaying?.text || "No hay próxima canción disponible";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Comprobamos si el usuario ha llegado al final de la página
      if (windowHeight + currentScrollPos >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);

        // Detectar dirección de scroll
        if (currentScrollPos < lastScrollPos) {
          setIsScrollingUp(true); // Scroll hacia arriba
        } else {
          setIsScrollingUp(false); // Scroll hacia abajo
        }
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <div className={`footer ${isAtBottom ? "hidden-footer" : ""}`}>
      <div
        className={`footer-img ${isScrollingUp ? "visible-img" : "hidden-img"}`}
      >
        <img src={"/images/Footer-image.png"} alt="USB RADIO - sitio oficial" />
      </div>
      <div className="footer-data">
        <div className="container-footer">
          <div className="container-footer-specs">
            <i>
              <FaComment />
            </i>
            <p>
              En estos momentos estás escuchando:
              <span> {currentSongTitle}</span>
            </p>
            <p>
              A continuación...
              <span> {nextSongText}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>
          <FaCopyright />
        </span>
        <p>2024 USB Radio. Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Footer;

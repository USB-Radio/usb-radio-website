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
  const [nextSong, setNextSong] = useState("No hay próxima canción disponible");

  const currentSongTitle =
    radioData?.currentPlaying?.song?.title || "No estamos al aire 😞";

  useEffect(() => {
    const fetchNextSong = async () => {
      try {
        const response = await fetch("https://public.radio.co/stations/s1960444cd/track_next");
        const data = await response.json();
        setNextSong(data.title || "No hay próxima canción disponible");
      } catch (error) {
        console.error("Error obteniendo la siguiente canción:", error);
      }
    };
    
    fetchNextSong();
    const interval = setInterval(fetchNextSong, 10000); // Actualizar cada 10s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (windowHeight + currentScrollPos >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);

        if (currentScrollPos < lastScrollPos) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <div className={`footer ${isAtBottom ? "hidden-footer" : ""}`}>
      <div className={`footer-img ${isScrollingUp ? "visible-img" : "hidden-img"}`}>
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
              <span> {nextSong}</span>
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

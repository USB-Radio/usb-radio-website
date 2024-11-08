import { FaComment, FaCopyright } from "react-icons/fa";
import { useData } from "../context/radioContext";
import "../styles/Footer.css";

function Footer() {
  const { radioData } = useData();

  // Establecer valores por defecto en caso de que los datos sean null o undefined
  const currentSongTitle =
    radioData?.currentPlaying?.song?.title || "No estamos al aire 😞";
  const nextSongText =
    radioData?.nextPlaying?.text || "No hay próxima canción disponible";

  return (
    <div className="footer">
      <div className="footer-img">
        <img src={"/images/Footer-image.png"} alt="USB RADIO - sitio oficial" />
      </div>
      <div className="footer-data">
        <div className="container-footer">
          <div className="container-footer-specs">
            <i>
              <FaComment />
            </i>
            <p>
              En estos momentos estas escuchando:
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

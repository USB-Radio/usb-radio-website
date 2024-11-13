import { FaEarListen } from "react-icons/fa6";
import { useData } from "../context/radioContext";
import { useEffect, useState } from "react";
// import SongHistory from "./SongHistory";
import axios from "axios";
import "../styles/RadioPage.css";

function RadioPage() {
  const { monitorData } = useData();
  const [data, setData] = useState(monitorData || {});

  useEffect(() => {
    if (!monitorData) {
      axios
        .get("data/test.json")
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error al cargar test.json:", error));
    } else {
      setData(monitorData);
    }
  }, [monitorData]);

  const albumName = data?.album?.name || "Desconocido";
  const artistName = data?.artists?.[0]?.name || "Desconocido";
  const songTitle = data?.title || "Desconocido";
  const spotify = data?.external_metadata?.spotify || null;
  const genreName = data?.genres?.[0]?.name || "Desconocido";
  const releaseDate = data?.release_date || "Fecha desconocida";

  // Obtener los IDs de Spotify de manera segura
  const albumId = spotify?.album?.id || "ID no disponible";
  const artistId = spotify?.artists?.[0]?.id || "ID no disponible";
  const trackId = spotify?.track?.id || "ID no disponible";

  console.log("album spotify ->", albumId);
  console.log("artist spotify ->", artistId);
  console.log("track spotify ->", trackId);

  return (
    <div className="radio-page-background">
      <div className="radio-page-title">
        <p>Conoce un poco más sobre....</p>
        <i>
          <FaEarListen />
        </i>
      </div>
      <div className="radio-page-container">
        <div className="left-content">
          <h2 className="radio-page-artistDateTitle">Datos del Artista</h2>
          <div className="Song-boxInfo">
            <h3>{songTitle}</h3>
            <h4>{artistName}</h4>
            <div className="Song-boxInfo-album">
              <span>Álbum: </span>
              <p>{albumName}</p>
            </div>
            <div className="Song-boxInfo-genre">
              <span>Género: </span>
              <p>{genreName}</p>
            </div>
            <p>{releaseDate}</p>
          </div>
        </div>
        <div className="middle-content">MMMMMMMMMMM</div>
        <div className="right-content">
          <div className="SongHistory">{/* <SongHistory /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default RadioPage;

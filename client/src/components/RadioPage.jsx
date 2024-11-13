import { FaEarListen } from "react-icons/fa6";
import { useData } from "../context/radioContext";
import { useEffect, useState } from "react";
import SongHistory from "./SongHistory";
import axios from "axios";
import "../styles/RadioPage.css";

function RadioPage() {
  const { monitorData } = useData();
  const [data, setData] = useState(monitorData);

  useEffect(() => {
    // Sube el archivo JSON Default si radioMonitor no recibe información
    if (monitorData === null) {
      axios
        .get("data/test.json")
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error al cargar test.json:", error));
    } else {
      setData(monitorData);
    }
  }, [monitorData]);

  const {
    album: { name: albumName },
    artists: [{ name: artistName }],
    title: songTitle,
    external_metadata: { spotify },
    genres: [{ name: genreName }],
    release_date,
  } = data;
  // Enviar los datos de id a la API de spotify
  console.log("metadata de spotify ->", spotify);
  //   console.log("la data obtenida es => ", data);

  return (
    <div className="radio-page-background">
      <div className="radio-page-title">
        <p>Conoce un poco mas sobre....</p>
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
              <span>Album: </span>
              <p>{albumName}</p>
            </div>
            <div className="Song-boxInfo-genre">
              <span>Genero: </span>
              <p>{genreName}</p>
            </div>
            <p>{release_date}</p>
          </div>
        </div>
        <div className="middle-content">MMMMMMMMMMM</div>
        <div className="right-content">
          <div className="SongHistory">s{/* <SongHistory /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default RadioPage;

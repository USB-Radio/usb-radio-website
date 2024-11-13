import { FaEarListen } from "react-icons/fa6";
import { useData } from "../context/radioContext";
import { useEffect, useState } from "react";
import {
  spotifyAlbumMetadataRequest,
  spotifyTracksRequest,
  spotifyArtistOverviewRequest,
} from "../api/spotifyMetadata.js";
import AlbumMeta from "./AlbumMeta.jsx";
import SongInfo from "./SongInfo.jsx";
import SongHistory from "./SongHistory.jsx";
import ArtistBio from "./ArtistBio.jsx";
import AlbumsCard from "./TrackCard.jsx";
import axios from "axios";
import "../styles/RadioPage.css";

function RadioPage() {
  const { monitorData } = useData();
  const [data, setData] = useState(monitorData || {});
  const [albumMetadata, setAlbumMetadata] = useState(null);
  const [trackMetadata, setTrackMetadata] = useState(null);
  const [artistMetadata, setArtistMetadata] = useState(null);
  const [previousAlbumId, setPreviousAlbumId] = useState(null); // Guardamos el ID anterior del álbum
  const [previousTrackId, setPreviousTrackId] = useState(null); // Guardamos el ID anterior del track
  const [previousArtistId, setPreviousArtistId] = useState(null); // Guardamos el ID anterior del artista

  useEffect(() => {
    // Verifica si monitorData es null, por tanto carga el json default de pruebas
    if (!monitorData) {
      axios
        .get("data/test.json")
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error al cargar test.json:", error));
    } else {
      setData(monitorData);
    }
  }, [monitorData]);

  // Llamada a la API de Spotify para obtener metadatos del álbum cuando `albumId` cambie
  useEffect(() => {
    const albumId = data?.external_metadata?.spotify?.album?.id;

    if (albumId && albumId !== previousAlbumId) {
      console.log("Realizando llamado a la API para el álbum");
      // Solo hacer la solicitud si el albumId ha cambiado
      spotifyAlbumMetadataRequest(albumId)
        .then((response) => {
          setAlbumMetadata(response.data);
          setPreviousAlbumId(albumId); // Actualiza el previousAlbumId con el nuevo id
        })
        .catch((error) =>
          console.error("Error al obtener los metadatos del álbum:", error)
        );
    }
  }, [data, previousAlbumId]); // Este efecto se ejecutará cuando `data` o `previousAlbumId` cambien

  // Llamada a la API de Spotify para obtener metadatos del track cuando `trackId` cambie
  useEffect(() => {
    const trackId = data?.external_metadata?.spotify?.track?.id;

    if (trackId && trackId !== previousTrackId) {
      console.log("Realizando llamado a la API para el track");
      // Solo hacer la solicitud si el trackId ha cambiado
      spotifyTracksRequest(trackId)
        .then((response) => {
          setTrackMetadata(response.data);
          setPreviousTrackId(trackId); // Actualiza el previousTrackId con el nuevo id
        })
        .catch((error) =>
          console.error("Error al obtener los metadatos del track:", error)
        );
    }
  }, [data, previousTrackId]); // Este efecto se ejecutará cuando `data` o `previousTrackId` cambien

  // Llamada a la API de Spotify para obtener metadatos del artista cuando `artistId` cambie
  useEffect(() => {
    const artistId = data?.external_metadata?.spotify?.artists?.[0]?.id;

    if (artistId && artistId !== previousArtistId) {
      console.log("Realizando llamado a la API para el artista");
      // Solo hacer la solicitud si el artistId ha cambiado
      spotifyArtistOverviewRequest(artistId)
        .then((response) => {
          setArtistMetadata(response.data);
          setPreviousArtistId(artistId); // Actualiza el previousArtistId con el nuevo id
        })
        .catch((error) =>
          console.error("Error al obtener los metadatos del artista:", error)
        );
    }
  }, [data, previousArtistId]); // Este efecto se ejecutará cuando `data` o `previousArtistId` cambien

  const albumName = data?.album?.name || "Desconocido";
  const artistName = data?.artists?.[0]?.name || "Desconocido";
  const songTitle = data?.title || "Desconocido";
  const genreName = data?.genres?.[0]?.name || "Desconocido";
  const releaseDate = data?.release_date || "Fecha desconocida";

  //   console.log("Album Metadata: ", albumMetadata);
  //   console.log("Track Metadata: ", trackMetadata);
  //   console.log("Artist Metadata: ", artistMetadata);
  const artist = artistMetadata?.data?.artist;
  if (!artist) {
    return <p>No artist data available</p>;
  }
  const coverImg = artist.visuals.avatarImage.sources[0].url;
  console.log(coverImg);

  return (
    <div className="radio-page-background">
      <div className="radio-page-title">
        <p>Conoce un poco más sobre....</p>
        <i>
          <FaEarListen />
        </i>
      </div>
      {/* Contenido de la pagina  */}
      <div className="radio-page-container-1">
        <div className="container-main-img">
          <img className="main-img" src={coverImg} alt="" />
        </div>
        <div className="SongInfo-component">
          <SongInfo
            songTitle={songTitle}
            artistName={artistName}
            albumName={albumName}
            genreName={genreName}
            releaseDate={releaseDate}
            artistMetadata={artistMetadata}
          />
        </div>
        <div className="AlbumMeta-component">
          <AlbumMeta albumMetadata={albumMetadata} />
        </div>
        <div className="ArtistAlbums-component">
          <AlbumsCard albumMetadata={albumMetadata} />
        </div>
      </div>
      <div className="radio-page-container-2">
        <div className="ArtistBio">
          <ArtistBio artistMetadata={artistMetadata} />
        </div>
        <div className="SongHistory">
          <SongHistory />
        </div>
      </div>
    </div>
  );
}

export default RadioPage;

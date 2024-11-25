import axios from "axios";

// Configuración común de headers para todas las solicitudes
const spotifyApiHeaders = {
  "x-rapidapi-key": "85f5071b5emsh3f8bc1c14099433p16cf6djsn0cbcf0208cf2",
  "x-rapidapi-host": "spotify23.p.rapidapi.com",
};

// Función para realizar la solicitud de `album_metadata` a la API de Spotify
export const spotifyAlbumMetadataRequest = (albumId) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/album_metadata/",
    params: {
      id: albumId, // Pasar el parámetro `id` dinámicamente
    },
    headers: spotifyApiHeaders,
  };

  return axios.request(options);
};

// Función para realizar la solicitud de `tracks` a la API de Spotify
export const spotifyTracksRequest = (trackIds) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/tracks/",
    params: {
      ids: trackIds, // Pasar el parámetro `ids` dinámicamente
    },
    headers: spotifyApiHeaders,
  };

  return axios.request(options);
};

// Función para realizar la solicitud de `artist_overview` a la API de Spotify
export const spotifyArtistOverviewRequest = (artistId) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/artist_overview/",
    params: {
      id: artistId, // Pasar el parámetro `id` dinámicamente
    },
    headers: spotifyApiHeaders,
  };

  return axios.request(options);
};

import axios from "axios";

// Función para realizar la solicitud a la API de Spotify
export const spotifyAlbumMetadataRequest = (albumId) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/album_metadata/",
    params: {
      id: albumId,
    },
    headers: {
      "x-rapidapi-key": "f7c09b5a89msh3bc6a33b50a7721p1139d9jsn4519a1e0d1b6",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  return axios.request(options);
};

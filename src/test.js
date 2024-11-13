import axios from "axios";

const options = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/album_metadata/",
  params: {
    id: "4DGAlqnv1SMfPIrY6favuP",
  },
  headers: {
    "x-rapidapi-key": "f7c09b5a89msh3bc6a33b50a7721p1139d9jsn4519a1e0d1b6",
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

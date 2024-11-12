import { spreakerEpisodesRequest } from "../api/monitorMetadata";

export const radioEpisodes = async (show, episodes) => {
  // Formateo de shows con su id
  const formattedShows = show.map(({ show_id, title, image_original_url }) => ({
    show_id,
    title,
    image_original_url,
    episodes: [],
  }));
  // Carga de todos los episodios disponibles de la plataforma
  let allEpisodes = [...episodes.items];
  let nextUrl = episodes.next_url;
  while (nextUrl) {
    try {
      const response = await spreakerEpisodesRequest(nextUrl);
      const { items, next_url } = response.data.response;
      allEpisodes = [...allEpisodes, ...items];
      nextUrl = next_url;
    } catch (error) {
      console.log("error:", error);
    }
  }
  // Agrupar episodios en los shows correspondientes:
  allEpisodes.forEach((episode) => {
    const show = formattedShows.find((s) => s.show_id === episode.show_id);
    if (show) {
      show.episodes.push(episode);
    }
  });
  return formattedShows;
};

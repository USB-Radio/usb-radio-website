import { useState } from "react";
import PodcastPlayer from "./PodcastPlayer";
import "../styles/EpisodeList.css";

// eslint-disable-next-line react/prop-types
function EpisodeList({ episodes, selectedShowId }) {
  const [podcastTitle, setPodcastTitle] = useState("Usb Radio");
  const [endTime, setEndTime] = useState(100);
  const [listenUrl, setListenUrl] = useState(null);

  // eslint-disable-next-line react/prop-types
  const filteredEpisodes = episodes.filter(
    (ep) => ep.show_id === selectedShowId
  );

  if (filteredEpisodes.length === 0) {
    return <p>No hay episodios disponibles para este programa.</p>;
  }

  const episodeList = filteredEpisodes[0]?.episodes || [];
  const cover = filteredEpisodes[0]?.image_original_url || "";

  const onHandleClick = (title, duration, playback_url) => {
    setListenUrl(playback_url);
    setPodcastTitle(title);
    setEndTime(duration);
  };

  return (
    <div className="Episodes-container">
      <div className="episodes-playlist">
        <div className="episodes-playlist-container">
          {episodeList.map((episode, index) => {
            const { title, duration, playback_url, published_at } = episode;
            const date = new Date(published_at);
            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            const formattedDate = date.toLocaleDateString("es-ES", options);

            return (
              <div className="episode-card" key={index}>
                <div>
                  <p>{title}</p>
                  <span>{formattedDate}</span>
                </div>
                <button
                  onClick={() => onHandleClick(title, duration, playback_url)}
                  className="play-episode-button"
                >
                  Seleccionar
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <PodcastPlayer
        cover={cover}
        title={podcastTitle}
        duration={endTime}
        url={listenUrl}
      />
    </div>
  );
}
export default EpisodeList;

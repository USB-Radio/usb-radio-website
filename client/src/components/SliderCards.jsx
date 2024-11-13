import { useEffect, useState, useRef } from "react";
import {
  spreakerShowRequest,
  spreakerEpisodesRequest,
} from "../api/monitorMetadata";
import { radioEpisodes } from "../utils/show_episodes";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowPointer,
  FaCommentDots,
} from "react-icons/fa6";
import EpisodeList from "./EpisodeList";
import "../styles/SliderCards.css";

let episodeUrl = "https://api.spreaker.com/v2/users/8429931/episodes";
function SliderCards() {
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(null);
  const sliderCarousel = useRef(null);
  const handleRightClick = (e) => {
    e.preventDefault();
    sliderCarousel.current.scrollLeft += sliderCarousel.current.offsetWidth;
  };
  const handleLeftClick = (e) => {
    e.preventDefault();
    sliderCarousel.current.scrollLeft -= sliderCarousel.current.offsetWidth;
  };
  const onHandleClick = (show_id) => {
    setSelectedShowId(show_id);
  };
  useEffect(() => {
    const fetchData = async () => {
      const showData = (await spreakerShowRequest()).data.response.items;
      const episodesData = (await spreakerEpisodesRequest(episodeUrl)).data
        .response;
      const showEpisodes = await radioEpisodes(showData, episodesData);
      setShows(showData);
      setEpisodes(showEpisodes);
      if (showData.length > 0) {
        setSelectedShowId(showData[0].show_id);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="slider-cards-title">
        <p> Programas</p>
        <i>
          <FaCommentDots />
        </i>
      </div>
      <div className="slider-cards">
        <div>
          <button onClick={handleLeftClick} className="slider-prev-button">
            <FaAngleLeft />
          </button>
        </div>
        <div className="slider-carousel" ref={sliderCarousel}>
          {shows.map((show, index) => {
            const {
              show_id,
              title,
              image_original_url,
              site_url,
              last_episode_at,
              category: { name },
            } = show;
            // console.log(show_id);
            return (
              <div className="show-card" key={index}>
                <div className="card-image">
                  <img src={image_original_url} alt="show" />
                </div>
                <div className="card-content">
                  <p className="card-title">{title}</p>
                  <div className="card-episode-content">
                    <p>Ultimo episodio:</p>
                    <span>{last_episode_at}</span>
                  </div>
                  <div className="card-category-content">
                    <p>Categoria:</p>
                    <span>{name}</span>
                  </div>
                  <div className="slider-buttons">
                    <button
                      onClick={() => onHandleClick(show_id)}
                      className="slider-button-1"
                    >
                      ver episodios
                    </button>
                    <a href={site_url} target="_blank">
                      <button className="slider-button-2">
                        <i>
                          <FaArrowPointer />
                        </i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={handleRightClick} className="slider-next-button">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div>
        <EpisodeList episodes={episodes} selectedShowId={selectedShowId} />
      </div>
    </div>
  );
}
export default SliderCards;

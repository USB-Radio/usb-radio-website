import { useEffect, useState } from "react";
import { spreakerShowRequest } from "../api/monitorMetadata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SliderCards.css";

function SliderCards() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const outData = (await spreakerShowRequest()).data.response.items;
      setShows(outData);
    };
    fetchData();
  }, []);
  return (
    <div className="slider-cards">
      <div className="slider-container">
        {shows.map((show, index) => (
          <div key={index} className="card">
            <div className="card-img">
              <img src={show.image_original_url} alt={`show: ${index}`} />
            </div>
            <div className="card-content">
              <p className="card-title">{show.title}</p>
              <div className="card-episode-content">
                <p>Ultimo episodio:</p>
                <span>{show.last_episode_at}</span>
              </div>
              <div className="card-category-content">
                <p>Category:</p>
                <span>{show.category.name}</span>
              </div>
              <a href={show.site_url} target="_blank">
                {" "}
                <button> saber mas </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderCards;

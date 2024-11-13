import "../styles/Biography.css";
import { FaSpotify } from "react-icons/fa";

function ArtistBio({ artistMetadata }) {
  const artist = artistMetadata?.data?.artist;
  if (!artist) {
    return <p>No artist data available</p>;
  }
  const biography = artist.profile.biography;
  const coverImg = artist.visuals.avatarImage.sources[0].url;
  const listeners = artist.stats.monthlyListeners;
  const WorldRank = artist.stats.worldRank;
  const url = artist.uri;
  return (
    <div className="biography-container">
      <h2 className="radio-page-artistDateTitle">Acerca de:</h2>
      <div className="bio-card">
        <div className="bio-header">
          <img className="ArtistBio-Cover" src={coverImg} alt="Artist-cover" />
          <div className="Bio-info">
            <h1>{artist.profile.name}</h1>
            <p>{listeners} oyentes mensuales</p>
            <p> Ranking Mundial: {WorldRank}</p>
          </div>
          <a href={url} target="_blank">
            <button className="bio-spotify">
              <FaSpotify />
            </button>
          </a>
        </div>
        <div className="biography-text">
          <p className="bio-infoText">{biography.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistBio;

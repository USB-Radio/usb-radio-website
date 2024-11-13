import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/SongInfo.css";

function SongInfo({
  songTitle,
  artistName,
  albumName,
  genreName,
  releaseDate,
  artistMetadata,
}) {
  const artist = artistMetadata?.data?.artist;
  if (!artist) {
    return <p>No artist data available</p>;
  }

  const externalLinks = artist.profile.externalLinks;

  // Función para obtener el ícono y el color de fondo correspondiente
  const getIconAndColor = (name) => {
    switch (name) {
      case "FACEBOOK":
        return { icon: <FaFacebook />, backgroundColor: "#1877f2" };
      case "INSTAGRAM":
        return { icon: <FaInstagram />, backgroundColor: "#c32aa3" };
      case "TWITTER":
        return { icon: <FaTwitter />, backgroundColor: "#1da1f2" };
      default:
        return { icon: null, backgroundColor: "#000" };
    }
  };

  return (
    <div>
      <h2 className="radio-page-artistDateTitle">Datos del Artista</h2>
      <div className="Song-boxInfo">
        <h3>{songTitle}</h3>
        <h4>{artistName}</h4>
        <div className="Song-boxInfo-album">
          <span>Álbum: </span>
          <p>{albumName}</p>
        </div>
        <div className="Song-boxInfo-genre">
          <span>Género: </span>
          <p>{genreName}</p>
        </div>
        <p>{releaseDate}</p>
      </div>
      <div className="social-networks-buttons">
        {/* Filtramos solo las redes sociales que queremos */}
        {externalLinks?.items
          .filter((link) =>
            ["FACEBOOK", "INSTAGRAM", "TWITTER"].includes(link.name)
          )
          .map((link) => {
            const { icon, backgroundColor } = getIconAndColor(link.name);
            return (
              <button
                key={link.name}
                onClick={() => window.open(link.url, "_blank")}
                className="social-network-button"
                style={{ backgroundColor }}
              >
                {icon}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default SongInfo;

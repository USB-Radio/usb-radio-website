import { useData } from "../context/radioContext";
import { formatTime } from "../utils/formatTime";
import "../styles/SongHistory.css";

function SongHistory() {
  const { radioData } = useData();
  if (!radioData || !radioData.songHistory) {
    return <div>Loading...</div>;
  }
  // Convierte songHistory en una lista si es un objeto
  const songHistory = Array.isArray(radioData.songHistory)
    ? radioData.songHistory
    : Object.values(radioData.songHistory);
  // Duplicamos el contenido para el efecto de bucle

  return (
    <div className="song-container">
      <h3 className="song-history-title">Historial de Canciones</h3>
      <div className="carousel-song-list">
        {songHistory.map((song, index) => {
          const newTime = formatTime(song.duration);
          return (
            <div className="song-card" key={index}>
              <div className="song-artwork">
                <p className="song-artwork-index">{index + 1}</p>
                <img src={song.art} alt="portadas" />
                <div className="song-artistData">
                  <p className="song-card-title">{song.title}</p>
                  <p className="song-card-artist">{song.artist}</p>
                </div>
              </div>
              <p className="song-card-album">{song.album}</p>
              <div className="song-card-time">
                <span>{newTime}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SongHistory;

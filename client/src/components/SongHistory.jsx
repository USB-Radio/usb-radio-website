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
  const duplicatedSongHistory = [...songHistory, ...songHistory];

  return (
    <div className="song-container">
      <div className="carousel-song-list">
        {duplicatedSongHistory.map((song, index) => {
          const newTime = formatTime(song.duration);
          return (
            <div className="song-card" key={index}>
              <div className="song-artwork">
                <img src={song.art} alt="portadas" />
              </div>
              <div className="song-card-items">
                <p className="song-card-title">{song.title}</p>
                <div className="song-card-timestep">
                  <p>{song.artist}</p>
                  <span>{newTime}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SongHistory;

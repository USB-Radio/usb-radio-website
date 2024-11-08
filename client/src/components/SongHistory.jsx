import { FaMusic } from "react-icons/fa6";
// import { formatTime } from "../utils/formatTime";
// import "../styles/SongHistory.css";

function SongHistory() {
  return (
    <section className="history">
      <div className="history-container">
        <div className="history-title">
          <i>
            <FaMusic />
          </i>
          <p>Historial de Reproducción</p>
        </div>
        <div className="history-songs-info">
          {/* {songHistory.map((song, index) => (
            <div key={index} className="history-songs">
              <div className="history-song-data">
                <span>{index + 1}</span>
                <div
                  className="history-art"
                  style={{
                    backgroundImage: `url(${song.art})`,
                  }}
                ></div>
                <div className="history-artist-content">
                  <p className="history-titlesong">{song.title}</p>
                  <p className="history-artistsong">{song.artist}</p>
                </div>
              </div>
              <div className="history-album">
                <p>{song.album}</p>
              </div>
              <div className="history-time">
                <p>{formatTime(song.duration)}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default SongHistory;

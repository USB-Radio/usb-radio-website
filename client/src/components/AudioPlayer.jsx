import { FaHeadphones, FaVolumeUp } from "react-icons/fa";
import { useData } from "../context/radioContext";
import { useState, useRef } from "react";
import { formatTime } from "../utils/formatTime";
import "../styles/audioPlayer.css";

function AudioPlayer() {
  const [isPaused, setIsPaused] = useState(true);
  const { radioData } = useData();
  const audioRef = useRef(null);

  const {
    listenUrl = "https://a6.asurahosting.com:7340/radio.mp3",
    totalListeners = 0,
    currentPlaying: {
      duration = 0,
      elapsed = 0,
      song: {
        title = "No estamos al aire 😞",
        artist = "pronto volveremos.... ",
        album = "No hay información",
        art = "/images/favicon.png",
      } = {},
      playlist = "Servicio no disponible",
    } = {},
    // nextPlaying: {
    //   text: nextSongText = "No hay proxima canción",
    //   art: nextSongArt = "/images/favicon.png",
    // } = {},
  } = radioData || {};

  const endTime = formatTime(duration);
  const startTime = formatTime(elapsed);

  const handleButtonClick = () => {
    if (isPaused) {
      audioRef.current.src = listenUrl;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPaused(!isPaused);
  };

  return (
    <section className="muplayer">
      <audio ref={audioRef} src={listenUrl}></audio>
      <div className="muplayer-container">
        <div className="muplayer-title">
          <div className="muplayer-playlist">
            <p>Estas escuchando la franja:</p>
            <span className="muplayer-program">{playlist}</span>
          </div>
          <div className="muplayer-listeners">
            <i>
              <FaHeadphones />
            </i>
            <p>Numero de oyentes:</p>
            <span className="muplayer-listeners-number">{totalListeners}</span>
          </div>
        </div>
        {/* contenido perteneciente al cuerpo del reproductor mp3 */}
        <div className="muplayer-content">
          <div className="songcover-field">
            <div
              className={`songcover ${!isPaused ? "play" : ""}`}
              style={{ backgroundImage: `url(${art})` }}

              // onClick={handleButtonClick}
            ></div>
          </div>
          <div className="muplayer-items">
            <p className="song-title">{title}</p>
            <p className="song-artist">{artist}</p>
            <div className="muplayer-playitems">
              <p className="muplayer-genre">
                Album: <span className="muplayer-genretype">{album}</span>
              </p>
              <button
                className={`muplayer-play-btn ${!isPaused ? "pause" : ""}`}
                onClick={handleButtonClick}
              >
                <span></span>
                <span></span>
              </button>
              <div className="volume-slider">
                <div className="volume-icon">
                  <FaVolumeUp />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  className="seek-bar volume"
                />
              </div>
            </div>
            <div className="song-slider">
              <input
                type="range"
                min="0"
                max={duration}
                value={elapsed}
                className="seek-bar music"
                onChange={(e) =>
                  console.log("Cambio en el deslizador:", e.target.value)
                }
              />
              <div className="muplayer-timers">
                <span className="current-time">{startTime}</span>
                <span className="live-status">En vivo </span>
                <span className="song-duration">{endTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AudioPlayer;

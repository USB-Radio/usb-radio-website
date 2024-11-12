import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import "../styles/PodcastPlayer.css";

// eslint-disable-next-line react/prop-types
function PodcastPlayer({ cover, title, duration, url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime * 1000); // Convertimos a milisegundos
    };
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error al reproducir el audio:", error);
        }
      });
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSliderChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime / 1000; // Convertimos a segundos
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume; // Actualizamos el volumen del audio
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="podcast-player">
      <audio ref={audioRef} src={url} preload="metadata"></audio>

      <input
        className="podcast-slider"
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSliderChange}
      />

      <div className="podcast-playitems">
        <div className="podcast-cover-content">
          <div
            className="podcast-current-img"
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
          <p>{title}</p>
        </div>

        <div className="play-podcast-container">
          <button onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="podcast-timers">
          <div className="volume-slider-podcast">
            <i>
              <FaVolumeUp />
            </i>
            <div className="volume-podcast-slider-input">
              <input
                type="range"
                className="vol-pod"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
          <div className="podcast-timestep">
            <p>{formatTime(currentTime)}</p>/<span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastPlayer;

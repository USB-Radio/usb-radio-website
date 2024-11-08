import { useState, useEffect } from "react";
import { FaDeezer, FaInstagram, FaMicrophone, FaSpotify } from "react-icons/fa";
import "../styles/NetworksList.css";

export function NetworksList() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`socialnetwork-list ${isVisible ? "visible" : "hidden"}`}>
      <div className="social-icons-list">
        <div className="icon-block">
          <a
            href="https://www.instagram.com/usb_radio?igsh=YW56ZGZzYTR6dG1k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="icon-block">
          <a
            href="https://open.spotify.com/show/6PXeoziWiDG7nDO9IqO4lg?si=d3812d8504474e6a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </a>
        </div>
        <div className="icon-block">
          <a
            href="https://www.deezer.com/search/USB%20Radio/show"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDeezer />
          </a>
        </div>
        <div className="icon-block">
          <a
            href="https://www.spreaker.com/user/usb-radio--8429931"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMicrophone />
          </a>
        </div>
      </div>
    </div>
  );
}

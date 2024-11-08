import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import { Marquee } from "../components/Marquee";

function HomePage() {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <Marquee />
    </div>
  );
}

export default HomePage;

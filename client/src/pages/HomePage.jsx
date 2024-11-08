import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import { NetworksList } from "../components/NetworksList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <NetworksList />
    </div>
  );
}

export default HomePage;

import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import SliderCards from "../components/SliderCards";
import { NetworksList } from "../components/NetworksList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <NetworksList />
      <SliderCards />
    </div>
  );
}

export default HomePage;

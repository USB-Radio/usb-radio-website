import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import SliderCards from "../components/SliderCards";
import Footer from "../components/Footer";
import SongHistory from "../components/SongHistory";
import { NetworksList } from "../components/NetworksList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <SongHistory />
      <NetworksList />
      <SliderCards />
      <Footer />
    </div>
  );
}

export default HomePage;

import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import SliderCards from "../components/SliderCards";
import Footer from "../components/Footer";
import RadioPage from "../components/RadioPage";
import { NetworksList } from "../components/NetworksList";

function HomePage() {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <RadioPage />
      <NetworksList />
      <SliderCards />
      <Footer />
    </div>
  );
}

export default HomePage;

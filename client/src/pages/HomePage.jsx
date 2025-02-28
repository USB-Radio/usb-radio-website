import { useData } from "../context/radioContext";
import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import SliderCards from "../components/SliderCards";
import Footer from "../components/Footer";
import RadioPage from "../components/RadioPage";
import { NetworksList } from "../components/NetworksList";

function HomePage() {
  const { title, artist } = useData(); // Extraer title y artist del contexto

  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <RadioPage />
      <NetworksList />
      <SliderCards />
      <Footer title={title} artist={artist} /> {/* Pasar title y artist */}
    </div>
  );
}

export default HomePage;

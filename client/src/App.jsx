import ApiTest from "./components/ApiTest";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <AudioPlayer />
      <ApiTest />
    </div>
  );
};

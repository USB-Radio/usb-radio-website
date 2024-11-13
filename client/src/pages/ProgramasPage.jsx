import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SliderCards from "../components/SliderCards";

function ProgramasPage() {
  return (
    <div>
      <Navbar />
      <div className="program-content">
        <SliderCards />
      </div>
      <Footer />
    </div>
  );
}

export default ProgramasPage;

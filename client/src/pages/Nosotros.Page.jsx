import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NosotrosPage.css";

function NosotrosPage() {
  return (
    <div>
      <Navbar />
      <div className="presentation-card-container">
        <div className="presentation-card-layout ">
          <div className="pres-card-cont">
            <div className="pres-card-title">
              <p>USB RADIO - Ponle Play y Disfruta la U</p>
            </div>
            <div className="pres-card-info-img">
              <img src="/images/presentation-img.PNG" alt="Logo" />
              <div className="pres-card-info">
                <p>
                  El propósito de USB Radio es unir a la comunidad
                  Bonaventuriana, creando contenidos digitales para radio
                  propios de la Universidad que generen un sentido de
                  pertenencia y resalten las habilidades de los estudiantes,
                  docentes y en general todos los que conforman nuestra
                  comunidad.
                </p>
                <div className="pres-card-info">
                  <p className="pres-car-sub-title">
                    Pagina Desarrollada por los Ingenieros:
                  </p>
                  <ul className="list-names ">
                    <li>* Manuel Sepulveda Cruz</li>
                    <li>* Andres Ivaldo Monterroza</li>
                    <li>* Isaac Garcia Torres</li>
                    <li></li>
                  </ul>
                  <p className="pres-car-sub-title">Linea de Producción:</p>
                  <ul className="list-names ">
                    <li>* Juan Diego Rodriguez</li>
                    <li>* Jorge Espinoza</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NosotrosPage;

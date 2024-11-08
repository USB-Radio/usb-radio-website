import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/radioContext";
import HomePage from "./pages/HomePage";
import ProgramasPage from "./pages/ProgramasPage";

export const App = () => {
  return (
    <DataProvider>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<h1>Nosotros</h1>} />
          <Route path="/noticias" element={<h1>Noticias</h1>} />
          <Route path="/programas" element={<ProgramasPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

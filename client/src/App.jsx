import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/radioContext";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/Nosotros.Page";
import ProgramasPage from "./pages/ProgramasPage";

export const App = () => {
  return (
    <DataProvider>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/programas" element={<ProgramasPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

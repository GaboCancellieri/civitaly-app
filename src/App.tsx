import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404, HomePage } from "./pages";
import Navbar from "./components/common/NavBar/index";
const App: React.FC = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Error404 />} /> {/* Ruta catch-all para 404 */}
    </Routes>
    </div>
  );
};

export default App;

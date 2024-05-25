import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404, HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Error404 />} /> {/* Ruta catch-all para 404 */}
    </Routes>
  );
};

export default App;

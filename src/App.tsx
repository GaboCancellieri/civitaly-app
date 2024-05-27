import React from "react";
import { Routes, Route } from "react-router-dom";
import { Error404, HomePage, Chat } from "./pages";
import Navbar from "./components/common/NavBar/index";
 
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;

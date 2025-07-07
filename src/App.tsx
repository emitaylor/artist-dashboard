import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ArtistDetail from "./components/ArtistDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/artist/:name" element={<ArtistDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Routes>
      {/* localhost */}
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      {/* gh-pages host */}
      <Route path="/learning-redux" element={<Home />} />
      <Route path="/learning-redux/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
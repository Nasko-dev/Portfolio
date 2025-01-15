import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceil from "./Acceil";
import Cv from "./componants/Cv/cv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceil />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

export default App;

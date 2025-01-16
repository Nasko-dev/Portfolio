import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cv from "./componants/Cv/cv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PredictiveMaintenance from "./components/PredictiveMaintenance";
import Faulty from "./components/Faulty";
import Normal from "./components/Normal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PredictiveMaintenance />} />
        <Route path="/faulty" element={<Faulty />} />
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </Router>
  );
}

export default App;

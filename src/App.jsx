import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import Navbar from "./components/Navbar";
import Equipments from "./pages/Equipments";
import 'bootstrap/dist/css/bootstrap.min.css';
import Interventions from "./pages/Interventions";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/interventions" element={<Interventions />} />



      </Routes>
    </Router>
  );
}

export default App;

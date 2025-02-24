import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/maintenance">Maintenance</Link>
      <Link to="/equipments">Équipements</Link>
      <Link to="/interventions">Interventions</Link>

    </nav>
  );
};

export default Navbar;

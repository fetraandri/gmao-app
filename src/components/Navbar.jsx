import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/maintenance">Maintenance</Link>
      <Link to="/equipments">Équipements</Link>

    </nav>
  );
};

export default Navbar;

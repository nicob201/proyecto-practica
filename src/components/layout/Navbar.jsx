import { Link } from "react-router-dom";
import "./Navbar.scss";

// Barra de navegacion, incluye links a las paginas principales
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-logo">TechStore</h1>

        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

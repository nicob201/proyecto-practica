import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useCart } from "../../context/CartContext";

// Barra de navegacion, incluye links a las paginas principales
const Navbar = () => {
  const { totalItems } = useCart();

  console.log("Total items en el carrito:", totalItems);

  return (
    <header className="header-wrapper">
      <nav className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dl73hi4ir/image/upload/q_auto/f_auto/v1775655371/tecnoStore_euagzc.svg"
            alt="Logo TechStore"
            className="navbar-logo"
          />
        </Link>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>

          <Link to="/cart" className="cart-link">
            <div className="cart-widget">
              <span>🛒 {totalItems > 0 && totalItems}</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

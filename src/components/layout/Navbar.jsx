import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <h2>Web Ecommerce</h2>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <Link to="/" style={{ color: "#fff" }}>Inicio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

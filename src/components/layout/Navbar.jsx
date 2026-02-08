import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>TechStore</h1>

        <ul style={styles.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #eee",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  },
};

export default Navbar;

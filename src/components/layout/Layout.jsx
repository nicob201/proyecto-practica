import Navbar from "./Navbar";
import Footer from "./Footer";

// Componente de layout que envuelve todas las paginas, incluye el navbar y el footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

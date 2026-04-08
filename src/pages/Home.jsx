import { useNavigate } from "react-router-dom";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Benefits from "../components/home/Benefits";
import "./Home.scss";
import Button from "../components/ui/Button";
import Newsletter from "../components/home/Newsletter";

// Componente pagina de inicio
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Nuevo lanzamiento</span>
          {/* titulo principal con marca en negrita */}
          <h1>
            La evolucion del <span>Juego</span>
          </h1>
          <p>
            Proba la nueva Asus ROG Zephyrus G14, la laptop gamer mas potente y
            liviana del mercado
          </p>
          <Button text="Comprar Ahora" onClick={() => navigate("/products")} className="home-button"/>
        </div>

        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728680723/AsusROGZephyrusG14_kztach.jpg"
            alt="Featured product"
          />
        </div>
      </section>

      <FeaturedCategories />
      <Benefits />
      <Newsletter />
    </>
  );
};

export default Home;

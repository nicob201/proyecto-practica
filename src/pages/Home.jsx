import { useNavigate } from "react-router-dom";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Benefits from "../components/home/Benefits";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">New Release</span>
          <h1>
            Evolution of <span>Gaming</span>
          </h1>
          <p>
            Experience the new Notebook 15 with unmatched speed,
            stunning display, and all-day battery life.
          </p>
          <button className="primary-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
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
    </>
  );
};

export default Home;

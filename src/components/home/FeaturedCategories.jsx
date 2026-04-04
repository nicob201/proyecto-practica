import "./FeaturedCategories.scss";

// Componente que muestra las categorias destacadas en la pagina de inicio
const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <div className="section-header">
                <div>
                    <h2>Categorias Destacadas</h2>
                    <p>Explora nuestras categorias más populares</p>
                </div>

                <button className="view-all">Ver Todas las Categorias →</button>
            </div>

            <div className="categories-grid">
                <div className="category-card">
                    <div className="icon">💻</div>
                    <h3>Laptops</h3>
                    <p>Notebooks super potentes</p>
                </div>

                <div className="category-card">
                    <div className="icon">🎧</div>
                    <h3>Audio</h3>
                    <p>Equipo de sonido de calidad profesional</p>
                </div>

                <div className="category-card">
                    <div className="icon">⌚</div>
                    <h3>Relojes Inteligentes</h3>
                    <p>Para que estes siempre conectado</p>
                </div>

                <div className="category-card">
                    <div className="icon">📱</div>
                    <h3>Smartphones</h3>
                    <p>Dispositivos móviles de última generación</p>
                </div>

                <div className="category-card">
                    <div className="icon">🎮</div>
                    <h3>Gaming</h3>
                    <p>Consolas, accesorios y mas</p>
                </div>

                <div className="category-card">
                    <div className="icon">📸</div>
                    <h3>Camaras</h3>
                    <p>Equipo profesional y de entusiastas</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;

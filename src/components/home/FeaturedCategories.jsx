import "./FeaturedCategories.scss";

const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <div className="section-header">
                <div>
                    <h2>Featured Categories</h2>
                    <p>View our products</p>
                </div>

                <button className="view-all">View All Categories →</button>
            </div>

            <div className="categories-grid">
                <div className="category-card">
                    <div className="icon">💻</div>
                    <h3>Laptops</h3>
                    <p>High-performance workstations</p>
                </div>

                <div className="category-card">
                    <div className="icon">🎧</div>
                    <h3>Audio</h3>
                    <p>Studio quality sound equipment</p>
                </div>

                <div className="category-card">
                    <div className="icon">⌚</div>
                    <h3>Wearables</h3>
                    <p>Stay connected on the go</p>
                </div>

                <div className="category-card">
                    <div className="icon">📱</div>
                    <h3>Smartphones</h3>
                    <p>Latest models and deals</p>
                </div>

                <div className="category-card">
                    <div className="icon">🎮</div>
                    <h3>Gaming</h3>
                    <p>Consoles, accessories & more</p>
                </div>

                <div className="category-card">
                    <div className="icon">📸</div>
                    <h3>Cameras</h3>
                    <p>Professional & enthusiast gear</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;

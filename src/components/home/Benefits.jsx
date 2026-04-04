import "./Benefits.scss";

// Componente que muestra en inicio los beneficios de comprar en la tienda
const Benefits = () => {
    return (
        <section className="benefits">
            <div className="benefits-container">
                <div className="benefit-item">
                    <div className="icon">🚚</div>
                    <h4>Free Shipping</h4>
                    <p>
                        Free shipping on all orders
                        over $500
                    </p>
                </div>

                <div className="benefit-item">
                    <div className="icon">🛡️</div>
                    <h4>2-Year Warranty</h4>
                    <p>
                        Peace of mind guaranteed with our
                        comprehensive hardware protection plans
                    </p>
                </div>

                <div className="benefit-item">
                    <div className="icon">🎧</div>
                    <h4>Expert Support</h4>
                    <p>
                        Dedicated 24/7 technical assistance from
                        our team of specialists
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

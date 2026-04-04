import "./Benefits.scss";

// Componente que muestra en inicio los beneficios de comprar en la tienda
const Benefits = () => {
    return (
        <section className="benefits">
            <div className="benefits-container">
                <div className="benefit-item">
                    <div className="icon">🚚</div>
                    <h4>Envios Gratis!</h4>
                    <p>
                        Envio gratis en todos los pedidos
                        desde $50000
                    </p>
                </div>

                <div className="benefit-item">
                    <div className="icon">🛡️</div>
                    <h4>2 Años De Garantia</h4>
                    <p>
                        Garantía de 2 años en todos nuestros productos
                    </p>
                </div>

                <div className="benefit-item">
                    <div className="icon">🎧</div>
                    <h4>Soporte Experto</h4>
                    <p>
                        Asistencia técnica dedicada 24/7 de
                        nuestro equipo de especialistas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

import { useState } from "react";
import Button from "../ui/Button";
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envio de formulario
    console.log("Email registrado:", email);
    alert("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Recibe nuestras mejores promociones</h2>
        <p>
          Únete a nuestro boletín para recibir las últimas actualizaciones sobre
          nuevos productos y ofertas exclusivas.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button text="Suscribir" className="subscribe-btn" />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

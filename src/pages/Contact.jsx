import { useState } from "react";
import Button from "../components/ui/Button";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envio de formulario
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado exitosamente");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2>Contactanos</h2>
        <p>¿Tenés alguna duda? Escribinos y te responderemos a la brevedad.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            text="Enviar Mensaje"
            className="submit-button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;

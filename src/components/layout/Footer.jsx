import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Columna 1 */}
        <div className="footer-section">
          <h4>TecnoStore</h4>
          <p>
            Tu destino número uno para la mejor tecnología y gaming. Calidad y
            confianza en cada compra.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@tecnostore.com</p>
          <p>Teléfono: +54 (123) 456-7890</p>
        </div>

        {/* Columna 3 */}
        <div className="footer-section">
          <h4>Información</h4>
          <p className="footer-link">Política de Privacidad</p>
          <p className="footer-link">Términos y Condiciones</p>
          <p className="footer-link">Preguntas Frecuentes</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 TecnoStore. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

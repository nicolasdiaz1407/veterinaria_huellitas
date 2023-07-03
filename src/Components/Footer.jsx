import "../Styles/footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="mov-footer">
        <footer className="footer-container">
          <div className="footer-section">
            <h3>Horarios de Atención</h3>
            <p>Lunes - Viernes: 9am - 6pm</p>
            <p>Sábabados: 10am - 4pm</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div className="footer-section">
            <h3>Contáctanos</h3>
            <p><FaPhone className="contacto-icon"/>+54 3865-635648</p>
            <p><FaEnvelope className="contacto-icon"/>Huellitas@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Ubicación</h3>
            <p>José Marmol 800, Aguilares, Tucumán</p>
            <p>Rivadavia 2000, Concepción, Tucumán</p>
            <p>San Martin 1200, Yerba Buena, Tucumán</p>
          </div>
          <div className="footer-section">
            <h3>Síguenos en redes sociales</h3>
            <div className="social-icons">
              <a href="https://facebook.com">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-sectionn">
            <p className="copyright">
              <strong>&copy;</strong>2023 Huellitas. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

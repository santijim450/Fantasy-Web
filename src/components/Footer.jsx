function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Salón Fantasy</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
              Haciendo tus momentos especiales verdaderamente inolvidables. Diseño premium para eventos únicos.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Enlaces</h3>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/salon">El Salón</a></li>
              <li><a href="/mesas">Mesas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-links">
              <li>📍 Cd. Nezahualcóyotl, Méx.</li>
              <li>📞 (55) 1234-5678</li>
              <li>✉️ contacto@salonfantasy.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Salón de Eventos Fantasy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

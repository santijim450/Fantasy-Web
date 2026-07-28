function Contacto() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* Header */}
      <section className="section text-center" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-accent)', padding: '5rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>Contáctanos</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>
            Permítenos ser parte de tu historia. Agendemos una cita para conocer el recinto.
          </p>
        </div>
      </section>

      {/* Formulario e Información */}
      <section className="section" style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', background: 'white', padding: '4rem', borderRadius: '4px', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Información de Contacto */}
            <div style={{ flex: '1 1 300px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>Reserva tu Cita</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📍 Ubicación</h4>
                <p style={{ color: 'var(--color-text)' }}>Calle Esmeralda 123, Jardines del Valle<br/>Ciudad Nezahualcóyotl, Estado de México</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📞 Teléfono / WhatsApp</h4>
                <p style={{ color: 'var(--color-text)' }}>+52 (55) 1234-5678<br/>+52 (55) 8765-4321</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>✉️ Correo Electrónico</h4>
                <p style={{ color: 'var(--color-text)' }}>eventos@fantasyjardin.com.mx</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🕒 Horario de Atención</h4>
                <p style={{ color: 'var(--color-text)' }}>Lunes a Viernes: 10:00 am - 7:00 pm<br/>Sábados y Domingos: Previa cita</p>
              </div>
            </div>

            {/* Formulario */}
            <div style={{ flex: '1 1 400px' }}>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Nombre Completo</label>
                  <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }} />
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flex: '1' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Teléfono</label>
                    <input type="tel" placeholder="Tu teléfono" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }} />
                  </div>
                  <div style={{ flex: '1' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Fecha del Evento</label>
                    <input type="date" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Tipo de Evento</label>
                  <select style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none' }}>
                    <option>Boda</option>
                    <option>XV Años</option>
                    <option>Evento Corporativo</option>
                    <option>Graduación</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Mensaje Adicional</label>
                  <textarea rows="4" placeholder="¿Cómo podemos ayudarte a crear el evento perfecto?" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none', resize: 'none' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary hover-scale" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Enviar Solicitud</button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contacto;

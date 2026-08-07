function Contacto() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      
      {/* Header */}
      <section className="hero-base" style={{ minHeight: '40vh', background: 'var(--color-surface)' }}>
        <div className="hero-content reveal">
          <span className="subtitle-caps">Hablemos</span>
          <h1 className="title-massive" style={{ color: 'var(--color-text)' }}>
            Contáctanos
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '2rem auto 0' }}>
            Permítenos ser parte de tu historia. Agendemos una cita para conocer el recinto.
          </p>
        </div>
      </section>

      {/* Formulario e Información */}
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'flex-start' }}>
            
            {/* Información de Contacto */}
            <div className="reveal">
              <span className="subtitle-caps">Información</span>
              <h2 className="title-massive" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Reserva tu Cita</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <span className="subtitle-caps" style={{ color: 'var(--color-text)' }}>Ubicación</span>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: '1.5' }}>
                  Calle, S. Rafael N. 254,<br/>
                  Vicente Villada, 57710<br/>
                  Cdad. Nezahualcóyotl, Méx.
                </p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <span className="subtitle-caps" style={{ color: 'var(--color-text)' }}>Teléfono / WhatsApp</span>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                  <a href="https://wa.me/525536073700" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+52 (55) 3607-3700</a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <span className="subtitle-caps" style={{ color: 'var(--color-text)' }}>Correo Electrónico</span>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>eventos@fantasyjardin.com.mx</p>
              </div>

              <div>
                <span className="subtitle-caps" style={{ color: 'var(--color-text)' }}>Horario de Atención</span>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>Lunes a Viernes: 10:00 am - 7:00 pm<br/>Sábados y Domingos: Previa cita</p>
              </div>
            </div>

            {/* Formulario */}
            <div className="reveal reveal-delay-1" style={{ background: 'var(--color-surface)', padding: '4rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nombre Completo</label>
                  <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text)' }} />
                </div>
                
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Teléfono</label>
                    <input type="tel" placeholder="Tu teléfono" style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text)' }} />
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fecha del Evento</label>
                    <input type="date" style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tipo de Evento</label>
                  <select style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text)', cursor: 'pointer' }}>
                    <option>Boda</option>
                    <option>XV Años</option>
                    <option>Evento Corporativo</option>
                    <option>Graduación</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mensaje Adicional</label>
                  <textarea rows="3" placeholder="¿Cómo podemos ayudarte a crear el evento perfecto?" style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text)', resize: 'none' }}></textarea>
                </div>

                <button type="submit" className="view-all-container" style={{ alignSelf: 'flex-start', marginTop: '1rem', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '1px solid var(--color-text)', paddingBottom: '4px' }}>Enviar Solicitud <span className="view-all__arrow">↗</span></button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contacto;

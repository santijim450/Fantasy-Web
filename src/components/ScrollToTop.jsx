import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando la ruta cambia, el scroll vuelve arriba al instante
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

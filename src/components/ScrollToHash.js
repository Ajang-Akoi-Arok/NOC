import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.slice(1);
    const deadline = Date.now() + 3000;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (Date.now() < deadline) {
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;

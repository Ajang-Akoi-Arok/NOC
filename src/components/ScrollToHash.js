import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      // html has scroll-behavior: smooth globally, which would otherwise
      // animate this reset and visibly "pull" the page back up to the top
      // on every route change. Force this specific jump to be instant.
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
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

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AppRouter } from './router/AppRouter';

const PATH_TO_HASH = {
  '/work': '#work',
  '/projects': '#work',
  '/experience': '#experience',
  '/education': '#education',
  '/stack': '#stack',
  '/tech': '#stack',
  '/about': '#about',
  '/contact': '#contact',
};

function SpaHashHandler() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If user lands on a legacy subpath like /work, redirect to /#work
    if (PATH_TO_HASH[pathname]) {
      const targetHash = PATH_TO_HASH[pathname];
      navigate(`/${targetHash}`, { replace: true });
      setTimeout(() => {
        const el = document.getElementById(targetHash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // If user lands directly with a hash like /#services
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash, navigate]);

  return null;
}

function App() {
  return (
    <>
      <SpaHashHandler />
      <AppRouter />
    </>
  );
}

export default App;

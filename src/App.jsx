import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AppRouter } from './router/AppRouter';

// Maps old hash anchors to clean routes
const HASH_REDIRECTS = {
  '#projects': '/work',
  '#work':     '/work',
  '#services': '/services',
  '#about':    '/about',
  '#education':'/about',
  '#experience':'/about',
  '#tech':     '/about',
  '#principles':'/about',
  '#contact':  '/contact',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HashRedirector() {
  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && HASH_REDIRECTS[hash]) {
      navigate(HASH_REDIRECTS[hash], { replace: true });
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <HashRedirector />
      <AppRouter />
    </>
  );
}

export default App;

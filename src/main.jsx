import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ThemeProvider } from './components/common/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { LenisProvider } from './hooks/useLenis.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <MotionConfig reducedMotion="user">
          <LenisProvider>
            <App />
            <Analytics />
          </LenisProvider>
        </MotionConfig>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

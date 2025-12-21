import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import About from "./components/About";
import Aim from "./components/Aim";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  const resizingRef = useRef(false);
  const resizeTimerRef = useRef<number | undefined>(undefined);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Fade out effect when scrolling past components
    const handleScroll = () => {
      // Skip fade calculations during window resize
      if (resizingRef.current) return;

      // Store current scroll position
      scrollPosRef.current = window.pageYOffset;

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        // Skip fade effect for Features section
        if (section.querySelector('h2')?.textContent === 'Features') {
          (section as HTMLElement).style.opacity = '1';
          return;
        }

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Fade when scrolling down (section going up past viewport) - starts later
        if (rect.top < -rect.height * 0.8) {
          const fadePoint = (Math.abs(rect.top) - rect.height * 0.8) / (rect.height * 0.7);
          const opacity = Math.max(0, 1 - fadePoint);
          (section as HTMLElement).style.opacity = opacity.toString();
        } 
        // Fade when scrolling up (section coming from below)
        else if (rect.top > windowHeight * 0.85) {
          const fadePoint = (rect.top - windowHeight * 0.85) / (windowHeight * 0.15);
          const opacity = Math.max(0, 1 - fadePoint);
          (section as HTMLElement).style.opacity = opacity.toString();
        } 
        else {
          // Section is visible in viewport
          (section as HTMLElement).style.opacity = '1';
        }
      });
    };

    const handleResize = () => {
      resizingRef.current = true;
      
      // Store scroll position at start of resize
      scrollPosRef.current = window.pageYOffset;
      
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      
      resizeTimerRef.current = window.setTimeout(() => {
        // Restore scroll position after resize
        window.scrollTo(0, scrollPosRef.current);
        
        resizingRef.current = false;
        
        // Recalculate after a frame
        requestAnimationFrame(() => {
          handleScroll();
        });
      }, 150);
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScrollProgress />
      <LoadingScreen />
      <Header />
      <About />
      <Aim />
      <Features />
      <Footer />
    </ThemeProvider>
  );
}

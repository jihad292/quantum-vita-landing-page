import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
<<<<<<< HEAD
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
=======

>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87
import Header from "./components/Header";
import About from "./components/About";
import Aim from "./components/Aim";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
<<<<<<< HEAD
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Fade out effect when scrolling past components
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScrollProgress />
      <LoadingScreen />
=======
  return (
    <ThemeProvider theme={theme}>
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87
      <Header />
      <About />
      <Aim />
      <Features />
      <Footer />
    </ThemeProvider>
  );
}

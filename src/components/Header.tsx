import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, Dropdown } from 'react-bootstrap';
import styles from "./Header.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const [heroMargin, setHeroMargin] = useState(window.innerWidth < 768 ? '90px' : '120px');
  
  const handleClose = () => setShow(false);

  const handleLanguageChange = (lang: 'English' | 'Français' | 'العربية') => {
    setLanguage(lang);
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      setHeroMargin(newIsMobile ? '90px' : '120px');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector(`.${styles.heroOuter}`) as HTMLElement;
      if (!heroElement) return;

      const rect = heroElement.getBoundingClientRect();
      const scrolled = window.pageYOffset;

      // Fade hero section when scrolling down
      if (rect.top < -rect.height * 0.3) {
        const fadePoint = (Math.abs(rect.top) - rect.height * 0.3) / (rect.height * 0.7);
        const opacity = Math.max(0, 1 - fadePoint);
        setHeroOpacity(opacity);
      } else {
        setHeroOpacity(1);
      }

      // Navbar fade effect - becomes more opaque when scrolling
      if (scrolled > 50) {
        const opacity = Math.min(0.95, 0.85 + (scrolled / 1000));
        setNavbarOpacity(opacity);
      } else {
        setNavbarOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar fixed="top" expand="lg" className={styles.appBar} style={{ opacity: navbarOpacity, transition: 'opacity 0.3s ease' }}>
        <Container fluid className="px-0">
          <div className="d-flex justify-content-center align-items-center w-100 px-3 px-md-4 position-relative">
            
            {/* Language Selector - Left Side */}
            <div className="position-absolute start-0 ms-2 ms-sm-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary" size="sm" className={styles.languageButton}>
                  🌐 {language}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange('English')} active={language === 'English'}>
                    🇺🇸 English
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('Français')} active={language === 'Français'}>
                    🇫🇷 Français
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('العربية')} active={language === 'العربية'}>
                    🇱🇧 العربية
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Navbar.Brand>
              <img
                src="/images/quantum-logo.png"
                alt="Quantum Logo"
                style={{ 
                  height: isMobile ? 65 : 95, 
                  width: 'auto'
                }}
                className={styles.logo}
              />
            </Navbar.Brand>

            {/* <div className="d-none d-xl-flex gap-2 position-absolute end-0 me-3">
              <Button variant="primary" className={styles.glowButton}>{t.header.signIn}</Button>
              <Button variant="primary" className={styles.glowButton}>{t.header.register}</Button>
              <Button variant="primary" className={styles.glowButton}>{t.header.contactUs}</Button>
            </div>

            <Button 
              variant="outline-primary" 
              className="d-xl-none position-absolute end-0 me-3" 
              onClick={handleShow}
              style={{ fontSize: '1.5rem', padding: '0.25rem 0.5rem' }}
            >
              ☰
            </Button> */}
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t.header.menu}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link onClick={handleClose}>{t.header.signIn}</Nav.Link>
            <Nav.Link onClick={handleClose}>{t.header.register}</Nav.Link>
            <Nav.Link onClick={handleClose}>{t.header.contactUs}</Nav.Link>
            <hr />
            <div className="px-3">
              <small className="text-muted">{t.header.language}</small>
              <Nav.Link onClick={() => { handleLanguageChange('English'); handleClose(); }}>
                🇺🇸 English
              </Nav.Link>
              <Nav.Link onClick={() => { handleLanguageChange('Français'); handleClose(); }}>
                🇫🇷 Français
              </Nav.Link>
              <Nav.Link onClick={() => { handleLanguageChange('العربية'); handleClose(); }}>
                🇱🇧 العربية
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={styles.heroOuter} style={{ marginTop: heroMargin, opacity: heroOpacity, transition: 'opacity 0.3s ease-out' }}>
        <div className={styles.shimmerOverlay}></div>
        <Container fluid className="px-0">
          <div className="container px-3 px-md-4">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 text-center text-white">
                <h1 className="display-4 fw-bold mb-3">
                  {t.header.heroTitle}
                </h1>
                <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {t.header.heroSubtitle}
                </p>
                {/* Get Started Button - Call to Action */}
                {/* <Button variant="light" size="lg" className={styles.ctaButton}>
                  Get Started Today
                </Button> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
               


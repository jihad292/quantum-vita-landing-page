import { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, Offcanvas } from 'react-bootstrap';
import styles from "./Header.module.css";
import "../styles/variables.css";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar fixed="top" expand="lg" className={styles.appBar}>
        <Container fluid className="px-0">
          <div className="d-flex justify-content-center align-items-center w-100 px-3 px-md-4 position-relative">
            <Navbar.Brand>
              <img
                src="/images/quantum-logo.png"
                alt="Quantum Logo"
                style={{ 
                  height: isMobile ? 80 : 120, 
                  width: 'auto'
                }}
                className={styles.logo}
              />
            </Navbar.Brand>

            <div className="d-none d-xl-flex gap-2 position-absolute end-0 me-3">
              <Button variant="link" className="text-primary fw-bold">Sign In</Button>
              <Button variant="primary">Register</Button>
              <Button variant="link" className="text-primary fw-bold">Contact Us</Button>
            </div>

            <Button 
              variant="outline-primary" 
              className="d-xl-none position-absolute end-0 me-3" 
              onClick={handleShow}
              style={{ fontSize: '1.5rem', padding: '0.25rem 0.5rem' }}
            >
              ☰
            </Button>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link onClick={handleClose}>Sign In</Nav.Link>
            <Nav.Link onClick={handleClose}>Register</Nav.Link>
            <Nav.Link onClick={handleClose}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={styles.heroOuter} style={{ marginTop: window.innerWidth < 768 ? '110px' : '145px' }}>
        <Container fluid className="px-0">
          <div className="container px-3 px-md-4">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 text-center text-white">
                <h1 className="display-4 fw-bold mb-3">
                  Unify clinical workflows, automate documentation, and deliver AI-powered insights
                </h1>
                <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Designed to reduce clinician workload and improve patient outcomes.
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
               


import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.module.css";
import "../styles/variables.css";

export default function About() {
  return (
    <section className={styles.outer}>
      <div className={styles.decorative} />
      <Container fluid className="px-0">
        <Container className="py-5">
          <div className={styles.headingRow}>
            <div className={styles.accentBar} />
            <h2 className="display-5 fw-bold text-primary mb-0">About Us</h2>
          </div>

          <Row className="g-4 align-items-center">
            <Col xs={12} lg={5} className="text-center">
              <img 
                className={styles.image} 
                src="/images/ABOUTUS.jpg" 
                alt="About Us" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }} 
              />
            </Col>

            <Col xs={12} lg={7}>
              <p className="fs-5 mb-4">
                <strong style={{ fontWeight: 700, color: 'var(--primary)' }}>Quantum Vita</strong> is a modern EMR platform built to transform the future of medicine. We <strong style={{ fontWeight: 600, color: 'var(--info)' }}>unify clinical workflows</strong>, automate documentation, and deliver <strong style={{ fontWeight: 600, color: 'var(--secondary)' }}>AI-powered insights</strong> designed to reduce clinician workload and improve patient outcomes.
              </p>

              <div className={styles.bullets}>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">Unified clinical workflows</p>
                </div>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">Automated documentation</p>
                </div>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">AI-powered insights</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}


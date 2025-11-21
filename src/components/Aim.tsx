import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Aim.module.css";
import "../styles/variables.css";

export default function Aim() {
  return (
    <section className={styles.outer}>
      <div className={styles.decorative} />
      <Container fluid className="px-0">
        <Container className="py-5">
          <div className={styles.headingRow}>
            <div className={styles.accentBar} />
            <h2 className="display-5 fw-bold text-primary mb-0">Our Aim</h2>
          </div>

          <Row className="g-4 align-items-center">
            <Col xs={12} lg={5} className="text-center">
              <img 
                className={styles.image} 
                src="/images/AIM.jpg" 
                alt="Our Aim" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }} 
              />
            </Col>

            <Col xs={12} lg={7}>
              <div className={styles.textCard}>
                <p className="fs-5 lh-lg mb-3">
                  Improve the quality of <strong style={{ fontWeight:700, color:'var(--primary)' }}>medical care</strong> while keeping healthcare costs at the <strong style={{ fontWeight:700, color:'var(--info)' }}>lowest possible levels</strong> -powered by <strong style={{ fontWeight:600, color:'var(--info)' }}>AI, automation, and seamless clinical workflows.</strong>
                </p>
              </div>

              <div className={styles.pillars}>
                <p className="fw-bold text-primary text-uppercase small mb-3">Key Pillars</p>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">Quality improvement through technology</p>
                </div>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">Cost optimization through automation</p>
                </div>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">Seamless workflow integration</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

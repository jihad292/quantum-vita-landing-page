import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section className={styles.outer}>
      <div className={styles.decorative} />
      <Container fluid className="px-0">
        <Container className="py-5">
          <div className={styles.headingRow} data-aos="fade-right">
            <div className={styles.accentBar} />
            <h2 className="display-5 fw-bold text-primary mb-0">{t.about.title}</h2>
          </div>

          <Row className="g-4 align-items-center">
            <Col xs={12} lg={5} className="text-center" data-aos="fade-up" data-aos-delay="100">
              <img 
                className={styles.image} 
                src="/images/ABOUTUSs.jpg" 
                alt="About Us" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }} 
              />
            </Col>

            <Col xs={12} lg={7} data-aos="fade-left" data-aos-delay="200">
              <p className="fs-5 mb-4">
                <strong style={{ fontWeight: 700, color: 'var(--primary)' }}>Quantum Vita</strong> {t.about.description} <strong style={{ fontWeight: 600, color: 'var(--info)' }}>{t.about.unifyWorkflows}</strong>{t.about.description2} <strong style={{ fontWeight: 600, color: 'var(--secondary)' }}>AI-powered insights</strong> {t.about.description3}
              </p>

              <div className={styles.bullets}>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.about.bullet1}</p>
                </div>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.about.bullet2}</p>
                </div>
                <div className={styles.bulletRow}>
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.about.bullet3}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}


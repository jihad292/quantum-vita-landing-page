import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Aim.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function Aim() {
  const { t } = useTranslation();
  
  return (
    <section className={styles.outer}>
      <div className={styles.decorative} />
      <Container fluid className="px-0">
        <Container className="py-5">
          <div className={styles.headingRow} data-aos="fade-right">
            <div className={styles.accentBar} />
            <h2 className="display-5 fw-bold text-primary mb-0">{t.aim.title}</h2>
          </div>

          <Row className="g-4 align-items-center">
            <Col xs={12} lg={5} className="text-center" data-aos="fade-up" data-aos-delay="100">
              <img 
                className={styles.image} 
                src="/images/AIM.jpg" 
                alt="Our Aim" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }} 
              />
            </Col>

            <Col xs={12} lg={7} data-aos="fade-left" data-aos-delay="200">
              <div className={styles.textCard}>
                <p className="fs-5 lh-lg mb-3">
                  {t.aim.description1} <strong style={{ fontWeight:700, color:'var(--primary)' }}>{t.aim.medicalCare}</strong> {t.aim.description2} <strong style={{ fontWeight:700, color:'var(--info)' }}>{t.aim.lowestLevels}</strong> {t.aim.description3} <strong style={{ fontWeight:600, color:'var(--info)' }}>{t.aim.aiAutomation}</strong>
                </p>
              </div>

              <div className={styles.pillars}>
                <p className="fw-bold text-primary text-uppercase small mb-3">{t.aim.keyPillars}</p>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.aim.pillar1}</p>
                </div>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.aim.pillar2}</p>
                </div>
                <div className="d-flex gap-3 align-items-start mb-2">
                  <div className={styles.bulletDot} />
                  <p className="fs-6 mb-0">{t.aim.pillar3}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

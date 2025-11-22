<<<<<<< HEAD
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
                src="/images/ABOUTUS.jpg" 
                alt="About Us" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }} 
              />
            </Col>

            <Col xs={12} lg={7} data-aos="fade-left" data-aos-delay="200">
              <p className="fs-5 mb-4">
                <strong style={{ fontWeight: 700, color: 'var(--primary)' }}>Quantum Vita</strong> {t.about.description} <strong style={{ fontWeight: 600, color: 'var(--info)' }}>{t.about.unifyWorkflows}</strong>{t.about.description2} <strong style={{ fontWeight: 600, color: 'var(--secondary)' }}>{t.about.aiInsights}</strong> {t.about.description3}
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

=======
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box sx={{ py: 8, px: 4, 
             /* display: 'flex', 
              justifyContent: 'space-between', // Puts maximum space between the two items
              alignItems: 'center'*/}}>
      <Typography variant="h4" fontWeight={1200} color="primary" >
        About Us
      </Typography>
      <Box sx={{ py: 8, px: 4, 
              display: 'flex', 
              justifyContent: 'space-between', // Puts maximum space between the two items
              alignItems: 'center'}}>
      <img
            src={
              isMobile
                ? "/images/ABOUTUS.jpg"
                : "/images/ABOUTUS.jpg"
            }
            alt="About Us"
            height="300" width="500"
          />
          

      <Typography variant="h6" fontWeight={400} sx={{ mt: 2, maxWidth: 800, }}>
        Quantum Vita is a modern EMR platform built to transform the future of
        medicine. We unify clinical workflows, automate documentation, and
        deliver AI-powered insights designed to reduce clinician workload and
        improve patient outcomes. Our mission is to shape the next generation of
        healthcare through innovation, precision, and intelligent automation.
      </Typography>
      </Box>
    </Box>
  );
}
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87

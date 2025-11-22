<<<<<<< HEAD
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Footer.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className={styles.outer}>
      <div className={styles.shimmerOverlay}></div>
      <div className={styles.orb2}></div>
      <Container fluid className="px-0" style={{ position: 'relative', zIndex: 1 }}>
        <Container className="py-4">
          <Row className="g-4 align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start" data-aos="fade-up" data-aos-duration="800">
              <div className={styles.connectTitle}>{t.footer.connectWithUs}</div>
              <div className={styles.socialIcons}>
                <a href="mailto:Quantumvita@outlook.com" className={styles.iconLink}>
                  <EmailIcon />
                </a>
                <a href="https://www.instagram.com/quantumvita?igsh=bXdscnp6NDZ0bGRt" className={styles.iconLink}>
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/share/1JyKfz7k8A/" className={styles.iconLink}>
                  <FacebookIcon />
                </a>
                <a href="https://wa.me/96181388927" className={styles.iconLink}>
                  <WhatsAppIcon />
                </a>
              </div>
            </Col>

            <Col xs={12} md={6} className="text-center text-md-end" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className={styles.contactText}>📧 Quantumvita@outlook.com</div>
              <div className={styles.contactText}>📱 +961 81 388 927</div>
            </Col>
          </Row>

          <hr className={styles.divider} />

          <Row>
            <Col xs={12} className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <div className={styles.copyRow}>
                <div>© {new Date().getFullYear()} {t.footer.copyright}</div>
                <div>{t.footer.tagline}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
=======
import { Box, Typography,useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <Box sx={{ px: 4, py: 4,
              //display: 'flex', 
              justifyContent: 'space-between',
              textAlign: "left",
              bgcolor: "darkBlue.main"
               }}>
    <Box sx={{ px: 4, py: 4,
              display: 'flex', 
              justifyContent: 'flex-start',
              textAlign: "left",
              gap: 2,
              //bgcolor: "darkBlue.main" 
              }}>

        <Typography variant="h4" fontWeight={1200} color="white" >
        Get To Know Us:
        </Typography>

        <a href="https://www.instagram.com/quantumvita?igsh=bXdscnp6NDZ0bGRt">
            <img height="50" width="50" 
                  src="/images/instagram-logo.png" className="Insta" />
        </a>

        <a href="https://www.facebook.com/share/1JyKfz7k8A/">
            <img height="50" width="50" 
                  src="/images/facebook-icon.png" className="FB" />
        </a>

        <a href="https://wa.me/96181388927">
            <img height="50" width="50" 
                  src="/images/whatsapp-logo.png" className="WHATSAPP" />
        </a>

    </Box>

      <Typography color="white" align="center">  
        © {new Date().getFullYear()} Quantum Vita — All Rights Reserved
      </Typography>

    </Box>
  );
}
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87

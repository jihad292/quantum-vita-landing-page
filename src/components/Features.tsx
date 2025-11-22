<<<<<<< HEAD
import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import styles from "./Features.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function Features() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      title: t.features.feature1.title,
      text: t.features.feature1.text,
      image: "/images/SPTT.jpg",
      detailTitle: t.features.feature1.detailTitle,
      description: t.features.feature1.description,
      clinicalImpact: t.features.feature1.clinicalImpact,
      visualCue: t.features.feature1.visualCue
    },
    {
      title: t.features.feature2.title,
      text: t.features.feature2.text,
      image: "/images/CHATBOTASSI.jpg",
      detailTitle: t.features.feature2.detailTitle,
      description: t.features.feature2.description,
      clinicalImpact: t.features.feature2.clinicalImpact,
      visualCue: t.features.feature2.visualCue
    },
    {
      title: t.features.feature3.title,
      text: t.features.feature3.text,
      image: "/images/LABSINTEG.jpg",
      detailTitle: t.features.feature3.detailTitle,
      description: t.features.feature3.description,
      clinicalImpact: t.features.feature3.clinicalImpact,
      visualCue: t.features.feature3.visualCue
    },
    {
      title: t.features.feature4.title,
      text: t.features.feature4.text,
      image: "/images/ONE_CLICK_DATA_COLLECTION_2.png",
      detailTitle: t.features.feature4.detailTitle,
      description: t.features.feature4.description,
      clinicalImpact: t.features.feature4.clinicalImpact,
      visualCue: t.features.feature4.visualCue
    },
    {
      title: t.features.feature5.title,
      text: t.features.feature5.text,
      image: "/images/LATESTARTICLES.jpg",
      detailTitle: t.features.feature5.detailTitle,
      description: t.features.feature5.description,
      clinicalImpact: t.features.feature5.clinicalImpact,
      visualCue: t.features.feature5.visualCue
    },
    {
      title: t.features.feature6.title,
      text: t.features.feature6.text,
      image: "/images/MANAGEMENTSYS.jpg",
      detailTitle: t.features.feature6.detailTitle,
      description: t.features.feature6.description,
      clinicalImpact: t.features.feature6.clinicalImpact,
      visualCue: t.features.feature6.visualCue
    },
    {
      title: t.features.feature7.title,
      text: t.features.feature7.text,
      image: "/images/AUDITING.jpg",
      detailTitle: t.features.feature7.detailTitle,
      description: t.features.feature7.description,
      clinicalImpact: t.features.feature7.clinicalImpact,
      visualCue: t.features.feature7.visualCue
    },
    {
      title: t.features.feature8.title,
      text: t.features.feature8.text,
      image: "/images/RESEARCH.jpg",
      detailTitle: t.features.feature8.detailTitle,
      description: t.features.feature8.description,
      clinicalImpact: t.features.feature8.clinicalImpact,
      visualCue: t.features.feature8.visualCue
    },
    {
      title: t.features.feature9.title,
      text: t.features.feature9.text,
      image: "/images/CLOUD_BASED_ENCRYPTION.png",
      detailTitle: t.features.feature9.detailTitle,
      description: t.features.feature9.description,
      clinicalImpact: t.features.feature9.clinicalImpact,
      visualCue: t.features.feature9.visualCue
    }
  ];

  const handleShowDetails = (feature: typeof features[0]) => {
    setSelectedFeature(feature);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

  return (
    <section className={styles.outer}>
      <div className={styles.decorative} />
      <Container fluid className="px-0">
        <Container className="py-5">
          <div className={styles.headingRow} data-aos="fade-right">
            <div className={styles.accentBar} />
            <h2 className="display-5 fw-bold text-primary mb-0">{t.features.title}</h2>
          </div>

          <Row className="g-4">
            {features.map((f, i) => (
              <Col xs={12} md={6} lg={4} key={i} data-aos="zoom-in" data-aos-delay={i * 50}>
                <Card className={styles.card} onClick={() => handleShowDetails(f)} style={{ cursor: 'pointer' }}>
                  <div className={styles.badge}>{i + 1}</div>
                  <Card.Img variant="top" src={f.image} alt={f.title} className={styles.cardImg} />
                  <Card.Body>
                    <Card.Title className={styles.title}>{f.title}</Card.Title>
                    <Card.Text className={styles.desc}>{f.text}</Card.Text>
                    <div className={styles.buttonContainer}>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowDetails(f);
                        }}
                      >
                        {t.features.learnMore}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        size="lg"
        className={styles.featureModal}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            {selectedFeature?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {selectedFeature && (
            <>
              <img 
                src={selectedFeature.image} 
                alt={selectedFeature.title} 
                className={styles.modalImage}
              />
              
              <div className={styles.detailSection}>
                <h5 className={styles.sectionLabel}>Description:</h5>
                <p className={styles.sectionContent}>{selectedFeature.description}</p>
              </div>
              
              {selectedFeature.clinicalImpact && (
                <div className={styles.detailSection}>
                  <h5 className={styles.sectionLabel}>Clinical Impact:</h5>
                  <p className={styles.sectionContent}>{selectedFeature.clinicalImpact}</p>
                </div>
              )}
              
              {selectedFeature.visualCue && (
                <div className={styles.detailSection}>
                  <h5 className={styles.sectionLabel}>Visual Cue:</h5>
                  <p className={styles.sectionContent}>{selectedFeature.visualCue}</p>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button variant="secondary" onClick={handleCloseModal}>
            {t.features.close}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
=======
import { Box, Typography, Grid, Paper,useMediaQuery } from "@mui/material";
import theme from "../theme"

const features = [
  {
    title: "AI-Assisted Speech to Text",
    text: "Saves time by eliminating paperwork in a unified EMR. Reduces manual report filling and clinician stress.",
    image:"/images/SPTT.jpg"
  },
  {
    title: "AI Diagnostics & Support Chat-Bot",
    text: "Reduces misdiagnosis, detects rare fatal cases early, and saves valuable time.",
    image:"/images/CHATBOTASSI.jpg"
  },
  {
    title: "Labs & Imaging Integration",
    text: "Unified platform with QR patient tracking. Patients upload lab images directly, analyzed with AI.",
    image:"/images/LABSINTEG.jpg"
  },
  {
    title: "One-Click Data Collection",
    text: "Extract entire databases instantly based on inclusion/exclusion criteria.",
    image:"/images/ONE_CLICK_DATA_COLLECTION_2.png"
  },
  {
    title: "Latest Articles Updates",
    text: "Daily specialty-based medical papers from prestigious journals delivered automatically.",
    image:"/images/LATESTARTICLES.jpg"
  },
  {
    title: "Administrative Automation",
    text: "AI handles scheduling, billing, reporting, and communication to reduce workload.",
    image:"/images/MANAGEMENTSYS.jpg"
  },
  {
    title: "Auditing",
    text: "Improves compliance and reduces errors across all operations.",
    image:"/images/AUDITING.jpg"
  },
  {
    title: "Clinical Impact",
    text: "AI partner assists diagnosis, research, and optimizes the standard of care.",
    image:"/images/RESEARCH.jpg"
  },
  {
    title: "Cloud-Based Encryption",
    text: "Ensures data protection, compliance, and strengthens patient trust.",
    image:"/images/CLOUD_BASED_ENCRYPTION.png"
  }
];

export default function Features() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight={700} color="primary" sx={{ mb: 4 }}>
        Features
      </Typography>

      <Grid container spacing={3}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: "100%",alignItems: 'center' }}>
              <img 
            src=
             {f.image}
            
            height="200" width="400" 
          />
              <Typography variant="h5" fontWeight={600} color="secondary">
                {f.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {f.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
>>>>>>> 7abb2ecb50083425128a58655eefd31f150c8f87
  );
}

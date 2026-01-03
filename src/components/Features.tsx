import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import styles from "./Features.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function Features() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const modalBodyRef = useRef<HTMLDivElement>(null);

  // Build features array from translations
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

  const handleShowDetails = (feature: any, index: number) => {
    setSelectedFeature(feature);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
    setCurrentIndex(newIndex);
    setSelectedFeature(features[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedFeature(features[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showModal) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (modalBodyRef.current) {
          modalBodyRef.current.scrollBy({ top: -100, behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (modalBodyRef.current) {
          modalBodyRef.current.scrollBy({ top: 100, behavior: 'smooth' });
        }
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal, currentIndex, features, handleNext, handlePrevious]);

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
                <Card className={styles.card} onClick={() => handleShowDetails(f, i)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={f.image} alt={f.title} className={styles.cardImg} />
                  <Card.Body>
                    <Card.Title className={styles.title}>{f.title}</Card.Title>
                    <Card.Text className={styles.desc}>{f.text}</Card.Text>
                    <div className={styles.buttonContainer}>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className={styles.detailsButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowDetails(f, i);
                        }}
                      >
                        {t.features.learnMore} →
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
        <div className={styles.modalWrapper}>
          <button 
            className={styles.navArrow + ' ' + styles.navArrowLeft}
            onClick={handlePrevious}
            aria-label="Previous feature"
          >
            ‹
          </button>
          <button 
            className={styles.navArrow + ' ' + styles.navArrowRight}
            onClick={handleNext}
            aria-label="Next feature"
          >
            ›
          </button>
          <Modal.Header closeButton className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>
              {selectedFeature?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody} ref={modalBodyRef}>
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
        </div>
      </Modal>
    </section>
  );
}

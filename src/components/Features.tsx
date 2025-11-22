import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import styles from "./Features.module.css";
import "../styles/variables.css";

const features = [
  {
    title: "AI-Assisted Speech to Text",
    text: "Saves time by eliminating paperwork in a unified EMR. Reduces manual report filling and clinician stress.",
    image: "/images/SPTT.jpg",
    detailTitle: "Dictate patient notes naturally; let AI handle the documentation.",
    description: "Physicians can speak freely during consultations while Quantum Vita's AI converts speech into structured, editable medical notes in real-time. It recognizes medical terminology, abbreviations, and context, automatically organizing notes by history, examination, assessment, and plan.",
    clinicalImpact: "Saves hours per week, reduces errors, enhances note completeness, and ensures records are ready for audits or research.",
    visualCue: "Microphone icon → text conversion → structured EMR record."
  },
  {
    title: "AI Diagnostics & Support Chat-Bot",
    text: "Reduces misdiagnosis, detects rare fatal cases early, and saves valuable time.",
    image: "/images/CHATBOTASSI.jpg",
    detailTitle: "Your AI assistant that reviews, advises, and learns.",
    description: "The chatbot analyzes patient history, labs, imaging, and prior interventions to suggest diagnoses, differential considerations, and guideline-based recommendations. It answers clinical queries, flags abnormal results, and evolves with each doctor interaction.",
    clinicalImpact: "Improves decision-making, reduces cognitive load, enhances patient safety, and provides a second expert review at the point of care.",
    visualCue: "Chat bubble icon with lab/image overlay → AI suggestions."
  },
  {
    title: "Labs & Imaging Integration",
    text: "Unified platform with QR patient tracking. Patients upload lab images directly, analyzed with AI.",
    image: "/images/LABSINTEG.jpg",
    detailTitle: "Centralize and visualize all diagnostic data seamlessly.",
    description: "Labs and imaging are integrated directly into patient records via uploads, digital imports, or QR scans. Abnormal results are flagged, trends tracked, and visual graphs generated. Data is structured for easy retrieval, research, or audits.",
    clinicalImpact: "Faster diagnosis, better monitoring, data-driven treatment planning, and reduced report loss.",
    visualCue: "Lab vial + imaging icon → EMR dashboard → trends/graphs."
  },
  {
    title: "One-Click Data Collection",
    text: "Extract entire databases instantly based on inclusion/exclusion criteria.",
    image: "/images/ONE_CLICK_DATA_COLLECTION_2.png",
    detailTitle: "Turn every patient visit into research-ready data.",
    description: "All encounter details—including demographics, vitals, labs, imaging, and medications—are captured instantly in structured formats. Supports inclusion/exclusion criteria and auto-generates datasets for analytics or studies.",
    clinicalImpact: "Enables clinics to function as research centers, simplifies study participation, and facilitates evidence-based improvements.",
    visualCue: "Single click button → organized dataset icon."
  },
  {
    title: "Latest Articles Updates",
    text: "Daily specialty-based medical papers from prestigious journals delivered automatically.",
    image: "/images/LATESTARTICLES.jpg",
    detailTitle: "Stay current without leaving your EMR.",
    description: "Quantum Vita delivers filtered medical literature, journal updates, and guideline changes directly into the platform. Summaries highlight key insights for fast review, with links to full articles.",
    clinicalImpact: "Ensures evidence-based decisions, continuous learning, and keeps clinicians aligned with evolving best practices.",
    visualCue: "Book/journal icon → alert/notification → update badge."
  },
  {
    title: "Administrative Automation",
    text: "AI handles scheduling, billing, reporting, and communication to reduce workload.",
    image: "/images/MANAGEMENTSYS.jpg",
    detailTitle: "Streamline clinic workflows and reduce paperwork.",
    description: "Automates scheduling, reminders, insurance forms, and electronic consents. Staff workflows are prioritized with notifications, reducing errors and delays.",
    clinicalImpact: "Saves staff and doctor time, improves patient flow, and allows clinicians to focus on care rather than administration.",
    visualCue: "Calendar + gears → automated flowchart."
  },
  {
    title: "Auditing",
    text: "Improves compliance and reduces errors across all operations.",
    image: "/images/AUDITING.jpg",
    detailTitle: "Track every action for compliance and quality assurance.",
    description: "Logs all clinical and administrative actions with timestamps and user IDs. Dashboards highlight patterns, deviations, and workflow bottlenecks. Supports regulatory audits, quality control, and risk management.",
    clinicalImpact: "Ensures compliance, enhances quality, protects against medico-legal risk, and validates clinical research.",
    visualCue: "Clipboard/checklist icon → flow of actions → analytics chart."
  },
  {
    title: "Clinical Impact",
    text: "AI partner assists diagnosis, research, and optimizes the standard of care.",
    image: "/images/RESEARCH.jpg",
    detailTitle: "Measure outcomes and optimize patient care.",
    description: "Tracks patient responses to interventions, lab trends, vital changes, and complications. Correlation analytics identify which treatments work best for specific patient groups, informing data-driven care improvements.",
    clinicalImpact: "Enables evidence-based practice optimization, personalized treatment planning, and resource allocation.",
    visualCue: "Bar chart + patient icon → trend arrows → optimized care path."
  },
  {
    title: "Cloud-Based Encryption",
    text: "Ensures data protection, compliance, and strengthens patient trust.",
    image: "/images/CLOUD_BASED_ENCRYPTION.png",
    detailTitle: "Secure, compliant access to patient data anytime, anywhere.",
    description: "Patient records are stored on encrypted cloud servers with HIPAA/GDPR compliance. Role-based access, multi-level authentication, and audit logs ensure security while allowing collaboration across devices.",
    clinicalImpact: "Safeguards patient privacy, enables real-time access, and supports secure multi-device workflows.",
    visualCue: "Cloud lock icon → multi-device access → shield/secure badge."
  }
];

export default function Features() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

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
            <h2 className="display-5 fw-bold text-primary mb-0">Features</h2>
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
                        className={styles.detailsButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowDetails(f);
                        }}
                      >
                        Learn More →
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
              
              {selectedFeature.detailTitle && (
                <div className={styles.detailSection}>
                  <h5 className={styles.sectionLabel}>Title:</h5>
                  <p className={styles.sectionContent}>{selectedFeature.detailTitle}</p>
                </div>
              )}
              
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
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

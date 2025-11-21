import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from "./Features.module.css";
import "../styles/variables.css";

const features = [
  {
    title: "AI-Assisted Speech to Text",
    text: "Saves time by eliminating paperwork in a unified EMR. Reduces manual report filling and clinician stress.",
    image: "/images/SPTT.jpg"
  },
  {
    title: "AI Diagnostics & Support Chat-Bot",
    text: "Reduces misdiagnosis, detects rare fatal cases early, and saves valuable time.",
    image: "/images/CHATBOTASSI.jpg"
  },
  {
    title: "Labs & Imaging Integration",
    text: "Unified platform with QR patient tracking. Patients upload lab images directly, analyzed with AI.",
    image: "/images/LABSINTEG.jpg"
  },
  {
    title: "One-Click Data Collection",
    text: "Extract entire databases instantly based on inclusion/exclusion criteria.",
    image: "/images/ONE_CLICK_DATA_COLLECTION_2.png"
  },
  {
    title: "Latest Articles Updates",
    text: "Daily specialty-based medical papers from prestigious journals delivered automatically.",
    image: "/images/LATESTARTICLES.jpg"
  },
  {
    title: "Administrative Automation",
    text: "AI handles scheduling, billing, reporting, and communication to reduce workload.",
    image: "/images/MANAGEMENTSYS.jpg"
  },
  {
    title: "Auditing",
    text: "Improves compliance and reduces errors across all operations.",
    image: "/images/AUDITING.jpg"
  },
  {
    title: "Clinical Impact",
    text: "AI partner assists diagnosis, research, and optimizes the standard of care.",
    image: "/images/RESEARCH.jpg"
  },
  {
    title: "Cloud-Based Encryption",
    text: "Ensures data protection, compliance, and strengthens patient trust.",
    image: "/images/CLOUD_BASED_ENCRYPTION.png"
  }
];

export default function Features() {
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
                <Card className={styles.card}>
                  <div className={styles.badge}>{i + 1}</div>
                  <Card.Img variant="top" src={f.image} alt={f.title} className={styles.cardImg} />
                  <Card.Body>
                    <Card.Title className={styles.title}>{f.title}</Card.Title>
                    <Card.Text className={styles.desc}>{f.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

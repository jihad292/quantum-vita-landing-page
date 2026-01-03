import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Aim.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function Aim() {
  const { t } = useTranslation();
  
  // Helper function to render text with highlighted keywords
  const renderHighlightedText = (text: string, highlights: { phrase: string; color: string; weight: number }[]) => {
    let result: any[] = [];
    let remainingText = text;
    let key = 0;

    highlights.forEach(({ phrase, color, weight }) => {
      const index = remainingText.indexOf(phrase);
      if (index !== -1) {
        // Add text before highlight
        if (index > 0) {
          result.push(remainingText.substring(0, index));
        }
        // Add highlighted text
        result.push(
          <strong key={key++} style={{ color: `var(${color})`, fontWeight: weight }}>
            {phrase}
          </strong>
        );
        remainingText = remainingText.substring(index + phrase.length);
      }
    });
    
    // Add remaining text
    if (remainingText) {
      result.push(remainingText);
    }
    
    return result;
  };
  
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
                <p className="fs-5 mb-4" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                  {renderHighlightedText(t.aim.paragraph1, [
                    { phrase: t.aim.paragraph1.includes('revolutionize') ? 'revolutionize healthcare' : t.aim.paragraph1.includes('révolutionner') ? 'révolutionner les soins de santé' : 'إحداث ثورة في الرعاية الصحية', color: '--primary', weight: 700 },
                    { phrase: t.aim.paragraph1.includes('faster, safer') ? 'faster, safer, and more accurate' : t.aim.paragraph1.includes('plus rapides, plus sûrs') ? 'plus rapides, plus sûrs et plus précis' : 'أسرع وأكثر أمانًا ودقة', color: '--info', weight: 600 }
                  ])}
                </p>
                <p className="fs-5 mb-4" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                  {renderHighlightedText(t.aim.paragraph2, [
                    { phrase: t.aim.paragraph2.includes('Intelligent EMR') ? 'Intelligent EMR systems' : t.aim.paragraph2.includes('systèmes DME') ? 'Les systèmes DME intelligents' : 'أنظمة السجلات الطبية الإلكترونية الذكية', color: '--primary', weight: 700 },
                    { phrase: t.aim.paragraph2.includes('smarter and more informed') ? 'smarter and more informed' : t.aim.paragraph2.includes('plus intelligente et plus éclairée') ? 'plus intelligente et plus éclairée' : 'أكثر ذكاءً واستنارة', color: '--info', weight: 600 },
                    { phrase: t.aim.paragraph2.includes('shaping the future') ? 'shaping the future' : t.aim.paragraph2.includes('façonne l\'avenir') ? 'façonne l\'avenir' : 'يشكل مستقبل', color: '--primary', weight: 700 }
                  ])}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

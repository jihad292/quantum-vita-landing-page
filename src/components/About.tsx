import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.module.css";
import "../styles/variables.css";
import { useTranslation } from '../contexts/TranslationContext';

export default function About() {
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
              <p className="fs-5 mb-4" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                {renderHighlightedText(t.about.paragraph1, [
                  { phrase: t.about.paragraph1.includes('key problem') ? 'key problem in modern healthcare' : t.about.paragraph1.includes('problème clé') ? 'problème clé dans les soins de santé modernes' : 'مشكلة رئيسية في الرعاية الصحية الحديثة', color: '--primary', weight: 700 },
                  { phrase: t.about.paragraph1.includes('fragmented') ? 'fragmented software' : t.about.paragraph1.includes('fragmentés') ? 'logiciels fragmentés' : 'البرامج المجزأة', color: '--info', weight: 600 }
                ])}
              </p>
              
              <p className="fs-5 mb-4" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                {renderHighlightedText(t.about.paragraph2, [
                  { phrase: t.about.paragraph2.includes('real clinical') ? 'real clinical workflows' : t.about.paragraph2.includes('véritables flux') ? 'véritables flux de travail cliniques' : 'سير العمل السريري الحقيقي', color: '--primary', weight: 700 },
                  { phrase: t.about.paragraph2.includes('AI-powered') ? 'AI-powered documentation' : t.about.paragraph2.includes('assistée par IA') ? 'documentation assistée par IA' : 'التوثيق المدعوم بالذكاء الاصطناعي', color: '--info', weight: 600 },
                  { phrase: t.about.paragraph2.includes('one secure') ? 'one secure system' : t.about.paragraph2.includes('système sécurisé') ? 'un système sécurisé' : 'نظام آمن واحد', color: '--primary', weight: 700 }
                ])}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}


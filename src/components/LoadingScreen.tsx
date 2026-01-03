import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.logoContainer}>
        <img 
          src="/images/quantum-vita-logo.svg" 
          alt="Quantum Vita Logo" 
          className={styles.logo}
        />
        <div className={styles.spinner}></div>
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
}

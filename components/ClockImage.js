import { useState, useEffect } from 'react';
import styles from '../styles/ClockImage.module.css';

const ClockImage = ({ url, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  
  // Try different URL variations to find one that works
  useEffect(() => {
    // Reset states
    setLoaded(false);
    setError(false);
    
    // Images from wikia can be problematic due to CORS, try different approaches
    // First try the original URL with parameters removed
    const baseUrl = url.split('?')[0];
    
    // Use our Next.js API route as a proxy
    const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(baseUrl)}`;
    
    // Use the proxy URL to avoid CORS issues
    setCurrentUrl(proxyUrl);
    
    // Note: In a full production app, we'd need a proper CORS proxy service
    // or server-side image fetching to guarantee these images load
  }, [url]);
  
  const handleError = () => {
    setError(true);
    setLoaded(true); // Still mark as loaded so it doesn't show loading indefinitely
  };
  
  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };
  
  return (
    <div className={styles.imageWrapper}>
      {!loaded && <div className={styles.loading}>Loading image...</div>}
      
      {error && (
        <div className={styles.error}>
          <p>Failed to load image</p>
          <p className={styles.errorSubtext}>The image might be unavailable or blocked by CORS policy</p>
          <p className={styles.errorUrl}>{url.split('/').pop()}</p>
        </div>
      )}
      
      <img
        src={currentUrl}
        alt={alt}
        className={`${styles.image} ${loaded && !error ? styles.visible : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default ClockImage;
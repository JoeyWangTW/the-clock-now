import styles from '../styles/ClockDisplay.module.css';
import ClockImage from './ClockImage';

// Extract film title from filename (e.g., "Rear Window 1.54 a.m.png" -> "Rear Window")
const extractFilmTitle = (filename) => {
  // Match everything before the first number (which should be the time)
  const match = filename.match(/^(.*?)(\d+\.\d+)/);
  return match ? match[1].trim() : filename;
};

export default function ClockDisplay({ entry }) {
  if (!entry) {
    return (
      <div className={styles.noEntry}>
        <p>No clock image available for {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p className={styles.noEntrySubtext}>The collection may not have an image for this exact minute</p>
      </div>
    );
  }

  const filmTitle = extractFilmTitle(entry.file_name);

  return (
    <div className={styles.fullscreenContainer}>
      <ClockImage 
        url={entry.url}
        alt={`Clock from ${filmTitle} showing ${entry.time}`}
      />
    </div>
  );
}
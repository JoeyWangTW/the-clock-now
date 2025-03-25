import { useEffect, useState } from 'react';
import Head from 'next/head';
import Papa from 'papaparse';
import ClockDisplay from '../components/ClockDisplay';
import styles from '../styles/Home.module.css';

// Extract film title from filename (e.g., "Rear Window 1.54 a.m.png" -> "Rear Window")
const extractFilmTitle = (filename) => {
  // Match everything before the first number (which should be the time)
  const match = filename.match(/^(.*?)(\d+\.\d+)/);
  return match ? match[1].trim() : filename;
};

export default function Home() {
  const [clockData, setClockData] = useState([]);
  const [currentTime, setCurrentTime] = useState('');
  const [currentEntry, setCurrentEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [matchingEntries, setMatchingEntries] = useState([]);

  // Load the CSV data
  useEffect(() => {
    fetch('/clock_entries.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setClockData(results.data);
            setLoading(false);
          }
        });
      })
      .catch(error => {
        console.error('Error loading clock data:', error);
        setLoading(false);
      });
  }, []);

  // Find all matching entries for the current time
  useEffect(() => {
    const updateMatchingEntries = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      setCurrentTime(timeString);
      
      // Find all matching entries for current time (same minute)
      if (clockData.length > 0) {
        const matches = clockData.filter(entry => entry.time === timeString);
        setMatchingEntries(matches);
        
        if (matches.length === 0) {
          // No match for current time
          setCurrentEntry(null);
        } else if (matches.length === 1 || !currentEntry) {
          // Only one match, or we don't have a current entry yet
          setCurrentEntry(matches[0]);
        } else if (timeString !== currentTime) {
          // Time has changed - select a new random entry
          const randomIndex = Math.floor(Math.random() * matches.length);
          setCurrentEntry(matches[randomIndex]);
        }
        // If multiple matches and we already have an entry, keep it until the rotation interval
      }
    };

    // Run immediately
    updateMatchingEntries();
    
    // Then run every second to check for minute changes
    const interval = setInterval(updateMatchingEntries, 1000);
    
    return () => clearInterval(interval);
  }, [clockData, currentEntry, currentTime]);
  
  // Rotate through multiple images for the same minute
  useEffect(() => {
    // If we have multiple images for the current time, rotate between them
    if (matchingEntries.length > 1) {
      const rotateInterval = setInterval(() => {
        // Randomly select a different image than the current one
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * matchingEntries.length);
        } while (matchingEntries.length > 1 && matchingEntries[newIndex] === currentEntry);
        
        setCurrentEntry(matchingEntries[newIndex]);
      }, 5000); // Change image every 5 seconds
      
      return () => clearInterval(rotateInterval);
    }
  }, [matchingEntries, currentEntry]);

  return (
    <div className={styles.fullscreen}>
      <Head>
        <title>The Clock Now</title>
        <meta name="description" content="Real-time viewer for Christian Marclay's The Clock" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {loading ? (
        <div className={styles.loadingContainer}>
          <p className={styles.loading}>Loading clock data...</p>
        </div>
      ) : (
        <>
          <ClockDisplay entry={currentEntry} />
          
          <div className={styles.timeOverlay}>
            <p className={styles.currentTime}>{currentTime}</p>
            {currentEntry && (
              <>
                <p className={styles.filmTitle}>
                  {extractFilmTitle(currentEntry.file_name)}
                </p>
                {matchingEntries.length > 1 && (
                  <p className={styles.imageCount}>
                    {matchingEntries.indexOf(currentEntry) + 1} of {matchingEntries.length}
                  </p>
                )}
              </>
            )}
          </div>
          
          <div className={styles.creditOverlay}>
            <p>Based on Christian Marclay's "The Clock" (2010)</p>
            <p>
              Images collected by <a href="https://theclock.fandom.com/wiki/User:ElevenFiftyNine" target="_blank" rel="noopener noreferrer">ElevenFiftyNine</a>, 
              <a href="https://theclock.fandom.com/wiki/The_Clock_Wiki" target="_blank" rel="noopener noreferrer">The Clock Wiki</a> (CC BY-SA)
            </p>
          </div>
        </>
      )}
    </div>
  );
}
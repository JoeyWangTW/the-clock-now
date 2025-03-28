import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | The Clock Now</title>
        <meta name="description" content="About Christian Marclay's The Clock - A 24-hour video artwork that tells time through cinema clips. Learn about this fascinating project and how this website displays these moments in real-time." />
        <meta name="keywords" content="Christian Marclay, The Clock, video art, cinema, art installation, time" />
        <meta property="og:title" content="About | The Clock Now" />
        <meta property="og:description" content="Real-time viewer for Christian Marclay's The Clock artwork - displaying film moments that show the actual time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theclocknow.vercel.app/about" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About | The Clock Now" />
        <meta name="twitter:description" content="Real-time viewer for Christian Marclay's The Clock artwork - displaying film moments that show the actual time." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://theclocknow.vercel.app/about" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>About The Clock</h1>
        <Link href="/" className={styles.homeLink}>
          Return to Clock
        </Link>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Artwork</h2>
        <p className={styles.paragraph}>
          "The Clock" is a 24-hour video art installation created by Christian Marclay in 2010. It's a montage of 
          thousands of film and television clips that feature clocks, watches, or time references. Each clip is 
          synchronized to show the actual time when viewed, creating a functioning timepiece that also serves 
          as a compelling work of art.
        </p>
        <p className={styles.paragraph}>
          The installation has been exhibited at major art institutions worldwide, including the Museum of 
          Modern Art in New York, the Centre Pompidou in Paris, and the Tate Modern in London. It won the 
          Golden Lion award at the 2011 Venice Biennale.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>This Website</h2>
        <p className={styles.paragraph}>
          The Clock Now is a web application that displays stills from Marclay's "The Clock" that correspond 
          to the current time. While it cannot replicate the full experience of the original 24-hour video 
          installation, it offers a glimpse into the project by showing film moments that feature the exact time.
        </p>
        <p className={styles.paragraph}>
          When multiple images are available for a particular minute, the site will rotate through them, showing 
          the variety of cinematic moments Marclay compiled for each time of day.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Image Collection</h2>
        <p className={styles.paragraph}>
          The images displayed on this site were collected and organized by ElevenFiftyNine on 
          <a href="https://theclock.fandom.com/wiki/The_Clock_Wiki" target="_blank" rel="noopener noreferrer" className={styles.link}> The Clock Wiki</a>. 
          This valuable resource documents many of the film moments featured in "The Clock" and is made available 
          under a Creative Commons Attribution-ShareAlike license (CC BY-SA).
        </p>
        <p className={styles.paragraph}>
          This project is not affiliated with Christian Marclay or the official distributors of "The Clock," and 
          is intended as an educational resource and homage to the original artwork.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience the Full Artwork</h2>
        <p className={styles.paragraph}>
          To experience "The Clock" in its complete form, we encourage you to visit an official exhibition. 
          The full impact of the work—including its sound design, motion, and cumulative effect over extended 
          viewing—can only be appreciated in person.
        </p>
        <p className={styles.paragraph}>
          Check museum websites and art publications for information about upcoming exhibitions of "The Clock" 
          in your area.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>
          This site is maintained as an educational resource. All film images are copyright of their respective 
          owners. "The Clock" concept and compilation © Christian Marclay.
        </p>
      </footer>
    </div>
  );
}
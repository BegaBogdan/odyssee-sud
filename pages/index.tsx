import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="#">Destinations</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Odyssée Sud Logo" width={60} height={60} />
          <h1 className={styles.title}>Odyssée Sud</h1>
        </div>
        <h2 className={styles.subtitle}>Explore the world at your own pace</h2>
        <p className={styles.description}>
          Unique journeys that blend travel with personal growth
        </p>
        <button className={styles.cta}>View Destinations</button>
      </header>

      <main className={styles.main}>
        <section className={styles.grid}>
          <div className={styles.card}>
            <h3>BALI</h3>
            <Image src="/bali.png" alt="Bali" width={300} height={200} />
          </div>
          <div className={styles.card}>
            <h3>MALDIVES</h3>
            <Image src="/maldives.png" alt="Maldives" width={300} height={200} />
          </div>
          <div className={styles.card}>
            <h3>MOROCCO</h3>
            <Image src="/morocco.png" alt="Morocco" width={300} height={200} />
          </div>
        </section>
      </main>
    </div>
  );
}

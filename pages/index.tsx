
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="#">Destinations</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Odyssee Sud Logo" />
      </div>
      <h1 className={styles.title}>Explore the world at your own price</h1>
      <p className={styles.subtitle}>Unique journeys that blend travel with personal growth</p>
      <button className={styles.viewButton}>View Destinations</button>
      <div className={styles.buttons}>
        <button className={styles.option}>Europe</button>
        <button className={styles.option}>Rest of the World</button>
      </div>
    </div>
  );
}

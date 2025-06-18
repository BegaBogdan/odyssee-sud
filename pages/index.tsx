
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a href="#">Destinations</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <header className={styles.header}>
        <Image src={logo} alt="Odyssée Sud Logo" className={styles.logo} />
        <h1 className={styles.title}>Explore the world<br />at your own pace</h1>
        <p className={styles.subtitle}>Unique journeys that blend travel<br />with personal growth</p>
        <button className={styles.viewBtn}>VIEW DESTINATIONS</button>
        <div className={styles.buttons}>
          <button className={styles.btnEurope}>EUROPE</button>
          <button className={styles.btnWorld}>REST OF THE WORLD</button>
        </div>
      </header>
    </div>
  );
}

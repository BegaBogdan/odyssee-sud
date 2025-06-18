import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Odyssée Sud</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <a href="#">Destinations</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <Image src={logo} alt="Odyssée Sud Logo" width={120} height={120} />
          <h1 className={styles.title}>Explore the world<br />at your own pace</h1>
          <p className={styles.subtitle}>
            Unique journeys that blend travel<br />with personal growth
          </p>
          <button className={styles.cta}>VIEW DESTINATIONS</button>
          <div className={styles.buttons}>
            <button className={styles.orange}>EUROPE</button>
            <button className={styles.orange}>REST OF THE WORLD</button>
          </div>
        </header>
      </div>
    </>
  );
}

import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <h1>Herb ID</h1>
      <p>Scan your plants now</p>
      <Link href="/plantinfo">Get Info Now</Link>

      <Link href="/qrcode">QR Code</Link>

      <div className={styles.hero_container}>
        <div className={styles.overlay}></div>
        <div className={styles.image}>
          <img src="/Images/Hero1.jpg" alt="" />
        </div>
        {/* <img src="/Images/Hero5.jpg" alt="" /> */}
        <section className={styles.text_section}>
          <h1>
            Creating Brands <br /> That actually gets <br /> attention
          </h1>
          <section className={styles.welcome_text}>
            <hr />
            <p>
              Connecting Brands with Engaging Stories. <br /> Welcome to Stories
              Arabia
            </p>
          </section>
        </section>
      </div>
    </>
  );
}

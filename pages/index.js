import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <h1>Herb ID</h1>
      <p>Scan your plants now</p>
      <Link href="/plantinfo">Get Info Now</Link>

      <Link href="/qrcode">QR Code</Link>

      {/* first section */}
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

     {/* second section */}
      <div className={styles.Services}>
        <div className={styles.service_container}>
          <hr />
          <h4>Our Services</h4>
          <h1>A ONE-STOP SITE FOR ALL YOUR DIGITAL MARKETING NEEDS.</h1>
        </div>
        <section className={styles.services_list}>
          <section className={styles.services_quote}>
            <hr />
            <h4>Your Perfect Brand</h4>
          </section>
          <section className={styles.services_list1}>
            <hr />
            <ul>
              <li>
                {" "}
                <p>Video Production</p>{" "}
              </li>
              <li>
                <hr />
                <p>Public Relations</p>{" "}
              </li>
              {/* <li>
                <hr />
                <p>Website Design</p>
              </li> */}
            </ul>
          </section>
          <section className={styles.services_list2}> 
            <hr />
            <ul>
              <li>
                {" "}
                <p>Digital Marketing</p>{" "}
              </li>
              {/* <li>
                {" "}
                <hr />
                <p>Publicity</p>{" "}
              </li> */}
              {/* <li>
                <hr />
                <p>Website Management</p>
              </li> */}
            </ul>
          </section>
        </section>
      </div>  


      {/* Third section */}
      {/* <div className={styles.contact_section}>
        <div className={styles.overlay}>
          <section className={styles.about_section}>
            <section className={styles.about_flex}>
              <div className={styles.about_left}>
                <hr />
                <h1>About Us</h1>
              </div>
              <div className={styles.about_right}>
                <p>
                  Welcome to Stories Arabia, your premier digital marketing
                  partner! We craft compelling narratives that drive results.
                  Let us tell your brand story together.
                </p>
              </div>
            </section>
          </section>
          <section className={styles.clients_number}>
            <section className={styles.empty_div}></section>
            <section className={styles.clients_detials}>
              <hr />
              <h2>30+</h2>
              <h6>Happy clients</h6>
              <p>Public Relation & Digital Marketing</p>
            </section>
          </section>
          <section className={styles.contact_card}>
            <section className={styles.contact_card_left}>
              <hr />
              <h2> 10+ </h2>
              <h6>Years</h6>
              <p>Experienced Members</p>
            </section>
            <section className={styles.contact}>
            <h1>About us</h1>
            <p>Turning ideas into creative brands <br /> since 2020</p>
          </section>
          </section>
        </div>
      </div> */}


      fourth section
    </>
  );
}

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
      <div className={styles.gallary}>
        <hr />
        <h2>Our Gallary</h2>
        <div className={styles.grid_wrapper}>
          <div>
            <img
              src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/7661135/pexels-photo-7661135.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className={styles.tall}>
            <img
              src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5998240/pexels-photo-5998240.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* <div className={styles.big}>
            <img
              src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
              alt=""
            />
          </div> */}
          <div className={styles.tall}>
            <img
              src="https://images.pexels.com/photos/1586145/pexels-photo-1586145.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1586145/pexels-photo-1586145.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
              alt=""
            />
          </div>
          <div className={styles.wide}>
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div> */}
        </div>
        <section className={styles.social_media}>
          <hr />
          <p>Follow us on social media</p>
          <h1>
            Stay up to date with the latest news, announcements and events.
          </h1>
          <section className={styles.social}>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.instagram.com/storiesarabia/?hl=en" target="_blank">
                  Instagram
                </a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.facebook.com/storiesarabia/" target="_blank">Facebook</a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://twitter.com/storiesarabia?lang=en" target="_blank">Twitter</a>
              </section>
            </div>
            <div className={styles.link}>
              <hr />
              <section className={styles.inner_link}>
                <a href="https://www.linkedin.com/company/storiesarabia/" target="_blank">
                  Linkedin
                </a>
              </section>
            </div>
          </section>
        </section>
      </div>

      {/* fourth section */}
      
    </>
  );
}

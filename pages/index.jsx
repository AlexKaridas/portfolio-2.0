import styles from "../styles/Home.module.scss";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [setLoading, Loading] = useState(false);

  function emailSend(e) {
    setLoading == false;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfkdunp",
        "template_6noefyc",
        e.target,
        "5S8-jt1__8bOE1h2-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading == true;
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    if (Loading === false) {
      window.alert(error);
    } else {
      window.alert("Message has been sent.");
    }
  }

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className={styles.main}>
      <div className={styles.navBar}>
        <div className={styles.leftNav} data-aos="fade-up">
          <h3>
            <Link href="https://github.com/AlexKaridas?tab=repositories">
              WORKS
            </Link>
          </h3>
          <h3>CONTACT</h3>
        </div>
        <div className={styles.logo} data-aos="fade-up">
          Alex Karidas
        </div>
        <div className={styles.rightNav} data-aos="fade-up">
          <ul>
            <li id={"moon"}>
              <button
                aria-label="dark mode button"
                role="presentation"
                onClick={() => setTheme("dark") && setMounted(true)}
              >
                <i className={"fas fa-moon"} />
              </button>
            </li>
            <li id={"sun"}>
              <button
                aria-label="light mode button"
                role="presentation"
                onClick={() => setTheme("light") && setMounted(false)}
              >
                <i className={"fas fa-sun"} />
              </button>
            </li>
            <li>
              <Link href="https://github.com/AlexKaridas">
                <i className={"fab fa-github"}></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/alex-karidas-1a6b4021a/">
                <i className={"fab fa-linkedin"}></i>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/AlexKaridas">
                <i className={"fab fa-twitter"}></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.titleContainer} data-aos="fade-up">
        <h1 className={styles.title}>Front-End Developer based in Greece</h1>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.leftContainer}>
          <h3 data-aos="fade-up">Biography</h3>
          <h4 id={styles.biographyText} data-aos="fade-up">
            I am a web developer based in Greece with a passion for programming
            and learning.
          </h4>

          <div className={styles.skills} data-aos="fade-up">
            <h3 id={styles.skills} data-aos="fade-up">
              Skills
            </h3>
            <h4>HTML5</h4>
            <h4>CSS</h4>
            <h4>JAVASCRIPT</h4>
            <h4>REACT JS</h4>
            <h4>NEXT JS</h4>
            <h4>SASS</h4>
            <h4>TAILWIND</h4>
            <h4>FIGMA</h4>
            <h4>GIT</h4>
          </div>
        </div>

        <div className={styles.frameOfMainPicture} data-aos="fade-up">
          <Image
            fill={true}
            placeholder="empty"
            src="/profile.jpg"
            alt="Profile Photo"
            priority={true}
            data-aos="fade-up"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.rightContainer} data-aos="fade-up">
          <h3>SERVICES</h3>
          <div className={styles.services} data-aos="fade-up">
            <h4>Website Development</h4>
            <h4>Website Design</h4>
          </div>
          <div className={styles.languages} data-aos="fade-up">
            <h3 id={styles.languages}>Languages</h3>
            <h4>Greek</h4>
            <h4>English</h4>
          </div>
        </div>
      </div>
      <div className={styles.contact} data-aos="fade-up">
        <div className={styles.contactText}>
          <h2>Contact</h2>
          <h3>Have any problem to solve? </h3>
          <h3>Maybe a new website? </h3>
          <h3>Contact me.</h3>
          <hr />
          <div className={styles.social_container} data-aos="fade-up">
            <div className={styles.social} data-aos="fade-up">
              <a href="https://twitter.com/AlexKaridas">
                <i className={"fab fa-twitter"} />
                <h4>Twitter</h4>
              </a>
            </div>
            <div className={styles.social} data-aos="fade-up">
              <Link href="https://github.com/AlexKaridas">
                <i className={"fab fa-github"} />
                <h4>Github</h4>
              </Link>
            </div>
            <div className={styles.social} data-aos="fade-up">
              <Link href="https://www.linkedin.com/in/alex-karidas-1a6b4021a/">
                <i className={"fab fa-linkedin"} />
                <h4>Linkedn</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contactForms} data-aos="fade-up">
          <form onSubmit={emailSend}>
            <div className={styles.inputTitles} data-aos="fade-up">
              <h3>Email</h3>
            </div>
            <div className={styles.emailInput} data-aos="fade-up">
              <input
                type="text"
                placeholder="example@email.com"
                id="email"
                minLength="15"
                maxLength="30"
                name="email"
                required
              />
            </div>
            <div className={styles.inputTitles} data-aos="fade-up">
              <h3>Name</h3>
            </div>
            <div className={styles.nameInput} data-aos="fade-up">
              <input
                type="text"
                placeholder="John"
                name="name"
                id="name"
                maxLength="30"
                required
              />
            </div>
            <div className={styles.inputTitles} data-aos="fade-up">
              <h3>Message</h3>
            </div>
            <div className={styles.messageInput}>
              <textarea
                placeholder="Insert message to be sent..."
                id={styles.message}
                name="Message"
                required
                data-aos="fade-up"
              />
            </div>
            <div className={styles.submitButton} data-aos="fade-up">
              <button id={styles.send} type="submit" value="Send Message">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

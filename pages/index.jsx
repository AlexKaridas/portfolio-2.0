import styles from "../styles/Home.module.scss";
import emailjs from "@emailjs/browser";

export default function Home() {
  function sendEmail(e) {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <div className={styles.leftNav}>
          <h3>
            <a href="https://github.com/AlexKaridas?tab=repositories">WORKS</a>
          </h3>
          <h3>CONTACT</h3>
        </div>
        <div className={styles.logo}>Alex Karidas</div>
        <div className={styles.rightNav}>
          <ul>
            {/* <li>Twitter</li>
            <li>Github</li>
            <li>Linkedn</li> */}
            <li>
              <a href="https://github.com/AlexKaridas">
                <i className={"fab fa-github"}></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alex-karidas-1a6b4021a/">
                <i className={"fab fa-linkedin"}></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AlexKaridas">
                <i className={"fab fa-twitter"}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Front-End Developer based in Greece</h1>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.leftContainer}>
          <h3>Biography</h3>
          <h4 id={styles.biographyText}>
            I am a web developer based in Greece with a passion for programming
            and learning. I am currently working at{" "}
            <a href="https://www.metabloq.io/">Metabloq.io</a>.
          </h4>

          <h3 id={styles.skills}>Skills</h3>
          <div className={styles.skills}>
            <h4>HTML5</h4>
            <h4>CSS</h4>
            <h4>JAVASCRIPT</h4>
            <h4>REACT JS</h4>
            <h4>NEXT JS</h4>
            <h4>SASS</h4>
          </div>
        </div>

        <div className={styles.frameOfMainPicture}>
          <div className={styles.secondFrame}>
            <div className={styles.mainPicture}></div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <h3>SERVICES</h3>
          <div className={styles.services}>
            <h4>Website Development</h4>
            <h4>Website Design</h4>
          </div>
          <div className={styles.languages}>
            <h3 id={styles.languages}>Languages</h3>
            <h4>Greek</h4>
            <h4>English</h4>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactText}>
          <h2>Contact</h2>
          <h3>Have any problem to solve? </h3>
          <h3>Maybe a new website? </h3>
          <h3 id={styles.contactMe}>Contact me.</h3>
        </div>
        <div className={styles.contactForms}>
          <form onSubmit={sendEmail}>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              id="email"
              minLength="10"
              maxLength="20"
              name="email"
            />
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <h3>Message</h3>
            <input placeholder="Message" id="Message" name="Message" />
            <button id={styles.send} type="submit" value="Send Message">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

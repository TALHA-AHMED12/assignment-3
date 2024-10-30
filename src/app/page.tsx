import Footer from "@/components/Footer";
import "../style/style.css"; // Adjusted path to your CSS file
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </nav>
        <title>personal-resume</title>
      </header>

      <main>
      <section id="about" className="section">
  <Image src="/MR R gamerz.png" alt="Sheikh Talha Ahmed" className="profile-pic" width={2000} height={2000}/>
  <h1>SHEIKH TALHA AHMED</h1>
  <h2>Aspiring Web Developer</h2>
  <p>
    "<strong>
      <em>Welcome! to my Resume Website</em>
    </strong>, I'm a dedicated Computer Science student at S.M. Government Science College. With a strong passion for coding and a keen interest in emerging technologies, I'm actively expanding my knowledge in Web 3.0, the metaverse, and artificial intelligence. Having recently completed a Web 3.0 course, I'm excited to continue exploring these fields and advancing my skills."
  </p>
  <p>
    Check out my projects on <a href="https://github.com/TALHA-AHMED12" target="_blank" rel="noopener noreferrer">GitHub</a>.
  </p>
</section>


        <section id="contact" className="section">
          <h3>Contact Information</h3>
          <p>Email:{" "} < a href="mailto:sheikhtalhaahmed098@gmail.com" target="_blank">
          sheikhtalhaahmed@gmail.com</a>
          </p>
          <p>Phone: +92 xxxxxxxxxx</p>

          <p>
            GitHub:{" "}
            <a href="https://github.com/TALHA-AHMED12" target="_blank">
              TALHA-AHMED12
            </a>
          </p>
        </section>

        <section id="skills" className="section">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Typescript</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
          </ul>
        </section>

        <section id="education" className="section">
          <h3>Education</h3>
          <p>Matriculation from "The Future Academy" - Science Group</p>
          <p>Completed: 2023</p>
        </section>

        <section id="experience" className="section">
          <h3>Experience</h3>
          <p>
            "As a motivated fresher, I bring a strong foundation in computer
            science and a passion for learning and growth. I'm eager to apply my
            knowledge in real-world settings and contribute effectively to
            innovative projects."
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

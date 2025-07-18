import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./globals.css";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <section id="about" className="section">
        <About />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="educations" className="section">
        <Education />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </main>
  );
}

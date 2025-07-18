import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="about" style={{ height: "100vh", marginTopTop: "80px" }}>
        <About />
      </section>

      <section id="skills" style={{ height: "100vh", marginTop: "100px" }}>
        <Skills />
      </section>

      <section id="projects" style={{ height: "100vh", marginTop: "240px" }}>
        <Projects />
      </section>

      <section id="educations" style={{ height: "100vh", marginTop: "880px" }}>
        <Education/>
      </section>


      <section id="contact" style={{ height: "100vh", paddingTop: "350px" }}>
        <Contact/>
      </section>
    </main>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CodingProfiles from "./components/CodingProfiles";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";
import Stats from "./components/Stats";
import AIChat from "./components/AIChat";

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />

      <CodingProfiles />

      <CursorGlow />

      <Loader />

      <Stats />
      
      <AIChat />


    </div>
  );
}

export default App;
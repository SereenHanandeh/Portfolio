import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./styles/style.css";
import Certificates from "./components/Certificate";

function App() {
  return (
    <>
    
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Certificates/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;

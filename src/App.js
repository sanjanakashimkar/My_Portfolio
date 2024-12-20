import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import  Skills  from "./components/Skills";
import  Projects  from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Experience from './components/Experience';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
    <NavBar />
    <section id="home">
      <Banner />
    </section>


    <section id="skills">
      <Skills />
    </section>


    <section id="education">
      <Education />
    </section>


    <section id="experience">
      <Experience />
    </section>


    <section id="projects">
      <Projects />
    </section>


    <section id="contact">
      <Contact />
    </section>


    <Footer />
  </div>
  );
}

export default App;

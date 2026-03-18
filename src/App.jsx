import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CreativeWork from "./components/creativework";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <main className="stack">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CreativeWork />
      <Contact />
    </main>
  );
}

export default App;

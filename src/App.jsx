import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CreativeWork from "./components/creativework";

function App() {
  return (
    <main className="stack">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CreativeWork />
    </main>
  );
}

export default App;

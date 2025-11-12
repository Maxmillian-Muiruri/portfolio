import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Statistics />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

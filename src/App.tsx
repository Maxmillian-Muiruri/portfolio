import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ExperiencePage from './pages/Experience';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import CertificationsPage from './pages/Certifications';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <ScrollProgress />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

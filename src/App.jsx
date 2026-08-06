import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import NeuralBackground3D from './components/3d/NeuralBackground3D';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cyber-void text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-x-hidden">
        {/* Interactive 3D WebGL Neural Background Canvas */}
        <NeuralBackground3D />

        {/* Persistent Top Navigation Bar */}
        <Navbar />

        {/* Main Route Views */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

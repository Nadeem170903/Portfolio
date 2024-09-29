import React from 'react';
import './App.css';
import Header from './component/Header'
import AboutMe from './component/AboutMe';
import Skills from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

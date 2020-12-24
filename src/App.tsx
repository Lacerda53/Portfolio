import React from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  return (
    <div className="uk-container">
      <NavBar />
      <Welcome />
      <About />
      <Skills />
    </div>
  );
}

export default App;
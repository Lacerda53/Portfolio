import React from 'react';
import NavBar from './widgets/NavBar';
import Welcome from './widgets/Welcome';

const App: React.FC = () => {
  return (
    <div className="uk-container">
      <NavBar/>
      <Welcome/>
    </div>
  );
}

export default App;
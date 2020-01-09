import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';

function App() {
  return (
    <Navbar>
      <div className="lightingMan">
        <i class="material-icons">accessibility_new</i>
        <div className="lightningBall">
        </div>
      </div>
    </Navbar>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Color from './Color';
import History from './History';
import Advice from './Advice';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Desing</Link>
        <Link to="/color" className="link">Colors</Link>
        <Link to="/history" className="link">History</Link>
        <Link to="/advice" className="link">Advice</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/color" element={<Color/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/advice" element={<Advice/>} />
      </Routes>
    </Router>
    
  )

  
}

export default App;


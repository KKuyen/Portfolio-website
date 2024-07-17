// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Function1 from './components/Function1';
import Function2 from './components/Function2';
import Function3 from './components/Function3';
import Function4 from './components/Function4';
import Function5 from './components/Function5';
import Function6 from './components/Function6';

// Import các component khác tương tự
import './App.css'; // Đảm bảo bạn đã import CSS
import { useState } from 'react';


const App: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav-links">
          <li className='tag1'>
              <Link to="/function1">SOLAR</Link>
            </li>
            
          </ul>
          <ul className="nav-links2">
          <li className='tag2'>
              <Link to="/function2">Summary</Link>
            </li>
            
            <li className='tag2'>
              <Link to="/function3">Experience</Link>
            </li>
            <li  className='tag2'>
              <Link to="/function4">Skills</Link>
            </li>
            <li className='tag2' >
              <Link to="/function5">Projects</Link>
            </li>
            <li className='tag2' >
              <Link to="/function6">Certificate</Link>
            </li >
           
          </ul>
        </nav>

        <Routes>
          <Route path="/function1" element={<Function1 />} />
          <Route path="/function2" element={<Function2 />} />
          <Route path="/function3" element={<Function3 />} />
          <Route path="/function4" element={<Function4 />} />
          <Route path="/function5" element={<Function5 />} />
          <Route path="/function6" element={<Function6 />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
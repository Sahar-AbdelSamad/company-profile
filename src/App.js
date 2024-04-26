import { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Company from './components/Company';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  return (
    <Router>
      <div className="App">
        <Header title={title} />
        <Routes>
          <Route path="/company-profile" element={<Home setTitle={setTitle} />} />
          <Route path="/:companySymbol" element={<Company setTitle={setTitle} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:companySymbol" element={<Company />} />
      </Routes>
    </div>
  </Router>
);

export default App;

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Header from './Header';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Company" element={<Company />} />
      </Routes>
    </div>
  </Router>
);

export default App;

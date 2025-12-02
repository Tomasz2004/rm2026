import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Poster from './components/Poster';
import './Poster.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Poster />} />
      </Routes>
    </Router>
  );
}

export default App;

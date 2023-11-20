import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from './views/HomePages'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

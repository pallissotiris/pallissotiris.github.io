import './App.css';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Home from './Home';
import LockiePrivacyPolicyPage from './LockiePrivacyPolicyPage';
import RhythmixPrivacyPolicyPage from './RhythmixPrivacyPolicyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lockie/privacy" element={<LockiePrivacyPolicyPage />} />
        <Route path="/rhythmix/privacy" element={<RhythmixPrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

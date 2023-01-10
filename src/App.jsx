import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Icons from './components/Icons';
import Tips from './components/Tips';
import Results from './components/Results';
import Work from './components/Work';

function App() {


  return (
    <Router>
      <Navbar />
      <LandingPage />
      <Icons />
      <Tips />
      <Results />
      <Work />

      {/* <Routes>
        <Route path='/' />
      </Routes> */}
    </Router>
  );
}

export default App

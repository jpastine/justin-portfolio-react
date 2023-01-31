import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} /> 
      </Routes>

    </>
    
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Project from './components/Project';
import Skill from './components/Skill';
import Overview from './components/Overview';

function App() {
  return (
    <div className='bg-[#1E1F2B] lg:min-h-screen w-full text-white font-inter'>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/skills' element={<Skill />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

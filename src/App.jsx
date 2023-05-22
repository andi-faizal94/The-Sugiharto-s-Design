import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-[#1E1F2B] lg:min-h-screen w-full text-white font-inter'>
      <Navbar />
      <main className='container'>
        <Home />
      </main>
    </div>
  );
}

export default App;

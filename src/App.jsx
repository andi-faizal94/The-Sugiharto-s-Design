import { useState } from 'react';
import Sugiarto from './assets/Sugiarto.png';
import Image from './assets/Image.png';
import rectangle from './assets/rectangle.svg';

function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='bg-[#1E1F2B] lg:min-h-screen w-full text-white font-inter'>
      <header className='container flex items-center justify-between py-6 px-6 lg:py-10 lg:px-28'>
        <div className='flex items-center gap-x-10'>
          <a className=''>
            <img src={Sugiarto} alt='The Sugiarto Logo' />
          </a>
          <nav className='hidden lg:flex items-center gap-x-10'>
            <a href=''>Overview</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contact</a>
          </nav>
        </div>
        <div className='flex items-center'>
          <a
            className='bg-[#2BA386] px-6 py-2 rounded-md hidden lg:block'
            href=''
          >
            Punya Project?
          </a>
          <button
            className={`flex justify-between items-center lg:hidden appearance-none z-10
            ${navbar ? 'text-white' : 'text-inherit'}`}
            onClick={() => setNavbar(!navbar)}
          >
            <span className='material-symbols-outlined transition duration-500 ease-out'>
              {!navbar ? 'menu' : 'close'}
            </span>
          </button>
          <nav
            className={`
            lg:hidden w-auto 
            ${
              navbar
                ? 'flex flex-col items-center justify-center gap-y-5 h-screen w-full inset-0 opacity-100 visible fixed bg-black text-white scroll-smooth  duration-75'
                : 'hidden opacity-0 h-0 invisible scroll-smooth duration-75'
            }
          `}
          >
            <a href=''>Overview</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contact</a>
            <a className='bg-[#2BA386] text-white px-6 py-2 rounded-md' href=''>
              Punya Project?
            </a>
          </nav>
        </div>
      </header>
      <main className='container'>
        <section className='w-full flex flex-wrap lg:flex-row justify-between items-center px-10'>
          <div className='text-black bg-[url("./assets/1.png")] w-full lg:w-5/12 h-[463px]'>
            <div className='lg:ml-20 text-white flex flex-col items-start mt-20'>
              <h1 className='font-light text-4xl mb-3'>Hi , nama saya</h1>
              <h1 className='font-bold text-4xl mb-5'>Dedik Sugiarto</h1>
              <p className='text-normal font-inter text-[#FFF] font-light tracking-widest line-clamp-3  antialiased mb-7'>
                Saya seorang software-engineer, pembaca buku, warga NU, dan juga
                murid (online) Pak
                <br /> Fahruddin Faiz.
              </p>
              <div className='flex items-center gap-x-6 mb-9'>
                <p className='text-base font-semibold'>Go To Overview</p>
                <div>
                  <img src={rectangle} alt='rectangle' />
                </div>
              </div>
              <div className='flex items-center gap-8'>
                <div>
                  <h1 className='font-normal text-xs mb-3'>PROJECTS</h1>
                  <p className='text-2xl font-semibold'> 12</p>
                </div>
                <div>
                  <h1 className='font-normal text-xs mb-3'>EXPERIENCE</h1>
                  <p className='text-2xl font-semibold'>8 yrs</p>
                </div>
                <div>
                  <h1 className='font-normal text-xs mb-3'>NATIONALITY</h1>
                  <p className='text-2xl font-semibold'>IDN</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[url("./assets/2.png")] w-full  flex justify-center lg:w-6/12 h-[463px] '>
            <div className='mt-10'>
              <img src={Image} alt='image' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

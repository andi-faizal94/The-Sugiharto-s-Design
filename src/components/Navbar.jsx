import { useState } from 'react';
import Sugiarto from '../assets/Sugiarto.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
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
  );
};

export default Navbar;

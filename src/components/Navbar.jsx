import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sugiarto from '../assets/Sugiarto.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='container flex items-center justify-between py-6 px-6 lg:py-10 lg:px-28'>
      <div className='flex items-center gap-x-10'>
        <NavLink to='/'>
          <img src={Sugiarto} alt='The Sugiarto Logo' />
        </NavLink>
        <nav className='hidden lg:flex items-center gap-x-10'>
          <NavLink to='/overview'>Overview</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
      <div className='flex items-center'>
        <NavLink to='/contact' onClick={() => setNavbar(false)}>
          <button
            className='bg-[#2BA386] px-6 py-2 rounded-md hidden lg:block'
            href=''
          >
            Punya Project?
          </button>
        </NavLink>
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
          <NavLink to='/overview' onClick={() => setNavbar(false)}>
            Overview
          </NavLink>
          <NavLink to='/skills' onClick={() => setNavbar(false)}>
            Skills
          </NavLink>
          <NavLink to='/projects' onClick={() => setNavbar(false)}>
            Projects
          </NavLink>
          <NavLink to='/contact' onClick={() => setNavbar(false)}>
            Contact
          </NavLink>
          <NavLink to='/contact' onClick={() => setNavbar(false)}>
            <button className='bg-[#2BA386] text-white px-6 py-2 rounded-md'>
              Punya Project?
            </button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

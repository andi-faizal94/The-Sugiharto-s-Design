import { useState } from 'react';
import Image from '../assets/Image.png';
import rectangle from '../assets/rectangle.svg';
import Modal from './Modal/Modal';
const Home = () => {
  const [modal, setModal] = useState(false);
  return (
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
      {/* <button onClick={() => setModal(!modal)}>Coba</button>
      {modal && <Modal handleClose={() => setModal(false)} />} */}
    </section>
  );
};

export default Home;

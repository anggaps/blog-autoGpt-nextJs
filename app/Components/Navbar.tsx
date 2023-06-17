import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLink';
import Ad1 from 'public/assets/ad-1.jpg';

const Navbar = () => {
  return (
    <header className='mb-5'>
      <nav
        className='
      flex 
      justify-between 
      items-center 
      w-full
      bg-wh-900
      text-wh-100
      px-10
      py-4 
      relative 
      shadow-sm 
      font-mono'
      >
        <div className='hidden sm:block '>social link</div>
        <SocialLinks />
        <div className='flex justify-between items-center gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Trend</Link>
          <Link href='/'>about</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3 '>
          <h1 className='text-3xl font-bold md:text-5xl'>Blog ai App</h1>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='basis-full relative w-auto h-32 bg-wh-100'>
          <Image
            alt='tech'
            fill
            placeholder='blur'
            sizes='(max-width: 480px) 100vm, 
          (max-width: 768px) 75vw ,
          (max-width: 1060px) 50vw,
          33vw'
            style={{ objectFit: 'cover' }}
            src={Ad1}
          />
        </div>
      </div>
      <hr className='border-1 mx-10' />
    </header>
  );
};

export default Navbar;

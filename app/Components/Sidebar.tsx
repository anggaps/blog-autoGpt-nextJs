import React from 'react';
import SocialLinks from './SocialLink';
import Subscribe from './Subscribe';
import Image from 'next/image';
import Ad2 from 'public/assets/ad-2.png';
import AboutProfile from 'public/assets/about-profile.jpg';

const Sidebar = () => {
  return (
    <section>
      <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
        Subscribe and follow
      </h4>
      <div className='my-5 mx-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className='bg-wh-900 my-8 '>
        <Image
          className='hidden md:block my-8 w-full'
          alt='advert'
          placeholder='blur'
          width={500}
          height={1000}
          src={Ad2}
        />
      </div>
      <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
        About the Blog
      </h4>
      <div className='flex justify-center my-3 '>
        <Image
          alt='profile'
          placeholder='blur'
          sizes='(max-width: 480px) 100vm, 
          (max-width: 768px) 75vw ,
          (max-width: 1060px) 50vw,
          33vw'
          style={{ width: '500px', height: ' 250px', objectFit: 'cover' }}
          src={AboutProfile}
        />
      </div>
      <h4 className='py-3 px-5 text-wh-500  font-bold text-center'>Arcticle</h4>
      <p className='text-wh-500 text-center text-sm'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
        velit.
      </p>
    </section>
  );
};

export default Sidebar;

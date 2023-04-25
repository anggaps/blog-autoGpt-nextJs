import React from 'react';

const Footer = () => {
  return (
    <footer
      className='
  bg-wh-900 text-wh-50 py-10 px-10 '
    >
      <div
        className='
     justify-between mx-auto gap-16 sm:flex
     '
      >
        {/* fisrt columnt */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4
            className='
        font-bold
         '
          >
            BLOG OF THE FUTURE
          </h4>
          <p className='my-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            molestias minus hic nostrum autem iste similique,
          </p>
          <p>©️ Blog of future</p>
        </div>
        {/* second columnt */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4
            className='
        font-bold
         '
          >
            link
          </h4>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='my-5'>Lorem ipsum dolor sit .</p>
          <p>uam adipisci quod praesentium, vero porro accusamus.</p>
        </div>
        {/* second columnt */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4
            className='
        font-bold
         '
          >
            contact
          </h4>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>08921267128178</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

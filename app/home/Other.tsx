import React from 'react';
import Card from '../Components/Card';

const Other = () => {
  return (
    <section className='pt-4 mb-16'>
      <hr className='border-1' />
      {/* Header */}
      <p className='font-bold text-2xl my-8'>Other trending post</p>
      <div className='sm:grid grid-cols-2 gap-16'>
        <Card className='bg-wh-500 mt-4 sm:mt-0' imageHeight={'h-80'} />
        <Card className='bg-wh-500 mt-4 sm:mt-0' imageHeight={'h-80'} />
        <Card className='bg-wh-500 mt-4 sm:mt-0' imageHeight={'h-80'} />
        <Card className='bg-wh-500 mt-4 sm:mt-0' imageHeight={'h-80'} />
      </div>
    </section>
  );
};

export default Other;

import React from 'react';
import Card from '../Components/Card';
import { type } from 'os';
import { Post } from '@prisma/client';

type Props = {
  otherPost: Array<Post>;
};

const Other = ({ otherPost }: Props) => {
  return (
    <section className='pt-4 mb-16'>
      <hr className='border-1' />
      {/* Header */}
      <p className='font-bold text-2xl my-8'>Other trending post</p>
      <div className='sm:grid grid-cols-2 gap-16'>
        <Card
          className=' mt-4 sm:mt-0'
          imageHeight={'h-80'}
          post={otherPost[0]}
        />
        <Card
          className=' mt-4 sm:mt-0'
          imageHeight={'h-80'}
          post={otherPost[1]}
        />
        <Card
          className=' mt-4 sm:mt-0'
          imageHeight={'h-80'}
          post={otherPost[2]}
        />
        <Card
          className=' mt-4 sm:mt-0'
          imageHeight={'h-80'}
          post={otherPost[3]}
        />
      </div>
    </section>
  );
};

export default Other;

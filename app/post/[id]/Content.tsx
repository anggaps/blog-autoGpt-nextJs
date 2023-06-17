'use client';
import { FormattedPost } from '@/app/type';
import React, { useState } from 'react';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);

  const [titleError, setTitleError] = useState<string>('');

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    

  return (
    <div
      className='prose w-full
   max-w-full mb-10'
    >
      {/* BREADCRUMBS */}
      <h5 className='text-wh-300'>{`home > ${post.category} > ${post.title}`}</h5>
      {/* category and edit */}
      <div className='flex justify-between items-center'>
        <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm'>
          {post.category}
        </h4>
        <div className='mt-4'>
          {isEditable ? (
            <div className='flex justify-between gap-3'>
              <button onClick={() => console.log('cancel edit')}>
                <XMarkIcon className='h-6 w-6 text-accent-red' />
              </button>
            </div>
          ) : (
            <button onClick={() => console.log('make edit')}>
              <PencilSquareIcon className='h-6 w-6 text-accent-red' />
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Content;

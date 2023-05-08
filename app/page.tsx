import Image from 'next/image';
import { Inter } from 'next/font/google';
import Trending from './home/Trending';
import Tech from './home/Tech';
import Travel from './home/Travel';
import Other from './home/Other';
import Subscribe from './Components/Subscribe';
import Sidebar from './Components/Sidebar';
import { prisma } from './api/client';
import { Post } from '@prisma/client';

export const revalidate = 60;

const getPost = async () => {
  const posts: Array<Post> = await prisma.post.findMany();
  return posts;
};

export default async function Home() {
  const posts = await getPost();

  console.log('post', posts);

  const formatPost = () => {
    const trendingPost: Array<Post> = [];
    const techPost: Array<Post> = [];
    const travelPost: Array<Post> = [];
    const otherPost: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPost.push(post);
      }
      if (post?.category === 'Tech') {
        techPost.push(post);
      } else if (post?.category === 'Travel') {
        travelPost.push(post);
      } else if (post?.category === 'Interior Design') {
        otherPost.push(post);
      }
    });
    return [trendingPost, techPost, travelPost, otherPost];
  };

  const [trendingPost, techPost, travelPost, otherPost] = formatPost();

  return (
    <main className='px-10 leading-7 '>
      <Trending trendingPost={trendingPost} />
      <div className='md:flex gap-10 mb-5'>
        <div
          className='
        basis-3/4'
        >
          <Tech techPost={techPost} />
          <Travel travelPost={travelPost} />
          <Other otherPost={otherPost} />
          <div className='hidden md:block'>
            <Subscribe />
          </div>
        </div>
        <div className='basis-1/4'>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

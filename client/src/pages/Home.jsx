import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-6 px-3 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100 lg:text-6xl'>
          Explore the World with TravelBlog
        </h1>
        <p className='text-gray-600 dark:text-gray-300 text-lg'>
          Welcome to TravelBlog, where you can discover amazing places, get travel tips, and hear stories from around the globe. Whether you're dreaming of your next adventure or planning a trip, our blog is here to inspire you.
        </p>
        <p className='text-gray-600 dark:text-gray-300 text-lg'>
          Explore amazing destinations, practical advice, cultural insights, and inspiring travel tales. Join our community and start your journey with us.
        </p>
        <Link
          to='/search'
          className='text-base text-teal-600 dark:text-teal-400 font-bold hover:underline mt-4'
        >
          View all travel posts
        </Link>
      </div>
      <div className='p-3 bg-white dark:bg-gray-800 shadow'>
        <CallToAction />
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 bg-gray-50 dark:bg-gray-900'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center text-gray-800 dark:text-gray-100'>
              Recent Posts
            </h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to='/search'
              className='text-lg text-teal-600 dark:text-teal-400 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

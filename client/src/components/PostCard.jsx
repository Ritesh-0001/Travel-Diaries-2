import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all shadow-lg bg-gray-800'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </Link>
      <div className='p-4 flex flex-col gap-3 bg-gray-900'>
        <p className='text-lg font-semibold line-clamp-2 text-teal-400 group-hover:text-teal-300 transition-colors'>
          {post.title}
        </p>
        <span className='italic text-sm text-gray-400'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='mt-auto text-center py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}

import CallToAction from '../components/CallToAction';

export default function Destinations() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Indian Destinations</h1>
      <p className='text-md text-gray-500'>Explore beautiful destinations in India and plan your next adventure with our curated travel guides!</p>
      <ul className='text-lg text-gray-700'>
        <li><a href='/post/mysore ' className='text-blue-500 hover:underline'>Mysore</a></li>
        <li><a href='/post/mysore ' className='text-blue-500 hover:underline'>Mysore1</a></li>
      </ul>
      <CallToAction />
    </div>
  )
}

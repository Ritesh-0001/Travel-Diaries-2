import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-8 border border-blue-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg'>
      <div className="flex-1 flex flex-col items-center sm:items-start">
        <h2 className='text-4xl font-extrabold text-blue-600'>
          Embark on Your Next Adventure!
        </h2>
        <p className='text-black text-lg my-4 text-lg'>
          Discover breathtaking destinations and make unforgettable memories.
        </p>
        <Button gradientDuoTone='cyanToBlue' className='rounded-lg mt-4'>
          <a href="https://www.travelblog.com" target='_blank' rel='noopener noreferrer' className='text-white px-6 py-3'>
            Start Your Journey
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://th.bing.com/th/id/R.61f116c6f3f7be8e7d6f3cdb5e4638d4?rik=R7H7jKHMFDJVIw&riu=http%3a%2f%2ftravelingcanucks.com%2fwp-content%2fuploads%2f2017%2f05%2fTraveling_Canucks_Travel_Photography_005.jpg&ehk=n6LBIPuKPOXJo8B4qPbgN1J5M5t4XO7QWzxI6gqCOYQ%3d&risl=1&pid=ImgRaw&r=0" alt="Travel Destinations" className='rounded-lg shadow-md' />
      </div>
    </div>
  );
}

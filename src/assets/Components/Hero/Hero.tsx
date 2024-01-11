import { CarouselTransition } from '../LIttleComponents/Carousel'

function Hero (): JSX.Element {
  return (
    <div className='w-full h-[850px] bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24'>
      <div className='container mx-auto text-center flex flex-col justify-center items-center'>
        <h1 className='text-4xl md:text-6xl font-semibold mb-4'>Rediscover the Joy of Vinyl</h1>
        <p className='text-lg md:text-xl mb-8'>Immerse yourself in a world of timeless music with our vinyl collection.</p>
        <img src='logo-music-react.png' alt='logo' />
        <a
          href='#products'
          className='bg-white text-gray-900 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition duration-300 inline-block hover:border hover:border-white mt-6'
        >
          Explore Now
        </a>
      </div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <CarouselTransition />
      </div>
    </div>
  )
}

export default Hero

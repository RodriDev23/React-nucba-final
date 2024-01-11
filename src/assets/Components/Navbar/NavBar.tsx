import { Link } from 'react-router-dom'

function NavBar (): JSX.Element {
  return (
    <div className='bg-gray-900 text-white py-4 border-b border-white rounded-b-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-semibold'>RetroSpin</h2>
          <img src='logo-music-react.png' alt='logo' className='w-12 h-12 ml-4' aria-label='RetroSpin Logo' />
        </div>
        <ul className='hidden md:flex space-x-6'>
          <li><Link to='/' className='hover:text-gray-300'>Home</Link></li>
          <li><Link to='/Products' className='hover:text-gray-300'>Products</Link></li>
          <li><Link to='/Contact' className='hover:text-gray-300'>Contact</Link></li>
          <li><Link to='/AboutUs' className='hover:text-gray-300'>About Us</Link></li>
        </ul>
        {/* Mobile Menu Button */}
        <button className='md:hidden focus:outline-none'>
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        {/* Add your mobile menu content here */}
        {/* Example: */}
        <ul className='flex flex-col space-y-4 mt-4'>
          <li><Link to='/' className='hover:text-gray-300'>Home</Link></li>
          <li><Link to='/Products' className='hover:text-gray-300'>Products</Link></li>
          <li><Link to='/Contact' className='hover:text-gray-300'>Contact</Link></li>
          <li><Link to='/AboutUs' className='hover:text-gray-300'>About Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

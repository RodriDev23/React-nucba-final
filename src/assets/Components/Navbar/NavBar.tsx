// RetroSpin Co name for the store//
import { Link } from 'react-router-dom'

function NavBar (): JSX.Element {
  return (
    <div className='bg-gray-900 text-white py-4 w-full border-b border-white rounded-b-lg '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-semibold'>RetroSpin</h2>
          <img src='logo-music-react.png' alt='logo' className='w-12 h-12 ml-4' aria-label='RetroSpin Logo' />
        </div>
        <ul className='flex space-x-6'>
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

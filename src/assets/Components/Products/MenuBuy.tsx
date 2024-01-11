import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface ToggleMenu {
  toggle: boolean
  itemTobuy: string
  imgSource: string
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuBuy: React.FC<ToggleMenu> = ({ toggleMenu, toggle, itemTobuy, imgSource }): JSX.Element => {
  const handleMenu: () => void = () => {
    toggleMenu(false)
  }

  return (
    <div className='relative'>
      <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-72 h-[800px] bg-gray-300 ${toggle ? 'block' : 'hidden'}`}>
        <div className='flex justify-center items-center mt-10'>
          <MdOutlineShoppingCart className='text-black text-3xl mb-6' />
        </div>
        {toggle && (
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg font-bold w-40 mb-4'>Album you're going to buy: {itemTobuy}</h2>
            <img src={imgSource} alt={itemTobuy} className='w-40 h-40 object-cover mb-4 rounded-md' />
            <div className='flex justify-center items-center gap-4'>
              <button className='py-3 px-5 rounded-md bg-black text-white mt-6'>
                <Link to='/Purchase'>Buy it</Link>
              </button>
              <button onClick={handleMenu} className='py-3 px-5 rounded-md bg-black text-white mt-6'>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuBuy

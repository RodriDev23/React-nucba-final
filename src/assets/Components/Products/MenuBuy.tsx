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
      <div className={`absolute left-[570px] top-0  w-[250px] h-[800px] bg-gray-300 ${toggle ? 'block' : 'hidden'}`}>
        <div className='flex justify-center items-center mt-10'>
          <MdOutlineShoppingCart className='text-black text-2xl mb-20' />
        </div>
        <div className=' h-[100px] w-[300px] flex flex-col justify-center items-center mt-20'>
          {toggle
            ? (

              <div className='flex flex-col justify-center items-center '>
                <h2 className='text-lg font-bold w-40 mb-4'>Album you gonna buy: {itemTobuy}</h2>
                <img src={imgSource} alt={itemTobuy} className='w-40 h-40 object-cover mb-4 rounded-md' />
                <div className='flex justify-center items-center gap-4'>
                  <button className='py-3 px-5 rounded-md bg-black text-white mt-10'><Link to='/Purchase'>Buy it</Link></button>

                  <button
                    onClick={handleMenu}
                    className='py-3 px-5 rounded-md bg-black text-white mt-10'
                  >Close
                  </button>
                </div>
              </div>
              )
            : null}
        </div>
      </div>

      {/* Content on the right side */}

    </div>
  )
}

export default MenuBuy

import { useState } from 'react'
import { VinylProducts } from '../../../MapPRoducts/VinylProducts'
import MenuBuy from './MenuBuy'

function CompletedPage (): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(VinylProducts)
  const [showMenu, setShowMenu] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({ id: 0, name: '', price: 0, image: '' })

  const handleSearch: () => void = () => {
    const filtered = VinylProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleMenu: (product: typeof VinylProducts[0]) => void = (product) => {
    setSelectedProduct(product)
    setShowMenu(true)
  }

  return (
    <div className='container mx-auto mt-8'>
      <MenuBuy toggle={showMenu} itemTobuy={selectedProduct.name} imgSource={selectedProduct.image} toggleMenu={setShowMenu} />
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search Vinyls...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-300 px-6 py-4 rounded-md mr-2'
        />
        <button
          onClick={handleSearch}
          className='bg-black text-white px-5 py-3 rounded-md'
        >
          Search
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='border p-4 rounded-md'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-48 object-cover mb-4'
            />
            <h2 className='text-xl font-bold mb-2'>{product.name}</h2>
            <p className='text-gray-700'>Price: ${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleMenu(product)}
              className='mt-2 bg-green-500 text-white px-4 py-2 rounded-md'
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompletedPage

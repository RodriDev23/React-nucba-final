import Products from '../../../MapPRoducts/Produtcs'

function FeaturedProducts (): JSX.Element {
  return (
    <div className='bg-gray-100 py-16 w-full h-[750] mt-[870px]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-8'>Featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 hover: cursor-pointer'>
          {Products.map((vinyl) => (
            <div key={vinyl.name} className='bg-white p-6 rounded-md shadow-md'>
              <img src={vinyl.img} alt={vinyl.name} className='w-full h-40 object-cover mb-4 shadow-2xl rounded-md' />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>{vinyl.name}</h3>
              <p className='text-gray-600 mb-2'>${vinyl.price.toFixed(2)}</p>
              <p className='text-gray-700'>{vinyl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

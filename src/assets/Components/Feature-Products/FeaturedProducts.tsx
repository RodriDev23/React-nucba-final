import Products from '../../../MapPRoducts/Produtcs'

function FeaturedProducts (): JSX.Element {
  return (
    <div className='bg-gray-100 py-8 md:py-16 w-full mt-8 md:mt-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-8'>Featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {Products.map((vinyl) => (
            <div key={vinyl.name} className='bg-white p-4 md:p-6 rounded-md shadow-md'>
              <img src={vinyl.img} alt={vinyl.name} className='w-full h-32 md:h-40 object-cover mb-2 md:mb-4 shadow-2xl rounded-md' />
              <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2'>{vinyl.name}</h3>
              <p className='text-gray-600 mb-1'>${vinyl.price.toFixed(2)}</p>
              <p className='text-gray-700 text-sm md:text-base'>{vinyl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

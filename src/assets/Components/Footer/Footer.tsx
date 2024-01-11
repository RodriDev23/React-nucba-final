import Products from '../../../MapPRoducts/Produtcs'

function FeaturedProducts (): JSX.Element {
  return (
    <div className='bg-gray-100 py-6 md:py-12 w-full mt-6 md:mt-12'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-6'>Featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {Products.map((vinyl) => (
            <div key={vinyl.name} className='bg-white p-3 md:p-4 rounded-md shadow-md'>
              <img src={vinyl.img} alt={vinyl.name} className='w-full h-24 md:h-32 object-cover mb-2 md:mb-3 shadow-2xl rounded-md' />
              <h3 className='text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2'>{vinyl.name}</h3>
              <p className='text-gray-600 mb-1'>${vinyl.price.toFixed(2)}</p>
              <p className='text-gray-700 text-xs md:text-sm'>{vinyl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

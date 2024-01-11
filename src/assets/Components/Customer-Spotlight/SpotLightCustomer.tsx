import customerSpotlightsData from '../../../MapPRoducts/CustomerSpotlight'

function SpotLightCustomer (): JSX.Element {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-[100px]'>
      {customerSpotlightsData.map((customerSpotlight) => (
        <div
          key={customerSpotlight.id}
          className='bg-white p-4 rounded-lg shadow-md'
        >
          <img
            src={customerSpotlight.imgOfUser}
            alt={`User ${customerSpotlight.id}`}
            className=' w-44 h-52 object-center mb-4 rounded-md shadow-2xl'
          />
          <h3 className='text-xl font-semibold mb-2'>{customerSpotlight.name}</h3>
          <p className='text-gray-600 mb-4'>{customerSpotlight.comment}</p>
          <p className='text-yellow-800 font-bold'>Rating: {customerSpotlight.rating}</p>
        </div>
      ))}
    </div>

  )
}

export default SpotLightCustomer

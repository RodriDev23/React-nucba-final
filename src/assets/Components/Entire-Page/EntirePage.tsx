import SpotLightCustomer from '../Customer-Spotlight/SpotLightCustomer'
import FeaturedProducts from '../Feature-Products/FeaturedProducts'
import Hero from '../Hero/Hero'

function EntirePage (): JSX.Element {
  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-start items-center'>
      <Hero />
      <FeaturedProducts />
      <SpotLightCustomer />
    </div>
  )
}

export default EntirePage

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpotLightCustomer from './assets/Components/Customer-Spotlight/SpotLightCustomer'
import FeaturedProducts from './assets/Components/Feature-Products/FeaturedProducts'
import Footer from './assets/Components/Footer/Footer'
import NavBar from './assets/Components/Navbar/NavBar'
import CompletedPage from './assets/Components/Products/Products'
import Purchase from './assets/Components/PurchasePage/Purchase'
import EntirePage from './assets/Components/Entire-Page/EntirePage'
import Contact from './assets/Components/Contanct/Contact'
import AboutUs from './assets/Components/About-Us/AboutUs'

function App (): JSX.Element {
  return (
    <Router>
      <div className='min-h-screen min-w-screen flex flex-col justify-start items-center'>
        <NavBar />
        <Routes>
          <Route path='/EntirePage' element={<EntirePage />} />
          <Route path='/featured' element={<FeaturedProducts />} />
          <Route path='/spotlight' element={<SpotLightCustomer />} />
          <Route path='/Products' element={<CompletedPage />} />
          <Route path='/Purchase' element={<Purchase />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/AboutUs' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

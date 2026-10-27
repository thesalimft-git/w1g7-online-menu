import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantsListPage from './pages/restaurants/RestaurantsListPage'
import RestaurantMenuPage from './pages/menu/RestaurantMenuPage'
import Layout from './layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<RestaurantsListPage />} />
          <Route path='/restaurants/3/menu' element={<RestaurantMenuPage />} />

          <Route path='/contact-us' element='contact-us' />
          <Route path='/favorite' element='my favorite' />
          <Route path='/order' element='order page' />
          <Route path='/setting' element='setting page' />
          <Route path='/account' element='account page' />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

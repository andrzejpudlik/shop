import { 
  BrowserRouter as Router, 
  Navigate, 
  Route, 
  Routes 
} from 'react-router-dom'

import { 
  HomePage, 
  Login,
  Register,
  ProductListFiltered,
  Product,
} from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:category' element={<ProductListFiltered />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  )
};

export default App;
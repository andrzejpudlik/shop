import { 
  BrowserRouter as Router, 
  Navigate, 
  Route, 
  Routes 
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { 
  HomePage, 
  Login,
  Register,
  ProductListFiltered,
  Product,
  Cart,
  Success,
} from './pages';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {!user ? <Route path='/login' element={<Login />} /> : <Route path='/login' element={<Navigate to='/' />} />}
        {!user ? <Route path='/register' element={<Register />} /> : <Route path='/register' element={<Navigate to='/' />} />}
        <Route path='/products/:category' element={<ProductListFiltered />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  )
};

export default App;
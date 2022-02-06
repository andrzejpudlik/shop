import { 
  BrowserRouter as Router, 
  Navigate, 
  Route, 
  Routes } from 'react-router-dom'

import { 
  HomePage, 
  Login 
} from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
};

export default App;
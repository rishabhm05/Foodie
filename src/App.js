
import './App.css';
import Button from '@mui/material/Button';
import Header from './components/Header';
import TabComponent from './components/TabComponent';
import {Routes,Route} from 'react-router-dom'
import Delivery from './components/Delivery';
import Diningout from './components/Diningout';
import SingleRestaurantPage from './components/SingleRestaurantPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useSelector } from 'react-redux';

function App() {
  const {isAuthenticated} =useSelector((state)=>state.Cart)
  return (
    <div className="App">
    <Header/>
   
   
    <Routes>
    <Route path="/" element ={<><TabComponent/><Delivery/></>}/>
    <Route path="/dining" element ={<><TabComponent/><Diningout/></>}/>
    <Route path="/restaurant/:id" element={<SingleRestaurantPage/>}/>
    <Route path="/cart" element ={<CartPage/>}/>
  
    <Route path='/checkoutpage' element={<ProtectedRoutes isAuthenticated={isAuthenticated}><CheckoutPage/></ProtectedRoutes>}></Route>
    
    </Routes>
    </div>
  );
}

export default App;

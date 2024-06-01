import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App(){
  return(
    <div>
      <BrowserRouter></BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
        <Route path="/product" element={<Product />}> </Route>
        <Route path=':productId' element ={<Product />}></Route>
      </Routes>
      <Route path='/cart' element={<LoginSignup />}></Route>
    </div>
  );
}
export default App;

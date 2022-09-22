import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import React from 'react';
import CartProvider from './context/CartContext/CartContext';


function App() {
  return (
    <div className='container-fluid background-primary'>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

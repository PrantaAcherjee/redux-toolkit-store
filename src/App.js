import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from "../src/pages/product/Product";
import Cart from "../src/pages/cart/Cart";
import Navbar from './pages/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>    
    </div>
  );
}

export default App;

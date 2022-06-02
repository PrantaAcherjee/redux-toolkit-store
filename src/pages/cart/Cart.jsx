import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/cartSlice';
import "./Cart.css";

const Cart = () => {
  const products=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const handleremove=(product)=>{
    dispatch(remove(product))
  }
  return (
    <div>
       {products.map(product=>(
        <div className='card'>
          <img className='images' src={product.image} alt="product name" />
          <h4>Name: {product.title}</h4>
          <h5>Price: {product.price}</h5>
          <h6>Ratings: {product.rating.rate}</h6>           
          <button onClick={()=>handleremove(product.id)}>Remove to Cart</button>          
        </div>
      ))}
    </div>
  )
}

export default Cart
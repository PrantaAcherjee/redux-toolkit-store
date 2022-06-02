import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts, STATUSES } from '../../store/productSlice';
import "./Product.css";

const Product = () => {

  const dispatch=useDispatch();
  const {data:products,status}=useSelector(state=>state.product)
  
  // const [products,setProducts]=useState([]);

  useEffect(()=>{
  dispatch(fetchProducts())
    // const fetchProducts=async()=>{
    //   const res=await fetch('https://fakestoreapi.com/products');
    //   const data=await res.json();
    //   console.log(data)
    //   setProducts(data)
    // }
    // fetchProducts()
  },[])
  if(status===STATUSES.LOADING){
    return <h4>Loading...</h4>
  }
  else if(status===STATUSES.ERROR){
    return <h4>Something went wrong !</h4>
  }
  
  const handleOnClick=(product)=>{
    dispatch(add(product))
  }
  return (
    <div className='grid-container'>
      {products.map(product=>(
        <div className='card'>
          <img className='images' src={product.image} alt="product name" />
          <h4>Name: {product.title}</h4>
          <h5>Price: {product.price}</h5>
          <h6>Ratings: {product.rating.rate}</h6>           
          <button onClick={()=>handleOnClick(product)}>Add to Cart</button>          
        </div>
      ))}
    </div>
  )
}

export default Product
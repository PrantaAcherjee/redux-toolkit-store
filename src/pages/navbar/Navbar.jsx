import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const items=useSelector(state=>state.cart)
  return (
    <div className='navigation'>
        <span>Redux Store</span>
        <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <span>Cart Items {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar
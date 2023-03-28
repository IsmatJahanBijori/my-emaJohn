import React from 'react';
import './Header.css'
const Header = () => {
    return (
           <nav className='header'>
           <h2>Ema John</h2>
           <div>
           <a href="/order">Order</a>
           <a href="/order review">Order Review</a>
           <a href="/manage inventory">Manage inventory</a>
           <a href="/login">Login</a>
           </div>
           </nav>
    );
};

export default Header;
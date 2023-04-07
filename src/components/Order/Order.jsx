import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()
    // console.log(cart)
    const [cart, setCart] = useState(savedCart)
    const handleRemove = id => {
        const remaining = cart.filter(prod => prod.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(pd => <ReviewItem key={pd.id} pd={pd} handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
import React from 'react';
import './Cart.css'
const Cart = ({cart, handleClearCart, children}) => {
    // console.log(props)
    // const cart = props.cart
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for (const product of cart) {
        product.quantity=product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear'>Clear cart</button>
            {children}
            
        </div>
    );
};
// <button className='btn-check'>Proceed Checkout</button>
export default Cart;
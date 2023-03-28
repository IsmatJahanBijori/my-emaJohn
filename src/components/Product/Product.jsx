import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props.product)
    const {img, name, price, seller, ratings}=props.product
    // button function destructuring
    const handleAddToCart=props.handleAddToCart
    return (
        <div className='product'>
            <div className="product-info">
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;
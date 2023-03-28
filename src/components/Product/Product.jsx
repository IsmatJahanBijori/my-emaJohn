import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, seller, ratings}=props.product
    return (
        <div className='product'>
            <div className="product-info">
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            </div>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;
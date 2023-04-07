import React, { useState, useEffect } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    // ei jinis ta mainly kora hoiche karon amra jeno pore fire eshe amader store kora product gula dekhte pari

    useEffect(() => {
        const storedCart = getShoppingCart()
        // console.log(storedCart)
        const savedCart = []

        // step1: get id
        for (const id in storedCart) {
            // console.log(id)

            // step 2: get product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct)

            if (addedProduct) {
                // step 3:  get quantity from storage
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // console.log(addedProduct)


                // step 4: push new added product to the saved cart
                savedCart.push(addedProduct)
                // console.log(savedCart)
            }
        }
        // step 5: set the cart 
        setCart(savedCart)
    }, [products])
    // button handling
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='' to="/order">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
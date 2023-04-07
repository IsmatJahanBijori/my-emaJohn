import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ pd, handleRemove }) => {
    console.log(pd)
    const { img, name, price, quantity, id } = pd
    // const handleRemove=pd
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-handle'>
                <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                </div>
                <div>
                <button className='btn' onClick={() => handleRemove(id)}>XX</button></div>
                
            </div>

        </div>
    );
};

export default ReviewItem;
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-300 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold text-center'>{price.price}</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-4'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
            {
                price.features?.map((feature, idx) => 
                <Feature 
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-500 hover:bg-green-700  py-2 rounded-md text-white mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCart;
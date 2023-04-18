import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div className=''> 
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold  rounded py-4 md:w-[660px] mx-auto mt-8'>Awesome Affordable Price</h2>
            <div className='grid md:grid-cols-3 gap-3'>
               {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price={price}
                    ></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;
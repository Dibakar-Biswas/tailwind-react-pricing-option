import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan_name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-500 p-4 rounded'>
            {/* Card header */}
            <div>
                <h1 className='text-5xl'>{plan_name}</h1>
                <h3 className='text-2xl mt-2'>{price}</h3>
            </div>

            {/* Card Body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-grow'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;
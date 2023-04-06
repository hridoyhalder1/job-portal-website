import React from 'react';
import './Category.css';

const Category = ({ card }) => {

    const { name, description, icon } = card;
    return (
        <div>
            <div className='card text-white p-6 md:card-side border shadow'>
                <figure>
                    <img src={icon} className='jobIcon' alt={name} />
                </figure>
                <div className="card-body text-black">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
import React from 'react';

const MenuComponent = ({item}) => {
    const {image,price,recipe,name}=item;
    return (
        <div className='flex gap-4'>
            <img className='w-20' style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>{recipe}</p>

            </div>
            <p className='text-yellow-600'>{price}</p>
        </div>
    );
};

export default MenuComponent;
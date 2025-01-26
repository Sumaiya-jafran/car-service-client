import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='w-1/3 mx-auto my-8'>
            <p className='text-yellow-700 text-xl text-center uppercase my-4'>----------{subHeading}-----------</p>
            <h2 className='border-y-2 text-4xl text-center py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;
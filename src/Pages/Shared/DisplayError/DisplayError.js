import React from 'react';

const DisplayError = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <h1 className='text-red-500 text-2xl'>Something Went Wrong!</h1>
            <h1 className='text-red-500 text-2xl'>Not Found 404!</h1>
        </div>
    );
};

export default DisplayError;
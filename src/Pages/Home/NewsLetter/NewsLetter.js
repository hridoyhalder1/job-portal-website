import React from 'react';
import './NewsLetter.css';
import newsleft from '../../../assets/img/newsletter/newsletter-left.png';
import newsright from '../../../assets/img/newsletter/newsletter-right.png';
import { FaEnvelope } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <div className='mx-5 bg-[#3c65f5] px-8 py-16 rounded-2xl md:rounded-xl lg:rounded-xl  mb-[100px]'>
            <div className='flex items-center justify-around'>
                <div className='hidden md:block lg:block'>
                    <img src={newsleft} alt="" draggable='false' />
                </div>
                <div>
                    <h1 className='text-white text-2xl lg:text-4xl text-center font-bold pb-5'>New Things Will Always <br /> Update Regularly</h1>
                    <div className='bg-white flex items-center justify-center py-3 rounded-lg'>
                        <div>
                            <FaEnvelope className='icon'></FaEnvelope>
                        </div>
                        <div className='ml-3'>
                            <form action="">
                                <input type="email" placeholder='Enter your email here' className='mr-3 border-none outline-none lg:w-auto w-3' required />
                                <button type="submit" className='btn '>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block'>
                    <img src={newsright} alt="" draggable='false' />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
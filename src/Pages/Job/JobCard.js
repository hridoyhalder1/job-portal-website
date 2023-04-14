import React from 'react';
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import './JobCard.css';

const JobCard = ({ job }) => {
    const { _id, img, name, status, location, pay } = job;
    return (
        <div className='mx-5 '>
            <div className='border flex items-center justify-between flex-col md:flex-row lg:flex-row  p-5 rounded-md hover:shadow-xl'>
                <div className='flex justify-between gap-32 mb-3'>
                    <div className='flex items-center'>
                        <div className='border text-center p-2 rounded-md shadow'>
                            <img src={img} alt="" className='w-[50px] ' />
                        </div>
                        <h1 className='ml-4 hover:text-[#41aae6]'>{name}</h1>
                    </div>
                    <div className='blcok md:hidden lg:hidden'>
                        <FaRegBookmark className='bookmark cursor-pointer' />
                    </div>
                </div>
                <div className=' flex justify-between md:block lg:block gap-32 mb-3'>
                    <h1 className='hidden md:block lg:block bg-[#5bc0fadb] text-[white] text-center rounded-3xl  py-1 w-[60%] text-[12px]'>{status}</h1>
                    <h1 className='block md:hidden lg:hidden'>{status}</h1>
                    <h1 className='text-[14px] text-[#8c8d8e]'>20th Feb 2023</h1>
                </div>
                <div className=' flex justify-between gap-48 md:block lg:block mb-3'>
                    <h1 className='flex items-center text-[14px] text-[#8c8d8e]'><FaMapMarkerAlt/>{location}</h1>
                    <h1>${pay}</h1>
                </div>
                <div className='flex items-center'>
                    <FaRegBookmark className='bookmark hidden md:block lg:block cursor-pointer' />
                    <button className=' buttons ml-4 w-full md:w-auto lg:w-auto'>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
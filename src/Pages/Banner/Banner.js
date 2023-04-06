import React from 'react';
// import banner1 from '../../assets/img/banner/banner1.jpg';
import banner from '../../assets/img/banner/banner.png';
import bannericon from '../../assets/img/banner/banner-icon.png';
import './Banner.css';
import { HiMail } from 'react-icons/hi';
import { FaFileUpload } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div >
            <div className="hero min-h-screen bg-[#edf2fb]">
                <div className='hidden lg:block'>
                    <div className='cv flex items-center justify-between bg-white '>
                        <span><HiMail className='icons '></HiMail></span>
                        <p className='text-black cvText '>Work From Home</p>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='candidates flex items-center justify-between flex-col p-5 bg-white '>
                        <p className='text-black cvText mb-3'>10k+ Candidates</p>
                        <img src={bannericon} alt="" />
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='upload flex items-center justify-between  p-5 bg-white '>
                        <div>
                            <span><FaFileUpload className='fileIcon '></FaFileUpload></span>
                        </div>
                        <div>
                            <h1 className='text-black cvText '>Upload Your CV</h1>
                            <p className='text-xs pt-0 text-[#8c8d8e]'>It only takes few seconds </p>
                        </div>

                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='agency flex items-center justify-between  p-5 bg-white '>
                        <div>
                            <span><BsFillBriefcaseFill className='agencyIcon '></BsFillBriefcaseFill></span>
                        </div>
                        <div>
                            <h1 className='text-black cvText '>Creative Agency</h1>
                            <p className='text-xs pt-0 text-[#8c8d8e]'>Startup</p>
                        </div>

                    </div>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className='lg:h-1/2 lg:w-1/2 rounded' alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">There Are <span className='text-[#41aae6]'>93,178</span> Postings  Here
                            For you!</h1>
                        <p className="py-6 text-[#8c8d8e]">Find Jobs, Employment & Career Opportunities
                        </p>
                        <button className="btn bg-[#41aae6] text-white border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
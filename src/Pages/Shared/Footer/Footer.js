import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 ">
                <div>
                    <Link to='/'><h1 className='text-5xl font-bold'>Job Lagbe</h1></Link>
                    <h1 className='text-xl'>Call us</h1>
                    <a href='tel:+8801863901163'><h1 className='text-xl text-[#41aae6] font-semibold'>+8801863901163</h1></a>
                    <p>329 Queensberry Street, North Melbourne VIC<br />
                        3051, Australia.</p>
                </div>
                <div>
                    <span className="font-bold uppercase text-[#2f2d51]">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="font-bold uppercase text-[#2f2d51]">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="font-bold uppercase text-[#2f2d51]">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
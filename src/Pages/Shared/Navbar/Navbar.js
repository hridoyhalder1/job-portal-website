import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMail } from "react-icons/hi";
import './Navbar.css';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import profile from '../../../assets/img/profile-11.jpg';
// import DarkModeToggler from '../../../DarkModeToggler/DarkModeToggler';



const Navbar = () => {
    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut Successfully!');
            })
            .catch(error => console.log(error));
        navigate('/login');

    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        {user?.uid ?
            <>
                <li><button onClick={handleLogOut}>LogOut</button></li>
                <li><Link to='/my-profile'>My Profile</Link></li>
            </>
            :
            <li><Link to='/signup'>SignUp</Link></li>
        }
    </>
    return (
        <div className='sticky top-0 w-full'>
            <div className='bg-[#41aae6] py-2 text-white w-full'>
                <div className='mx-5 flex justify-between'>
                    <div className='flex items-center'>
                        <HiMail className='icon' ></HiMail>
                        <a href='mailto:hridoyhalder91@gmail.com'>jobx@gmail.com</a>
                    </div>
                    <div className='flex items-center'>
                        <FaTwitter className='icon '></FaTwitter>
                        <FaInstagram className='icon'></FaInstagram>
                        {/* <FaLinkedinIn className='icon'></FaLinkedinIn> */}
                    </div>
                </div>
            </div>
            <hr />
            <div className="navbar bg-[#41aae6] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#41aae6] rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Job Lagbe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end ">
                {/* <DarkModeToggler theme={theme} toggleTheme={toggleTheme} /> */}
                    {user?.photoURL ?
                        <img
                            src={user?.photoURL}
                            alt=""
                            className=' rounded-full w-10 cursor-pointer '
                            title={user?.displayName}

                        />
                        : <img
                            src={profile}
                            alt=''
                            className='rounded-[50%] w-[50px] '
                            // title={Profile}
                        />
                        // <FaUserCircle className='icon'></FaUserCircle>

                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import underline from '../../assets/img/signup/underline_d.svg';
import google from '../../assets/img/signup/google.png';


const Login = () => {
    return (
        <div className='my-14'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-center">Login Now!</h1>                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm p-5  border border-[#41aae6] shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center border shadow-md py-3 rounded-md cursor-pointer'>
                                <img src={google} alt="" className='w-[30px] mr-3' />
                                <h1>Signup with google</h1>
                            </div>
                            <div className="divider">OR</div>
                            <form >
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Must be atleast 8 characters" className="input input-bordered" />


                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#41aae6] text-white border-none">Signup</button>
                                </div>
                            </form>
                            <p className='text-center'>New to JobLagbe? <Link className='text-[#41aae6]' to="/signup"> Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
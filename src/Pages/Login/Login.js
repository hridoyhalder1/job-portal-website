import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/img/signup/google.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import {  toast } from 'react-hot-toast';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/my-profile';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully!');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
            setLoginError(error.message);
        });

    }



    return (
        <div className='my-14'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-center">Login Now!</h1>
                    </div>
                    {/* max-w-sm */}
                    <div className="card flex-shrink-0 w-full  p-5  border border-[#41aae6] shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center border shadow-md py-3 rounded-md cursor-pointer'>
                                <img src={google} alt="" className='w-[30px] mr-3' />
                                <h1>Signup with google</h1>
                            </div>
                            <div className="divider">OR</div>
                            {/* form===== */}
                            <form onSubmit={handleSubmit(handleLogin)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        {...register("email", {
                                            required: "This field is required!"
                                        })}
                                        className="input input-bordered"
                                    />
                                    {errors.email && <p className='text-red-600 py-1'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"

                                        placeholder="Must be atleast 8 characters"
                                        className="input input-bordered"
                                        {...register("password", {
                                            required: 'This field is required!'
                                        })}
                                        id='mtInput'
                                    />
                                    {errors.password && <p className='text-red-600 py-1'>{errors.password?.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#41aae6] text-white border-none">Signup</button>
                                </div>
                            </form>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                            <p className='text-center'>New to JobLagbe? <Link className='text-[#41aae6]' to="/signup"> Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import underline from '../../assets/img/signup/underline_d.svg';
import google from '../../assets/img/signup/google.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './SignUp.css';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showMessage, setShowMessage] = useState(false);
    const [isValid, setIsValid] = useState({
        letter: false,
        capital: false,
        number: false,
        length: false
    });
    const handleFocus = () => {
        setShowMessage(true);
    }
    const handleBlur = () => {
        setShowMessage(false);
    }
    const handleKeyUp = (event) => {
        const value = event.target.value;

        // validate lowercase letter
        const lowerCaseLetters = /[a-z]/g;
        const hasLowerCaseLetters = value.match(lowerCaseLetters) !== null;

        // validate capital letters 
        const upperCaseLettes = /[A-Z]/g;
        const hasUpperCaseLetters = value.match(upperCaseLettes) !== null;

        // validate number
        const numbers = /[0-9]/g;
        const hasNumbers = value.match(numbers) !== null;

        // const validate length
        const hasValidLength = value.length >= 8;

        setIsValid({
            letter: hasLowerCaseLetters,
            capital: hasUpperCaseLetters,
            number: hasNumbers,
            length: hasValidLength
        });

    }

    const handleSignIn = data => {
        console.log(data);

    }




    return (
        <div className='my-14'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-center">Sign-up and apply for free</h1>
                        <img src={underline} alt="" />
                        <p className="py-6 text-center text-[#8c8d8e]">1,50,000+ companies hiring on Job Lagbe </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm p-5  border border-[#41aae6] shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center border shadow-md py-3 rounded-md cursor-pointer'>
                                <img src={google} alt="" className='w-[30px] mr-3' />
                                <h1>Signup with google</h1>
                            </div>
                            <div className="divider">OR</div>
                            <form onSubmit={handleSubmit(handleSignIn)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: "Name is required!"
                                        })}
                                        placeholder='Enter your name'
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    {errors.name && <p className='text-red-600 text-[16px] py-1'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register("email", {
                                            required: 'Email Address is required!'
                                        })}
                                        className="input input-bordered"
                                    />
                                    {errors.email && <p className='text-red-600 text-[16px] py-1'>{errors.email.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Must be atleast 8 characters"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 8, message: "Password must be 8 characters long" }
                                        })}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onKeyUp={handleKeyUp}
                                        className="input input-bordered"
                                        id='psw'

                                    />
                                    {errors.password && <p className='text-red-600 text-[16px] py-1'>{errors.password.message}</p>}

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#41aae6] text-white border-none">Signup</button>
                                </div>
                            </form>
                            <div id="message" style={{ display: showMessage ? "block" : "none" }}>
                                <p className={isValid.letter ? "valid" : "invalid"}>A lowercase letter</p>
                                <p className={isValid.capital ? "valid" : "invalid"}>A capital letter</p>
                                <p className={isValid.number ? "valid" : "invalid"}>A number</p>
                                <p className={isValid.length ? "valid" : "invalid"}>Minimum 8 characters</p>
                            </div>
                            <p className='text-center'>Already registered?<Link className='text-[#41aae6]' to="/login"> Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
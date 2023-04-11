import React, { useContext, useRef, useState } from 'react';
import underline from '../../assets/img/signup/underline_d.svg';
import google from '../../assets/img/signup/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { HiOutlineExclamationCircle } from "react-icons/hi";


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [showMessage, setShowMessage] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    // const location = useLocation();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
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

    // confirm password validation
    const password = useRef({});
    password.current = watch("password", "");


    const handleSignIn = async (data, event) => {
        alert(JSON.stringify(data));
        const form = event.target;
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success("User created Successfully");
                // navigate(from, {replace: true})
                navigate('/');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            });

    }

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign in Successfully!');
                // navigate(from, {replace: true})
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    // // facebook sign in
    // const facebookProvider = new FacebookAuthProvider();
    // const handleFacebookSignIn = () => {
    //     providerLogin(facebookProvider)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    //     .catch(err => console.log(err));
    // }

    const showPass = () => {
        const pass = document.getElementById('psw');
        if (pass.type === 'password') {
            pass.type = 'text'
        }
        else{
            pass.type = 'password'
        }
    }
    const showPasss = () => {
        const pass = document.getElementById('psww');
        if (pass.type === 'password') {
            pass.type = 'text'
        }
        else{
            pass.type = 'password'
        }
    }





    return (
        <div className='my-14'>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-center">Sign-up and apply for free</h1>
                        <img src={underline} alt="" />
                        <p className="py-6 text-center text-[#8c8d8e]">1,50,000+ companies hiring on Job Lagbe </p>
                    </div>
                    {/* max-w-sm */}
                    <div className="card flex-shrink-0 w-full  p-5  border border-[#41aae6] shadow-xl">
                        <div className="card-body">
                            <div className='flex items-center justify-center border shadow-md py-3 rounded-md cursor-pointer' onClick={handleGoogleSignIn} >
                                <img src={google} alt="" className='w-[30px] mr-3' />
                                <h1>Signup with google</h1>
                            </div>
                            <div className="divider">OR</div>

                            {/* <div className='flex items-center justify-center border shadow-md py-3 rounded-md cursor-pointer' onClick={handleFacebookSignIn} >
                                <img src={google} alt="" className='w-[30px] mr-3' />
                                <h1>Signup with Facebook</h1>
                            </div>
                            <div className="divider">OR</div> */}
                            <form onSubmit={handleSubmit(handleSignIn)}>
                                <div className="form-control ">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input
                                        type="text"
                                        {...register("name", {
                                            required: "Name is required!"
                                        })}
                                        placeholder='Enter your name'
                                        className="input input-bordered "
                                    />
                                    {errors.name && <p className='text-red-600 text-[16px] py-1 flex items-center '><HiOutlineExclamationCircle className='mr-1'/>{errors.name.message}</p>}
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
                                    {errors.email && <p className='text-red-600 text-[16px] py-1 flex items-center '><HiOutlineExclamationCircle className='mr-1'/>{errors.email.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Must be atleast 8 characters"
                                        {
                                            ...register("password", {
                                                required: "Password is required",
                                                minLength: { value: 8, message: "Password must be 8 characters long" },
                                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have lowercase, uppercase & number' }
                                            })
                                        }
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onKeyUp={handleKeyUp}
                                        className="input input-bordered"
                                        id='psww'

                                    />
                                    <div className='flex items-center'>
                                        <input type="checkbox"  className='mr-2' onClick={showPasss} /><p>Show Password</p>
                                    </div>
                                    
                                    {/* {errors.password && <p className='text-red-600 text-[16px] py-1'>{errors.password.message}</p>} */}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confrim Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name='confirm_password'
                                        // onChange={this.confirmHandlePasswordChange}
                                        placeholder="Must be atleast 8 characters"
                                        {
                                            ...register("confirm_password", {
                                                // required: "Confirm your password",
                                                validate: value =>
                                                    value === password.current || "The passwords do not match",
                                                minLength: { value: 8, message: "Password must be 8 characters long" },
                                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must have lowercase, uppercase & number' }
                                            })
                                        }
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onKeyUp={handleKeyUp}
                                        className="input input-bordered"
                                        id='psw'

                                    />
                                    <div className='flex items-center'>
                                        <input type="checkbox"  className='mr-2' onClick={showPass} /><p>Show Password</p>
                                    </div>
                                    {errors.confirm_password &&  <p className='text-red-600 text-[16px] py-1 flex items-center '><HiOutlineExclamationCircle className='mr-1'/>{errors.confirm_password.message}</p>}

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#41aae6] text-white border-none">Signup</button>
                                </div>
                            </form>
                            <div id="message" className='rounded-md' style={{ display: showMessage ? "block" : "none" }}>
                                <p className={isValid.letter ? "valid" : "invalid"}>A lowercase letter</p>
                                <p className={isValid.capital ? "valid" : "invalid"}>A capital letter</p>
                                <p className={isValid.number ? "valid" : "invalid"}>A number</p>
                                <p className={isValid.length ? "valid" : "invalid"}>Minimum 8 characters</p>
                            </div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            <p className='text-center'>Already registered?<Link className='text-[#41aae6]' to="/login"> Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
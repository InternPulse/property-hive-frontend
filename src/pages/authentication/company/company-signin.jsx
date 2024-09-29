import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import Axios
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';
import { baseurl } from './company -signup';


const CompanySignInForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(''); // State for selected role

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    // navigate('/dashboard')
    setIsSubmitted(true);
    try {
      const headers  = {
        'Content-Type' : 'application/json'
      }
      console.log(data);
      const response = await axios.post(`${baseurl}api/v1/login/` , data, {
        headers: headers
      })
      console.log(response);
      
      const refreshToken = response.data.refresh;
      const accessToken = response.data.access;
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      if (response?.status === 200) {
        navigate('/dashboard')
      }
      
      
      // const roleSelection = (await response).data.role;
      // switch (roleSelection) {
      //   case 'Admin':
      //     navigate('/admin-dashboard');
      //     break;
      //   case 'Real Estate Agent':
      //     navigate('/agent-dashboard');
      //     break;
      //   case 'Buyer':
      //     navigate('/buyer-dashboard');
      //     break;
      //   case 'Seller':
      //     navigate('/seller-dashboard');
      //     break;
      //   default:
      //     alert('Invalid role selected.');
      //     break;
      // }
  
    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  }

  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex">
        <img
          src="/user-auth-images/company1.png"
          alt="Property Search"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="w-full h-screen md:w-1/2 bg-white p-10 max-w-4xl">
        <div className="w-full max-w-md">
          <div className="text-right mb-20">
            <p>
              Don’t have an account?{' '}
              <Link to="/company-signup" className="text-teal-600 font-medium hover:text-teal-500">
                Sign Up
              </Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-start">Sign in to your account</h2>
          <p className="text-gray-500 mb-8">Please enter your details below</p>



        
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  {...register('email', registerOptions.email)}
                  className={`w-full mt-1 p-3 pr-10 border border-gray-300'
                   rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                />
              </div>
              <small className="text-red-600 text-sm mt-2">
                  {errors?.email && errors.email.message}
                </small>
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  {...register('password', registerOptions.login_password)}
                  className={`w-full mt-1 p-3 pr-10 border border-gray-300'
                  rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
                <small className="text-red-600 text-sm mt-2">
                  {errors?.login_password && errors.login_password.message}
                </small>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/forgot-password1" className="font-medium text-teal-600 hover:text-teal-500">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full p-3 text-white rounded-md shadow-sm focus:ring-4 focus:outline-none ${
                  loading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {loading ? 'Loading..' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySignInForm;
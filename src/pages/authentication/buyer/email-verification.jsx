import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../company/company -signup';
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleBackClick = () => {
    navigate('/buyer-signin');
  };

  // Email validation function

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleVerify = async (data) => {
   

     setIsLoading(true); // Start loading
    console.log(data);
    
    
    try {
      const headers  = {
        'Content-Type' : 'application/json'
      }
 
 
   

      const response = await axios.post(`${baseurl}api/v1/verify-email/` , data, {
        headers: headers
      })
    
      const message = response.data.message;

      // alert(message)
     
      
      if (message === 'Email verified successfully') {
        // localStorage.clear();
        alert('Email Verified Successfully.')
        navigate('/buyer-signin')
      }



    } catch (error) {
      console.error('Error verifying email:', error);
      setEmailError('Verification failed. Please try again.');
      alert('Too many Requests. Expected available in 397 seconds.')
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row p-4 lg:p-20 bg-gray-100">
      {/* Left side with image and lock icon */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto bg-teal-800 flex items-center justify-center relative">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url('/user-auth-images/Frame 1.png')" }}
        ></div>
      </div>

      {/* Right side with form */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 lg:p-8 bg-white">
        <button
          className="text-gray-600 text-sm flex items-center mb-4"
          onClick={handleBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <h2 className="text-3xl font-bold mb-4 mt-10">User Verification</h2>
        <p className="text-gray-500 mb-6">Please enter your details below</p>

        {/* Email input */}
        <form className="space-y-6" onSubmit={handleSubmit(handleVerify)}>
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
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700"
            >
              Valid Verification Code
            </label>
            <input
              type="number"
              placeholder="Enter Verification code"
              {...register('code', registerOptions.code)}
              className={`mt-1 block w-full px-4 py-2 border border-gray-300
               rounded-md shadow-sm focus:outline-none focus:ring-teal-600 focus:border-teal-600`}
            />

          </div>

          <small className="text-red-600 text-sm mt-2">
                  {errors?.code && errors.code.message}
                </small>

          {/* Verify button */}
          <button
            type="submit"
            className={`w-full mt-6 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>

        {/* Resend verification email */}
        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive a code? 
          <span className="text-teal-500 cursor-pointer ml-1" onClick={() => console.log('Resend code functionality')}>
            Resend verification email
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
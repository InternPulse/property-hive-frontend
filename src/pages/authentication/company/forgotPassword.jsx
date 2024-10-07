import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';
import { baseurl } from './company -signup';

const ForgotPassword1 = () => {
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading] = useState(false);
 

  const handleBackClick = () => {
    navigate('/company-signin');
  };



  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleError = (errors) => { };

  const handleForgotPassword = async (data) => {
    // navigate('/dashboard')
    setIsSubmitted(true);
    try {
      const headers  = {
        'Content-Type' : 'application/json'
      }

      const response = await axios.post(`${baseurl}api/v1/forgot-password/` , data, {
        headers: headers
      })

      console.log(response);
      
      if (response.status === 200) {
        alert('Password reset email sent. Please check your email to reset password')
        // localStorage.setItem('user-email', data?.email);
      }
    

      // const message = response.data.message;
     
      

      // if (response.data.message === 'Password reset email sent.') {
      //   alert('Password reset email sent. Please check your email to reset password')
      // }

  
    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-4 lg:p-20 bg-gray-100">
      <div className="lg:w-1/2 w-full h-64 lg:h-auto bg-teal-800 flex items-center justify-center relative">
        <div
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url('/user-auth-images/Frame 1.png')" }}
        ></div>
      </div>

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

        <h2 className="text-3xl font-bold mb-4 mt-10">Forgot Password</h2>
        <p className="text-gray-500 mb-6">Enter your email to reset your password</p>

        <form className="space-y-6" onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register('email', registerOptions.email)}
              className={`mt-1 block w-full px-4 py-2 border  'border-gray-300'
              rounded-md shadow-sm focus:outline-none focus:ring-teal-600 focus:border-teal-600`}
            />
              <small className="text-red-600 text-sm mt-2">
                  {errors?.email && errors.email.message}
                </small>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-700"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword1;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBackClick = () => {
    navigate('/company-signin');
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) && email.length <= 254; // Ensure email length is within limits
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    setEmailError('');
    setIsLoading(true);
    
    try {
      const response = await axios.post('/forgot-password-endpoint', { email });
      
      // Display a generic message regardless of email existence
      setResponseMessage('If this email is registered, a password reset link will be sent.');
    } catch (error) {
      // Optionally handle error logging here
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 border ${
                isSubmitted && emailError ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-teal-600 focus:border-teal-600`}
            />
            {isSubmitted && emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-700"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed'}
          </button>
        </form>

        {responseMessage && (
          <p className="mt-4 text-sm text-red-500">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
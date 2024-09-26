import React, { useState } from 'react';
import axios from 'axios';

const Verification = () => {
  const [code, setCode] = useState(Array(5).fill('')); // State to hold the 5-digit code
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Limit to 1 character
    setCode(newCode);

    // Move focus to the next input
    if (value && index < code.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/verify-email', { code: fullCode });
      console.log('Verification response:', response.data);
      // Handle successful verification (e.g., redirect or show a success message)
    } catch (err) {
      setError('Failed to verify code. Please try again.');
      console.error('Verification error:', err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      {/* Left Section */}
      <div className="bg-white shadow-md rounded-lg flex">
        <img
          src="/user-auth-images/Frame1.png"
          alt="Property Search"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start bg-white p-10 h-full"> {/* h-full for same height */}
        <div className="bg-white p-10 rounded-lg w-full">
          <button className="text-sm mb-4 text-gray-500">← Back</button>
          <h2 className="text-3xl font-bold mb-4 mt-20">Verify your Email</h2>
          <p className="mb-6 text-sm text-gray-600">Please enter the 5-digit code sent to your email address</p>

          {/* Error message */}
          {error && <p className="mb-4 text-red-500">{error}</p>}

          {/* Input for Code */}
          <form onSubmit={handleSubmit} className="flex space-x-6 justify-start mb-6">
            {Array(5).fill().map((_, i) => (
              <input
                key={i}
                id={`input-${i}`} // Unique ID for focus management
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                maxLength={1}
                value={code[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onFocus={(e) => e.target.select()} // Select input text on focus
              />
            ))}
            <button type="submit" className="hidden">Submit</button> {/* Hidden button for form submission */}
          </form>

          {/* Resend Code and Signup Button */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-10 mt-6">
              Didn’t receive a code? <span className="text-teal-500 cursor-pointer">Resend code</span>
            </p>
            <button type="submit" onClick={handleSubmit} className="bg-teal-900 text-white py-2 px-4 rounded-lg w-full hover:bg-teal-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
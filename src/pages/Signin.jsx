import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/user-auth-images/SignInPrompt.png")',
      }}
    >
     
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-semibold mb-4 mt-20">Sign In</h2>
        <p className="mb-8 text-gray-600">Choose an option to continue</p>

        <div className="space-y-8">
          <button
            className="w-full py-2 px-4 border border-teal-900 text-teal-900 font-semibold rounded-md hover:bg-green-50 transition"
            onClick={() => navigate('/company-signin')}
          >
            Sign In as a Company
          </button>
          <button
            className="w-full py-2 px-4 border border-teal-900 text-teal-900 font-semibold rounded-md hover:bg-green-50 transition"
            onClick={() => navigate('/buyer-signin')}
          >
            Sign In as a Buyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

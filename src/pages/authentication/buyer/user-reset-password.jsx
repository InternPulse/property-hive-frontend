import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      const response = await axios.post('/api/reset-password', { password: newPassword });
      if (response.data.success) {
        setSuccessMessage('Password reset successfully');
        setErrorMessage('');
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading to false
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      {/* Left side with image */}
      <div className="bg-white shadow-md rounded-lg flex">
        <img
          src="/user-auth-images/Frame1.png"
          alt="Lock"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right side with form */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start bg-white p-10 h-full">
        <div className="w-full max-w-md">
          <a href="/" className="text-sm text-gray-500 mb-4 inline-block">&larr; Back</a>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-20">New Password</h2>
          <p className="text-gray-500 mb-6">
            Enter your new password to get back into your account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">New Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-2">
              Password should have at least 1 uppercase letter, a lowercase letter, a number, and a special character.
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {successMessage && (
              <p className="text-green-500 text-sm mb-4">{successMessage}</p>
            )}

            <button
              type="submit"
              className={`w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Loading...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

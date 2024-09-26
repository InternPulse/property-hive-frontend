import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi'; // Error icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import Axios

const SignInForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(''); // State for selected role

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard')
    setIsSubmitted(true);
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid Email Address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Invalid Password.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      setLoading(true);

      try {
        const response = await axios.post('/api/signin', { email, password });
        console.log('Response:', response.data);

        // After successful sign-in, show role selection
        const roleSelection = prompt("Select your role (Admin, Real Estate Agent, Buyer, Seller):");
        if (roleSelection) {
          setRole(roleSelection); // Set the selected role
          
          // Redirect based on selected role
          switch (roleSelection) {
            case 'Admin':
              navigate('/admin-dashboard');
              break;
            case 'Real Estate Agent':
              navigate('/agent-dashboard');
              break;
            case 'Buyer':
              navigate('/buyer-dashboard');
              break;
            case 'Seller':
              navigate('/seller-dashboard');
              break;
            default:
              alert('Invalid role selected.');
              break;
          }
        }
      } catch (error) {
        setServerError('Invalid credentials. Please try again.');
        console.error('Error signing in:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex">
        <img
          src="/user-auth-images/Frame1.png"
          alt="Property Search"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="w-full h-screen md:w-1/2 bg-white p-10 max-w-4xl">
        <div className="w-full max-w-md">
          <div className="text-right mb-20">
            <p>
              Don’t have an account?{' '}
              <Link to="/buyer-signup" className="text-teal-600 font-medium hover:text-teal-500">
                Sign Up
              </Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12 text-start">Sign in to your account</h2>
          <p className="text-gray-500 mb-8">Please enter your details below</p>

          {serverError && <p className="text-red-500 text-sm mt-1">{serverError}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full mt-1 p-3 pr-10 border ${
                    isSubmitted && emailError ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                />
                {isSubmitted && emailError && (
                  <FiAlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                )}
              </div>
              {isSubmitted && emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full mt-1 p-3 pr-10 border ${
                    isSubmitted && passwordError ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500`}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
                {isSubmitted && passwordError && (
                  <FiAlertCircle className="absolute right-3 top-3 text-red-500" size={20} />
                )}
              </div>
              {isSubmitted && passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
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
                <a href="/forgot-password" className="font-medium text-teal-600 hover:text-teal-500">
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
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
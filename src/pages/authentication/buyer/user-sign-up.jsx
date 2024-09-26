import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const [error, setError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state for API requests

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === 'password') {
      setIsTyping(true);
      validatePassword(e.target.value);
    }

    if (e.target.name === 'confirmPassword') {
      checkPasswordMatch(e.target.value, form.password);
    }

    if (e.target.name === 'name') {
      validateName(e.target.value);
    }

    if (e.target.name === 'email') {
      validateEmail(e.target.value);
    }

    if (e.target.name === 'verificationCode') {
      setVerificationCode(e.target.value);
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    setNameError(!nameRegex.test(name) ? 'Name can only contain letters and spaces.' : '');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email) ? 'Please enter a valid email address.' : '');
  };

  const validatePassword = (password) => {
    setPasswordError({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      symbol: /[\W_]/.test(password),
    });
  };

  const isPasswordValid = () => {
    return (
      passwordError.length &&
      passwordError.uppercase &&
      passwordError.lowercase &&
      passwordError.number &&
      passwordError.symbol
    );
  };

  const checkPasswordMatch = (confirmPassword, password) => {
    setPasswordMatchError(confirmPassword !== password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid =
      form.name && !nameError &&
      form.email && !emailError &&
      isPasswordValid() &&
      form.password === form.confirmPassword;

    if (isValid) {
      try {
        setIsSubmitting(true);
        setLoading(true); // Start loading
        // Step 1: Send verification code to the user's email
        const response = await axios.post('https://api.example.com/send-verification', {
          email: form.email,
        });

        if (response.data.success) {
          console.log('Verification code sent to:', form.email);
          setEmailVerificationSent(true);
        } else {
          setError('Failed to send verification code. Please try again.');
        }
      } catch (error) {
        console.error('Error sending verification code:', error.response?.data?.message || error.message);
        setError('An error occurred while sending verification code. Please try again later.');
      } finally {
        setIsSubmitting(false);
        setLoading(false); // Stop loading
      }
    } else {
      setError('Please fill out all fields correctly.');
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();

    // Step 2: Verify the verification code
    try {
      setLoading(true); // Start loading
      const response = await axios.post('https://api.example.com/verify-code', {
        email: form.email,
        code: verificationCode,
      });

      if (response.data.success) {
        console.log('Account created successfully for:', form.email);
        setIsVerified(true);
      } else {
        setVerificationError('Invalid verification code. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying code:', error.response?.data?.message || error.message);
      setVerificationError('An error occurred during verification. Please try again later.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/user-auth-images/Frame1.png"
            alt="Property Search"
            className="w-full h-auto md:h-screen object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
          <div className="flex justify-end">
            <p className="text-gray-500">
              Already have an account? <a href="/buyer-signin" className="text-teal-600">Sign In</a>
            </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 mt-6">
            {emailVerificationSent ? 'Verify Your Email' : 'Create Account'}
          </h2>
          <form onSubmit={emailVerificationSent ? handleVerificationSubmit : handleSubmit} className="space-y-4">
            {error && <p className="text-red-600">{error}</p>}

            {/* Form Fields */}
            {!emailVerificationSent && (
              <>
                <div>
                  <label className="block text-gray-600 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter name here"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {nameError && <p className="text-red-600 text-sm mt-2">{nameError}</p>}
                </div>

                <div>
                  <label className="block text-gray-600 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {emailError && <p className="text-red-600 text-sm mt-2">{emailError}</p>}
                </div>

                <div>
                  <label className="block text-gray-600 font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {isTyping && !isPasswordValid() && (
                    <ul className="text-sm text-red-500 mt-2">
                      <li className={!passwordError.length ? 'text-red-600' : 'text-green-600'}>
                        Password should have at least 1 uppercase letter, a lowercase letter, a number, and a special character.
                      </li>
                    </ul>
                  )}
                </div>

                <div>
                  <label className="block text-gray-600 font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {passwordMatchError && (
                    <p className="text-red-600 text-sm mt-2">Passwords do not match.</p>
                  )}
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-600">
                    By signing up, you agree to the{' '}
                    <a href="#" className="text-green-600">Terms and Conditions</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded transition ${
                    !isPasswordValid() || passwordMatchError || nameError || emailError || isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700'
                  } text-white font-semibold`}
                  disabled={!isPasswordValid() || passwordMatchError || nameError || emailError || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Create Account'}
                </button>
              </>
            )}

            {emailVerificationSent && (
              <>
                <div>
                  <label className="block text-gray-600 font-semibold">Verification Code</label>
                  <input
                    type="text"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={handleChange}
                    placeholder="Enter verification code"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {verificationError && <p className="text-red-600 text-sm mt-2">{verificationError}</p>}
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded transition ${
                    verificationCode === '' || isVerified || loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700'
                  } text-white font-semibold`}
                  disabled={verificationCode === '' || isVerified || loading}
                >
                  {loading ? 'Verifying...' : 'Verify Code'}
                </button>
              </>
            )}
          </form>

          {isVerified && (
            <p className="text-green-600 mt-4">Your account has been created successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
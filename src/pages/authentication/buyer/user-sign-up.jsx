import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';

const SignUpForm = () => {



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state for API requests



  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleError = (errors) => { };

  const handleRegistration = async (data) => {
    try {
      const headers  = {
        'Content-Type' : 'application/json'
      }
      console.log(data);
      const response = axios.post(`${baseurl}api/v1/register/company` , data, {
        headers: headers
      })
      console.log(response.data);
  
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md h-full rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full h-full md:w-1/2">
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
            {/* {emailVerificationSent ? 'Verify Your Email' : 'Create Account'} */}
            Create Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(handleRegistration)}>
        

            {/* Form Fields */}

            <>
              <div>
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                  type="email"

                  {...register('email', registerOptions.email)}
                  placeholder="Enter email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />

                <small className="text-red-600 text-sm mt-2">
                  {errors?.email && errors.email.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">Password</label>
                <input
                  type="password"

                  {...register('password', registerOptions.password)}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.password && errors.password.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">First Name</label>
                <input
                  type="text"
                  // Corrected name
                  {...register('fname', registerOptions.fname)}
                  placeholder="Enter first name here"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.fname && errors.fname.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">Last Name</label>
                <input
                  type="text"
                  {...register('lname', registerOptions.lname)}
                  placeholder="Enter last name here"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.lname && errors.lname.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">Business Name</label>
                <input
                  type="text"
                  {...register('business_name', registerOptions.business_name)}
                  placeholder="Enter business name here"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.business_name && errors.business_name.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">Profile Picture</label>
                <input
                  type="text"
                  {...register('profile_picture', registerOptions.profile_picture)}
                  placeholder="Enter profile picture URL here"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.profile_picture && errors.profile_picture.message}
                </small>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold">Phone Number</label>
                <input
                  type="text"
                  {...register('phone_number', registerOptions.phone_number)}
                  placeholder="Enter phone number here"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <small className="text-red-600 text-sm mt-2">
                  {errors?.phone_number && errors.phone_number.message}
                </small>
              </div>

              {/* <div>
                  <label className="block text-gray-600 font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword" // Corrected name
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  />
                  {passwordMatchError && (
                    <p className="text-red-600 text-sm mt-2">Passwords do not match.</p>
                  )}
                </div> */}

              {/* Checkbox and submit button */}
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-600">
                  By signing up, you agree to the{' '}
                  <a href="#" className="text-green-600">Terms and Conditions</a>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded transition  bg-teal-600 hover:bg-teal-700   text-white font-semibold`}
              >
                {isSubmitting ? 'Sending...' : 'Create Account'}
              </button>
            </>




            {/* <>
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
              </> */}

          </form>

          {/* {isVerified && (
            <p className="text-green-600 mt-4">Your account has been created successfully!</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
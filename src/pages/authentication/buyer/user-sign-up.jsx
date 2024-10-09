import React, { useState , useRef} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';
import { baseurl } from '../company/company -signup';
// export const baseurl = 'https://property-hive-backend.onrender.com/'
import { useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompanySignUpForm = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state for API requests

  const { register, handleSubmit, watch ,formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  const handleError = (errors) => { };

  const handleRegistration = async (data) => {
    try {
 
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
  
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('lname', data.lname);
      formData.append('fname', data.fname);
      formData.append('profile_picture', data.profile_picture[0]); // Access the file
      formData.append('password', data.password);
      formData.append('phone_number', data.phone_number);

      console.log([...formData]); 

      const response = await axios.post(`${baseurl}api/v1/register/customer` , formData, {
        headers: headers
      })
      console.log(response);
      
      if (response.status === 201) {
        alert('Regiteration successful. Verication email sent, Please check your email')
        navigate('/email-verification')
      }
     
  
    } catch (error) {
      console.log(error);
      alert('Regiteration failed. Please insert valid credentials')

    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg h-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full h-full md:w-1/2">
          <img
            src="/user-auth-images/Frame1.png"
            alt="Property Search"
            className="w-full md:h-screen object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10">
          <div className="flex justify-end">
            <p className="text-gray-500">
              Already have an account? <a href="/buyer-signin" className="text-teal-600 font-semibold">Sign In</a>
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
                <label className="block text-gray-600 font-semibold">Profile Picture</label>
                <input
                  type="file"
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

              <div className='relative'>
                <label className="block text-gray-600 font-semibold">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}

                  {...register('password', registerOptions.password)}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
                <small className="text-red-600 text-sm mt-2">
                  {errors?.password && errors.password.message}
                </small>
              </div>

              <div className="relative">
                  <label className="block text-gray-600 font-semibold">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword" // Corrected name
                   {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                      if(watch("password") !== val){
                        return 'Password do not match'
                      }
                    }
                   })}
                    placeholder="Confirm password"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-teal-500"
                  /> 
                  <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </span>                 
                 <small className="text-red-600 text-sm mt-2">
                  {errors?.confirm_password && errors.confirm_password.message}
                </small>
                </div>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySignUpForm;
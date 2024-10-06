import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { registerOptions } from '../../../utlis/validator';
import { baseurl } from './company -signup';

const ResetPassword1 = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
    console.log(urlToken);
  }, [])
  
  const [loading, setLoading] = useState(false);

  const handleBackClick = () => {
    navigate('/company-signin');
  };

  const { register, handleSubmit, watch , formState: { errors } } = useForm();

  const handleError = (errors) => { };

  const handleResetPassword = async (data) => {
    // navigate('/dashboard')
    // setIsSubmitted(true);
    data.preventDefault();
    try {
      const headers  = {
        'Content-Type' : 'application/json'
      }
     
      const newData = {
        token : token,
        newPassword : data.password
      }
      const response = await axios.post(`${baseurl}api/v1/reset-password/` , newData, {
        headers: headers
      })
      console.log(response.data);

      if (response.data.message === 'Password has been reset.') {
        alert('Password has been reset successfully.')
      }
    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      {/* Left side with image */}
      <div className="bg-white shadow-md rounded-lg flex">
        <img
          src="/user-auth-images/Frame 1.png"
          alt="Lock"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right side with form */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start bg-white p-10 h-full">
        <div className="w-full max-w-md">
          <a href="/signin" className="text-sm text-gray-500 mb-4 inline-block">&larr; Back</a>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-20">New Password</h2>
          <p className="text-gray-500 mb-6">
            Enter your new password to get back into your account.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(handleResetPassword)}>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">New Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                {...register('password', registerOptions.password)}
              />
              <small className="text-red-600 text-sm mt-2 ml-2">
                  {errors?.password && errors.password.message}
                </small>
            </div>

 
            <div className='mb-6'>
                  <label className="block text-gray-600 font-semibold">Confirm Password</label>
                  <input
                    type="password"
                   {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                      if(watch("password") !== val){
                        return 'Password do not match'
                      }
                    }
                   })}
                    placeholder="Confirm password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                 <small className="text-red-600 text-sm mt-2 ml-2">
                  {errors?.confirm_password && errors.confirm_password.message}
                </small>
                </div>

            {/* {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {successMessage && (
              <p className="text-green-500 text-sm mb-4">{successMessage}</p>
            )} */}

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

export default ResetPassword1;



//import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { registerOptions } from '../../../utlis/validator';
// import { baseurl } from './company -signup';

// const ResetPassword1 = () => {

//   const navigate = useNavigate();
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const urlToken = window.location.search.split("=")[1];
//     setToken(urlToken || "");
//     console.log(urlToken);
//   }, [])
  
//   const [loading, setLoading] = useState(false);

//   const handleBackClick = () => {
//     navigate('/company-signin');
//   };

//   const { register, handleSubmit, watch , formState: { errors } } = useForm();

//   const handleError = (errors) => { };

//   const handleResetPassword = async (data) => {
//     // navigate('/dashboard')
//     // setIsSubmitted(true);
//     try {
//       const headers  = {
//         'Content-Type' : 'application/json'
//       }
     
//       const newData = {
//         token : data.token,
//         newPassword : data.newPassword
//       }
//       const response = await axios.post(`${baseurl}api/v1/reset-password/` , {...newData, token}, {
//         headers: headers
//       })
//       console.log(response.data);


  
//     } catch (error) {
//       setLoading(false);
//       console.log(error);

//     }
//   }

//   return (
//     <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
//       {/* Left side with image */}
//       <div className="bg-white shadow-md rounded-lg flex">
//         <img
//           src="/user-auth-images/Frame 1.png"
//           alt="Lock"
//           className="w-full h-screen object-cover"
//         />
//       </div>

//       {/* Right side with form */}
//       <div className="lg:w-1/2 flex flex-col justify-start items-start bg-white p-10 h-full">
//         <div className="w-full max-w-md">
//           <a href="/company-signin" className="text-sm text-gray-500 mb-4 inline-block">&larr; Back</a>
//           <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-20">Reset Password</h2>
//           <p className="text-gray-500 mb-6">
//             Enter your new password to get back into your account.
//           </p>

//           <form className="space-y-6" onSubmit={handleSubmit(handleResetPassword)}>

//           <div className="mb-6">  
//               <label className="block text-gray-700 font-medium mb-3">Token</label>
//               <input
//                 type="text"
//                 placeholder="Enter token"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 {...register('token', registerOptions.password)}
//               />
//               <small className="text-red-600 text-sm mt-2 ml-2">
//                   {errors?.password && errors.password.message}
//               </small>
//             </div>

//             <div className="mb-6">  
//               <label className="block text-gray-700 font-medium mb-3">New Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 {...register('password', registerOptions.newPassword)}
//               />
//               <small className="text-red-600 text-sm mt-2 ml-2">
//                   {errors?.password && errors.password.message}
//                 </small>
//             </div>

 
//             <div className='mb-6'>
//                   <label className="block text-gray-600 font-semibold">Confirm Password</label>
//                   <input
//                     type="password"
//                    {...register("confirm_password", {
//                     required: true,
//                     validate: (val) => {
//                       if(watch("password") !== val){
//                         return 'Password do not match'
//                       }
//                     }
//                    })}
//                     placeholder="Confirm password"
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   />
//                  <small className="text-red-600 text-sm mt-2 ml-2">
//                   {errors?.confirm_password && errors.confirm_password.message}
//                 </small>
//                 </div>

//             {/* {errorMessage && (
//               <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//             )}

//             {successMessage && (
//               <p className="text-green-500 text-sm mb-4">{successMessage}</p>
//             )} */}

//             <button
//               type="submit"
//               className={`w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? 'Loading...' : 'Reset Password'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword1;


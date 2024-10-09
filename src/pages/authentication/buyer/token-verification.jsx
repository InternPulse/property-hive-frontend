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
    const email = localStorage.getItem('user-email');

    const data = {
       email: email,
      code : fullCode,
    };
    console.log(data)

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


// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form'; // Import useForm and Controller from react-hook-form
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';

// const Verification = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false); 

//   // Initialize useForm hook
//   const { handleSubmit, control } = useForm({
//     defaultValues: {
//       code: Array(5).fill(''), // Default value for the code inputs
//     },
//   });

//   // Form submission handler
//   const onSubmit = async (data) => {
//     const fullCode = data.code.join(''); // Join the array to form the full code
//     setLoading(true);

//     try {
//       const headers = { 'Content-Type': 'application/json' };
//       const response = await axios.post('/api/verify-email', { code: fullCode }, { headers });

//       setLoading(false);

//       if (response.status === 200) {
//         navigate('/dashboard'); // Navigate to the dashboard on successful verification
//       }
//     } catch (err) {
//       setError('Failed to verify code. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
//       {/* Left Section */}
//       <div className="bg-white shadow-md rounded-lg flex">
//         <img
//           src="/user-auth-images/Frame1.png"
//           alt="Property Search"
//           className="w-full h-screen object-cover"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/2 flex flex-col justify-start items-start bg-white p-10 h-full">
//         <div className="bg-white p-10 rounded-lg w-full">
//           <button href="/email-verification" className="text-sm mb-4 text-gray-500">← Back</button>
//           <h2 className="text-3xl font-bold mb-4 mt-20">Verify your Email</h2>
//           <p className="mb-6 text-sm text-gray-600">Please enter the 5-digit code sent to your email address</p>

//           {/* Error message */}
//           {error && <p className="mb-4 text-red-500">{error}</p>}

//           {/* Form using React Hook Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-6 justify-start mb-6">
//             {Array(5).fill().map((_, index) => (
//               <Controller
//                 key={index}
//                 name={`code[${index}]`} // Name the inputs dynamically for each digit
//                 control={control}
//                 render={({ field }) => (
//                   <input
//                     {...field}
//                     id={`input-${index}`}
//                     className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     maxLength={1}
//                     onChange={(e) => field.onChange(e.target.value.slice(0, 1))} // Allow only 1 digit
//                     onFocus={(e) => e.target.select()} // Select text on focus
//                   />
//                 )}
//               />
//             ))}
//           </form>

//           {/* Resend Code and Signup Button */}
//           <div className="flex flex-col items-center">
//             <p className="text-sm text-gray-500 mb-10 mt-6">
//               Didn’t receive a code? <span className="text-teal-500 cursor-pointer">Resend code</span>
//             </p>
//             <button
//               type="submit"
//               onClick={handleSubmit(onSubmit)}
//               className={`bg-teal-900 text-white py-2 px-4 rounded-lg w-full hover:bg-teal-600 ${
//                 loading ? 'cursor-not-allowed' : ''
//               }`}
//               disabled={loading} // Disable button during loading
//             >
//               {loading ? 'Verifying...' : 'Verify Email'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Verification;
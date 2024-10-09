export const registerOptions = {
    fname: { required: "Name is required" },
    lname: { required: "Last name is required" },
    business_name: { required: "Business name is required" },
    profile_picture: { required: "Profile picture is required" },
    phone_number: { required: "Phone number is required" },
    email: { required: "Email is required", 
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
     },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    code: {
      required: "Verification code is required",
      length: {
        value: 5,
        message: "Code is 5 digits long"
      }
    },
    login_password: {
      required: "Password is required",

    },
    confirm_password: {
      required: "Confirm Password is required",

    }
  }
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div>
        <div className="flex justify-center items-center p-8">
        <h2>Contact Us</h2>
        </div>
      <div className="flex flex-col md:flex-row justify-between p-8 bg-black">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-600">
            Chat with us
            <br />
            If you’d prefer to chat in real time with our support team, we’re
            online Monday to Friday, whatever your time zone.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

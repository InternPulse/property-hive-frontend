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
    <div className="bg-white">
      <div className="flex justify-center items-center py-8 px-4 md:px-12">
        <h1 className="text-[#255A5D] text-3xl md:text-5xl font-bold mt-14 mb-4">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-32 items-start p-8 lg:px-20">
        
        <div className="md:w-4/5 mb-8 md:mb-0 max-w-xs text-left">
          <h2 className="text-3xl text-[#000000] font-semibold mb-2">
            Chat with us
          </h2>
          <p className="text-[#4B5353] text-2xl max-h-[6rem]  font-medium">
            If you’d prefer to chat in real time with our support team, we’re
            online Monday to Friday, whatever your time zone.
          </p>
        </div>

      
        <div className="md:w-1/2 w-[250px] h-[443px] bg-white shadow-md border-2 border-black rounded-lg p-6 flex flex-col md:ml-0 lg:ml-2  md:flex-col">
          <h3 className="text-lg text-[#255A5D] font-semibold mb-4">
            Send us a message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col flex-grow h-[443px]">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Messages"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 h-32"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-600 text-white px-3 py-3 rounded-lg hover:bg-teal-500 w-[129px]  transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

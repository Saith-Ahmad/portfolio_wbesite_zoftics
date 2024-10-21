import React from "react";

const Contact = () => {
  return (
    <div className="container py-12 px-6 my-12 w-full" id="contact">
      
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-primary active">We are eager to help you</p>
        <h2 className="heading-2 text-white text-center mb-8">Lets get in Touch!</h2>
      </div>

      <form className="bg-black bg-opacity-50 backdrop-blur-lg border-1 border-primary box_shadow p-6 rounded-lg shadow-md mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            rows={6}
            className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn_primary"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

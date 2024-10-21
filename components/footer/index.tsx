import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-lg text-white px-10 pb-6 pt-8 mt-[150px]">
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        
       
        <div className="mb-6 lg:mb-0">
          <Link href={'/'}><h4 className="heading-4 mb-4 font-bold"><span className="text-primary italic">X</span>oftics</h4></Link>
          <p className="text-para">Innovative digital solutions to grow your business.</p>
        </div>
        
       
        <div>
          <h5 className="font-semibold text-lg mb-4">Company</h5>
          <ul className="text-para">
            <li className="mb-2 hover:font-bold">
              <Link href="#about">About Us</Link>
            </li>
            <li className="mb-2 hover:font-bold">
              <Link href="#services">Services</Link>
            </li>
            <li className="mb-2 hover:font-bold">
              <Link href="#careers">Careers</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h5 className="font-semibold text-lg mb-4">Resources</h5>
          <ul className="text-para ">
            <li className="mb-2 hover:font-bold">
              <Link href="#blog">Blog</Link>
            </li>
            <li className="mb-2 hover:font-bold">
              <Link href="#case-studies">Case Studies</Link>
            </li>
            <li className="mb-2 hover:font-bold">
              <Link href="#support">Support</Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h5 className="font-semibold text-lg mb-4">Subscribe to our Newsletter</h5>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded mb-4  bg-gray-300 text-black font-semibold focus:border-none focus:outline-none"
            />
            <button className="btn_primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-para mt-8 pt-4">
        <div className="container mx-auto text-center">
          <p className="para-medium text-para">&copy; {new Date().getFullYear()} Xoftics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

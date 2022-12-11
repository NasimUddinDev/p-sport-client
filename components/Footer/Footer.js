import React from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import img from "../../public/Assets/football.png";


const Footer = () => {
  return (
    <div className="bg-secondary border-t ">
      <footer className="footer items-center p-4 bg-secondary text-white">
        <div className="items-center grid-flow-col">
          <Image className=' w-14' src={img}></Image>
          <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text uppercase">
            P-Sport
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <FaTwitter className='text-2xl text-gray-300'></FaTwitter>
          <FaFacebook className='text-2xl text-gray-300'></FaFacebook>
          <FaInstagram className='text-2xl text-gray-300'></FaInstagram>
          <FaYoutube className='text-2xl text-gray-300'></FaYoutube>
        </div>
      </footer>
      <div className="text-white">
        <p className='text-center pb-10'>Copyright © 2022 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
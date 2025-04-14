import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const SubHeader = () => {
  return (
    <div>
      <div className="md:flex  hidden ">
        <div className="w-4/12 bg-[#FDA31B] py-4 pl-28 flex items-center gap-2">
          <h3 className="text-white font-bold text-xl">Follow Us:</h3>
          <div className="text-3xl text-[#116E63] flex gap-2">
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutube />
            <FaWhatsappSquare />
          </div>
        </div>
        {/* right side */}
        <div className="w-8/12 bg-[#116E63] py-4 pr-28">
          <div className="flex px-2 space-x-5 justify-between  items-center">
            <div className="flex items-center gap-2 ">
              <GrLocation className="text-[#FDA31B] " />
              <h2 className="font-bold text-white">
                25/5 Milford Road,New York
              </h2>
              <div className="w-px h-8 bg-gray-300 "></div>
            </div>
            <div className="flex items-center gap-2 ">
              <MdOutlineMail className="text-[#FDA31B] " />
              <h2 className="font-bold text-white">support@gmail.com</h2>
              <div className="w-px h-8 bg-gray-300"></div>
            </div>
            <div className="flex justify-center items-center gap-2  ">
              <LiaPhoneVolumeSolid className="text-[#FDA31B] " />
              <h2 className="font-bold text-white leading-4">+21548645854</h2>
              <div className="w-px h-8 bg-gray-300 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

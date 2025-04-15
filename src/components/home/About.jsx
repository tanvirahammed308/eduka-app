import React from "react";
import img1 from "../../assets/img/about/about-1.jpg";
import img2 from "../../assets/img/about/about-2.jpg";
import img3 from "../../assets/img/about/about-3.jpg";
import img4 from "../../assets/img/about/about-4.svg";
import edu from "../../assets/img/about/edu.svg";
import global from "../../assets/img/about/global-education.svg";

import { FiBookOpen } from "react-icons/fi";
import { FaArrowRightLong, FaQuoteRight } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 mt-10 flex flex-col md:flex-row gap-10">
      {/* Left Side */}
      <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2 items-center md:items-start">
        {/* Main Image */}
        <div className="space-y-5">
          <img
            src={img1}
            alt="Main"
            className="w-full rounded-lg md:rounded-t-full md:rounded-b-full md:rounded-br-lg"
          />
          <div className="flex items-center gap-2 bg-[#FDA31B] py-4 px-3 rounded-full md:w-[270px]">
            <img
              src={img4}
              alt="Service icon"
              className="w-14 h-14 bg-white rounded-full p-2"
            />
            <p className="text-white font-semibold text-sm sm:text-base">
              30 Years Of Quality Service
            </p>
          </div>
        </div>

        {/* Side Images */}
        <div className="space-y-5 ">
          <div className="border-2 border-[#FDA31B] border-dashed rounded-full py-2 px-3 w-full md:w-[250px]">
            <img src={img2} alt="Side 1" className="rounded-full w-full" />
          </div>
          <img
            src={img3}
            alt="Side 2"
            className="h-[400px] rounded-full rounded-tl-lg"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 space-y-10">
        {/* Header */}
        <div className="flex items-center gap-2 border-b-4 border-[#FDA31B] w-fit">
          <FiBookOpen className="text-[#FDA31B]" />
          <h3 className="font-semibold text-[#FDA31B] text-xl">About Us</h3>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#19232B]">
            Our Education System <span className="text-[#FDA31B]">Inspires</span> You More.
          </h2>
          <p className="text-gray-600">
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humour or
            randomised words which don't look even slightly believable.
          </p>

          {/* Services & Quote */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-6 w-full">
              {/* Service 1 */}
              <div className="flex items-start gap-3">
                <img
                  src={edu}
                  alt="Edu"
                  className="w-16 h-16 bg-white rounded-full border-[8px] border-[#FDA31B]"
                />
                <div>
                  <h4 className="font-semibold text-lg">Education Services</h4>
                  <p className="text-sm text-gray-600">
                    Quality content benefits the reader over time.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-3">
                <img
                  src={global}
                  alt="Global"
                  className="w-16 h-16 bg-white rounded-full border-[8px] border-[#FDA31B]"
                />
                <div>
                  <h4 className="font-semibold text-lg">Global Education</h4>
                  <p className="text-sm text-gray-600">
                    Education reaches all corners of the globe.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#EAF2F1] px-5 py-6 relative rounded-md w-full">
              <p className="text-gray-700">
                A reader will be distracted by the content of a page when looking at its layout.
              </p>
              <FaQuoteRight className="text-[#116E63] text-3xl absolute bottom-3 right-3" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-5 border-t border-gray-300 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <button className="bg-[#FDA31B] hover:bg-[#116E63] text-white px-6 py-3 rounded-full rounded-bl-lg font-semibold flex items-center gap-2 transition duration-300">
            Discover More <FaArrowRightLong />
          </button>

          <div className="flex items-center gap-4">
            <RiCustomerService2Line className="text-4xl bg-[#116E63] text-white p-2 rounded-full" />
            <div>
              <p className="text-[#FDA31B] font-semibold text-sm">Call Now</p>
              <h3 className="text-[#116E63] font-bold text-lg">+22 08 65 8 46</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

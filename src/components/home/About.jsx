import React from "react";
import img1 from "../../assets/img/about/about-1.jpg";
import img4 from "../../assets/img/about/about-4.svg";
import img2 from "../../assets/img/about/about-2.jpg";
import img3 from "../../assets/img/about/about-3.jpg";
import { FiBookOpen } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";




import edu from "../../assets/img/about/edu.svg"
import gobal from "../../assets/img/about/global-education.svg"

const About = () => {
  return (
    <div className="w-full md:w-[1200px] md:mx-auto mt-5  md:flex gap-10">
      {/* left side  */}
      <div className="flex flex-col md:flex-row  mx-36 md:mx-0 gap-5">
        {/* side-1 */}
        <div>
          <img
            src={img1}
            alt=""
            className="h-[400px] rounded-t-full rounded-b-full rounded-br-lg"
          />
          <div className="flex items-center gap-2 bg-[#FDA31B] w-[270px] py-5 px-3 mt-5 rounded-full rounded-bl-lg">
            <img src={img4} alt="" className="w-20 bg-white rounded-full" />
            <p className="text-xl text-white font-semibold">
              30 Years Of Quality Service
            </p>
          </div>
        </div>
        {/* side-2 */}
        <div className="space-y-5">
          <div className="border-2 border-[#FDA31B] border-dashed  rounded-full py-2 px-3 w-[250px]">
            <img src={img2} alt="" className="rounded-full w-[250px]" />
          </div>
          <img
            src={img3}
            alt=""
            className="h-[400px] rounded-full rounded-tl-lg"
          />
        </div>
      </div>

      {/* right side */}
      <div className="space-y-10 px-10 md:px-0 ">
        <div className="flex items-center gap-2 border-b-4 border-[#FDA31B] w-28">
          <FiBookOpen className="text-[#FDA31B]" />
          <h3 className="font-semibold text-[#FDA31B] text-xl">About Us</h3>
        </div>
        <div className="space-y-3">
          <p className="text-5xl text-[#19232B] font-bold">
            Our Edukation System{" "}
            <span className="text-[#FDA31B]">Inspires</span> You More.
          </p>
          <p>
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don't look even slightly believable. If you are going to
            use passage.
          </p>
          <div className="md:flex ">
            <div className="gap-2 space-y-4">
            <div className="flex gap-2">
                

                <img src={edu} alt="" className="w-18 mx-auto  bg-white rounded-full border-[12px] border-[#FDA31B]"/>
                
               
                <div>
                  <h1 className="font-semibold text-xl">Edukation Services</h1>
                  <p>
                    It is a long established fact that reader will to using
                    content.
                  </p>
                </div>
              </div>
            <div className="flex gap-2">
                

                <img src={gobal} alt="" className="w-18 mx-auto  bg-white rounded-full border-[12px] border-[#FDA31B]"/>
                
               
                <div>
                  <h1 className="font-semibold text-xl">Edukation Services</h1>
                  <p>
                    It is a long established fact that reader will to using
                    content.
                  </p>
                </div>
              </div>
              
            </div>
              
            <div className="w-full md:w-[350px]  mt-5 md:mt-0">
              <div className="bg-[#EAF2F1] px-5 py-8 relative">
                <p>It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.</p>
                <div className="absolute right-2 -bottom-4">
              <FaQuoteRight className="text-[#116E63] text-4xl"/>

              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="border-t border-[#d1c7c7] ">
          <div className="mt-5 flex items-center justify-between md:justify-start gap-10 ">
            <button className="bg-[#FDA31B] px-3 py-4 flex items-center gap-2 text-white font-semibold rounded-full rounded-bl-lg hover:bg-[#116E63]">
            Discover More
            <FaArrowRightLong />

             
            </button>
            <div className="flex gap-3">
            <RiCustomerService2Line  className="text-5xl bg-[#116E63] text-white border-8 border-[#116E63]  rounded-full"/>
            <div className="">
           <p className="text-[#FDA31B] font-semibold">Call Now
           </p>
           <h3 className="text-[#116E63] font-bold">+22 08 65 8 46</h3>


            </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

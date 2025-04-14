import React, { useState } from 'react';
import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const navLinks = (
    <ul className='hidden md:flex items-center gap-5 font-bold text-[#262626]'>
      <li><Link to="/" className='hover:text-[#116E63]'>Home</Link></li>

      {/* Courses Dropdown */}
      <li className='relative group'>
        <div className='flex items-center hover:text-[#116E63] cursor-pointer'>
          Courses <IoIosArrowDown className='ml-1' />
        </div>
        <ul className='absolute top-full left-0 mt-2 bg-[#116E63] text-white border-t-4 border-[#FDA31B] shadow-md rounded w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-20'>
          <li><Link to="/courses/web" className='block px-4 py-2 hover:bg-[#0e5c53]'>Web Development</Link></li>
          <li><Link to="/courses/graphic" className='block px-4 py-2 hover:bg-[#0e5c53]'>Graphic Design</Link></li>
          <li><Link to="/courses/seo" className='block px-4 py-2 hover:bg-[#0e5c53]'>SEO</Link></li>
        </ul>
      </li>

      {/* Other desktop menu items... */}
      <li><Link to="/" className='hover:text-[#116E63]'>Contact</Link></li>
      <li><IoSearch className='text-2xl cursor-pointer hover:text-[#116E63]' /></li>
      <li>
        <button className='flex items-center gap-1 hover:bg-[#116E63] bg-[#FDA31B] px-3 py-2 text-white rounded-tr-[15px] rounded-bl-[10px]'>
          <FaPencilAlt /> Apply Now
        </button>
      </li>
    </ul>
  );

  return (
    <div className='w-full md:w-[1200px] mx-auto py-2 md:py-5 px-3 relative'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className='w-44' />
        </div>

        {/* Desktop Navigation */}
        {navLinks}

        {/* Mobile Menu Button */}
        <div className='block md:hidden'>
          <button 
            onClick={() => setOpenNav(!openNav)}
            className='text-2xl cursor-pointer focus:outline-none'
          >
            {openNav ? <IoMdClose size={28} /> : <CiMenuFries size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Left Side */}
      {openNav && (
        <div className="md:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setOpenNav(false)}
          ></div>
          
          {/* Menu Container */}
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <img src={logo} alt="logo" className='w-32' />
                <button 
                  onClick={() => setOpenNav(false)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/" 
                      className="block py-3 px-2 rounded hover:bg-gray-100"
                      onClick={() => setOpenNav(false)}
                    >
                      Home
                    </Link>
                  </li>

                  {/* Courses with submenu */}
                  <li>
                    <div 
                      className="flex justify-between items-center py-3 px-2 rounded hover:bg-gray-100 cursor-pointer"
                      onClick={() => toggleSubmenu('courses')}
                    >
                      <span>Courses</span>
                      {openSubmenu === 'courses' ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </div>
                    {openSubmenu === 'courses' && (
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>
                          <Link 
                            to="/courses/web" 
                            className="block py-2 px-2 rounded hover:bg-gray-100"
                            onClick={() => setOpenNav(false)}
                          >
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/courses/graphic" 
                            className="block py-2 px-2 rounded hover:bg-gray-100"
                            onClick={() => setOpenNav(false)}
                          >
                            Graphic Design
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/courses/seo" 
                            className="block py-2 px-2 rounded hover:bg-gray-100"
                            onClick={() => setOpenNav(false)}
                          >
                            SEO
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Add other menu items similarly */}
                  <li>
                    <Link 
                      to="/contact" 
                      className="block py-3 px-2 rounded hover:bg-gray-100"
                      onClick={() => setOpenNav(false)}
                    >
                      Contact
                    </Link>
                  </li>

                  {/* Apply Now Button */}
                  <li className="mt-4">
                    <button 
                      className="flex items-center justify-center gap-1 w-full hover:bg-[#116E63] bg-[#FDA31B] px-3 py-3 text-white rounded-tr-[15px] rounded-bl-[10px]"
                      onClick={() => setOpenNav(false)}
                    >
                      <FaPencilAlt /> Apply Now
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
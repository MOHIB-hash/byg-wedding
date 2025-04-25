import React, { useState } from "react";
import { FaHeart, FaUserAlt, FaLock, FaPaypal } from "react-icons/fa"; // Importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // For dropdown arrow

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    weddingDresses: false,
    promDress: false,
    bridesmaidDresses: false,
    specialOccasionDresses: false,
    weddingGuestDresses: false, // Added for Wedding Guest Dresses
  });

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div>
      {/* Rush Order Service Text */}
      <div className="bg-black text-white py-2 fixed text-center text-sm w-full top-0 z-50">
        Rush Order Service
      </div>

      {/* Main Navbar Section with White Background */}
      <div className="bg-white p-4 mt-[44px]">
        {" "}
        {/* Added margin-top to push down content */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              className="border border-gray-300 py-2 pl-10 pr-4 w-72"
              placeholder="Search"
            />
          </div>
          {/* Site Title */}
          <h1 className="italic">BYG Wedding Dress</h1>
          {/* User Account and Login/Sign Up Icons */}
          <div className="flex items-center space-x-6">
            <FaHeart className="text-black" />
            <div className="relative flex items-center">
              <span className="text-gray-700 mr-2">United States (USD $)</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </div>
            <div className="flex space-x-6">
              <FaUserAlt className="text-gray-700" />
              <FaLock className="text-gray-700" />
            </div>
          </div>
        </nav>
      </div>

      {/* Navigation for Categories */}
      <nav className="hidden md:flex space-x-6 bg-white mt-6">
        <ul className="flex space-x-6 text-[10px]">
          <li className="relative hover:text-gray-600 group">
            <a href="#">HOME</a>
          </li>
          <li
            className="relative hover:text-gray-600 group"
            onMouseEnter={() => toggleDropdown("weddingDresses")}
            onMouseLeave={() => toggleDropdown("weddingDresses")}
          >
            <a href="#">
              WEDDING DRESSES
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 transform transition-transform group-hover:rotate-180"
              />
            </a>
            {isDropdownOpen.weddingDresses && (
              <ul className="absolute bg-white text-black p-4 mt-2 shadow-lg rounded-md w-48">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                <li>
                  <a href="#">Option 3</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative hover:text-gray-600 group"
            onMouseEnter={() => toggleDropdown("promDress")}
            onMouseLeave={() => toggleDropdown("promDress")}
          >
            <a href="#">
              PROM DRESS
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 transform transition-transform group-hover:rotate-180"
              />
            </a>
            {isDropdownOpen.promDress && (
              <ul className="absolute bg-white text-black p-4 mt-2 shadow-lg rounded-md w-48">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative hover:text-gray-600 group"
            onMouseEnter={() => toggleDropdown("bridesmaidDresses")}
            onMouseLeave={() => toggleDropdown("bridesmaidDresses")}
          >
            <a href="#">
              BRIDESMAID DRESSES
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 transform transition-transform group-hover:rotate-180"
              />
            </a>
            {isDropdownOpen.bridesmaidDresses && (
              <ul className="absolute bg-white text-black p-4 mt-2 shadow-lg rounded-md w-48">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative hover:text-gray-600 group"
            onMouseEnter={() => toggleDropdown("specialOccasionDresses")}
            onMouseLeave={() => toggleDropdown("specialOccasionDresses")}
          >
            <a href="#">
              SPECIAL OCCASION DRESSES
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 transform transition-transform group-hover:rotate-180"
              />
            </a>
            {isDropdownOpen.specialOccasionDresses && (
              <ul className="absolute bg-white text-black p-4 mt-2 shadow-lg rounded-md w-48">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            )}
          </li>
          {/* WEDDING GUEST DRESSES added */}
          <li
            className="relative hover:text-gray-600 group"
            onMouseEnter={() => toggleDropdown("weddingGuestDresses")}
            onMouseLeave={() => toggleDropdown("weddingGuestDresses")}
          >
            <a href="#">
              WEDDING GUEST DRESSES
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 transform transition-transform group-hover:rotate-180"
              />
            </a>
            {isDropdownOpen.weddingGuestDresses && (
              <ul className="absolute bg-white text-black p-4 mt-2 shadow-lg rounded-md w-48">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            )}
          </li>
          {/* READY TO SHIP with ship 24H inside it */}
          <li className="relative hover:text-gray-600">
            <a href="#" className="relative flex items-center text-xs">
              <span className="ml-2 text-xs">READY TO SHIP</span>
              {/* Badge positioned higher above the text */}
              <span className="absolute top-[-17px] right-[-6px] text-[6px] bg-red-500 text-white px-1 py-0.5 rounded-full">
                ship 24H
              </span>
            </a>
          </li>

          <li className="hover:text-gray-600">
            <a href="#">COLOR SWATCH</a>
          </li>
        </ul>
      </nav>
      <div className="border-t border-gray-300 mt-6"></div>
      <div>
        {/* Interactive Title */}
        <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Home / Short Wedding Dresses
        </h1>
        <h1 className="text-3xl font-bold mt-4 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          Short Wedding Dresses
        </h1>

        {/* Description Text */}
        <h6 className="text-[10px] text-gray-700 mt-4 leading-relaxed">
          Swap tradition for trend with chicloth.com's Short Wedding Dresses!
          These dresses offer a modern twist on bridal style, perfect for the
          fashion-forward bride. Available in diverse designs and high-quality
          fabrics, they blend charm and comfort. Ideal for intimate weddings or
          courthouse nuptials. Shop Short Wedding Dresses now and tie the knot
          in style!
        </h6>

        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2">
            <FaPaypal className="text-blue-600 text-xl" />
            <span className="text-blue-600 text-sm hover:text-blue-700 transition-colors duration-300 cursor-pointer underline">
              Pay in 4 interest-free payments on purchases of $30-$1,500.
            </span>
            <span className="text-blue-400 text-[10px] hover:text-blue-500 cursor-pointer transition-colors duration-300 underline">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

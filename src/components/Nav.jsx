// import { useState } from "react";
// import logo from "../assets/images/logo.svg";
// import iconArrowLight from "../assets/images/iconArrowLight.svg";
// import iconHamburger from "../assets/images/iconHamburger.svg";
// import { navLinks } from "../constants";
// import Button from "../components/Button";

// const Nav = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const handleDropdownToggle = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//     console.log(dropdownOpen );
//   };

//   const hamburger = document.querySelector('#hamburger');
//     const mobileMenu = document.querySelector('#mobile-menu');

//     hamburger.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });

//   return (
//     <header className="md:lg:padding-x absolute z-10 flex w-full items-center px-8 py-16 sm:space-x-16">
//       <img src={logo} alt="logo" width={100} height={100} />
//       <nav className="group flex w-full">
//         <div className="hidden w-full flex-1 items-center justify-between md:flex">
//           <ul className="flex space-x-10">
//             {navLinks.map((link, index) => (
//               <li key={index} className="nav relative h-full w-full">
//                 <a
//                   href="#"
//                   className="menu-hover flex w-fit items-center justify-start space-x-2 font-overpass text-white"
//                   onClick={() => handleDropdownToggle(index)}
//                 >
//                   <span className="">{link.label}</span>
//                   <img src={iconArrowLight} alt="arrow" />
//                 </a>
//                 {dropdownOpen === index && (
//                   <div className="invisible absolute left-0 top-12 flex w-[130px] flex-col space-y-2 rounded-lg bg-white px-6 py-5 text-very-dark-black-blue shadow-xl group-hover:visible">
//                     {link.subLinks.map((subLink, subIndex) => (
//                       <a
//                         key={subIndex}
//                         href={subLink.href}
//                         className="w-fit cursor-pointer font-overpass text-sm duration-200 hover:font-bold"
//                       >
//                         {subLink && subLink}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="flex space-x-4">
//             <button className="text-1xl font-overpass text-white">Login</button>
//             <Button
//               className="mt-0"
//               bgColor="bg-white"
//               fontColor="text-primary-light-red"
//               title="Sign Up"
//               hoverBgColor={"hover:bg-primary-very-light-red"}
//               hoverForegroundColor={"hover:text-white"}
//               borderColor={"hover:border-primary-very-light-red"}
//             />
//           </div>
//         </div>
//         <div className="flex w-full items-end justify-end md:hidden">
//           <img src={iconHamburger} alt="hamburger" width={25} height={25} />
//         </div>
//       </nav>

//     </header>
//   );
// };

// export default Nav;

import { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconArrowLight from "../assets/images/iconArrowLight.svg";
import iconHamburger from "../assets/images/iconHamburger.svg";
import closeIcon from "../assets/images/iconClose.svg"; // Import close icon
import { navLinks } from "../constants";
import Button from "../components/Button";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Submenu toggle state

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <header className="md:lg:padding-x absolute z-10 flex w-full items-center px-8 py-16 sm:space-x-16">
      <img src={logo} alt="logo" width={100} height={100} />
      <nav className="flex w-full items-center justify-end">
        {/* Desktop Navigation */}
        <div className="hidden w-full flex-1 items-center justify-between md:flex">
          <ul className="flex space-x-10">
            {navLinks.map((link, index) => (
              <li key={index} className="nav group relative">
                <a
                  href="#"
                  className="menu-hover flex items-center space-x-2 font-overpass text-white"
                >
                  <span>{link.label}</span>
                  <img
                    src={iconArrowLight}
                    alt="arrow"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </a>
                <div className="invisible absolute left-0 mt-2 flex w-[150px] flex-col rounded-lg bg-white px-4 py-3 text-black shadow-lg group-hover:visible">
                  {link.subLinks.map((subLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subLink.href}
                      className="block px-2 py-1 font-overpass text-sm hover:font-bold hover:duration-200"
                    >
                      {subLink && subLink}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <button className="font-overpass text-xl text-white hover:text-gray-300">
              Login
            </button>
            <Button
              className="mt-0"
              bgColor="bg-white"
              fontColor="text-primary-light-red"
              title="Sign Up"
              hoverBgColor="hover:bg-primary-very-light-red"
              hoverForegroundColor="hover:text-white"
              borderColor="hover:border-primary-very-light-red"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <img
              src={mobileMenuOpen ? closeIcon : iconHamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-8 top-32 flex w-10/12 flex-col rounded-xl bg-zinc-50 p-4 drop-shadow-2xl md:hidden">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="mb-1">
                <a
                  href="#"
                  className="text-bold flex items-center justify-center text-black hover:text-gray-300"
                  onClick={() => handleSubMenuToggle(index)}
                >
                  <span className="p-2">{link.label}</span>
                  <img
                    src={iconArrowLight}
                    alt="arrow"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </a>
                {activeSubMenu === index && (
                  <div className="bg-gray-200 py-4 text-bold rounded-md  mt-2 flex flex-col items-center justify-center space-y-4 text-[12px]">
                    {link.subLinks.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.href}
                        className="block text-gray-800 hover:text-white"
                      >
                        {subLink && subLink}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <hr className="mt-4" />
          <div className="flex flex-col items-center space-y-4 p-4">
            <button className="font-overpass text-xl text-gray-800 hover:text-gray-300">
              Login
            </button>
            <Button
              className="mt-0"
              bgColor="backgroundImageRed"
              fontColor="text-white"
              title="Sign Up"
              hoverBgColor="hover:bg-primary-very-light-red"
              hoverForegroundColor="hover:text-white"
              borderColor="hover:border-primary-very-light-red"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

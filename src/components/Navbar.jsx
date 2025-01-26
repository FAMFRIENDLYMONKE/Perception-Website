import React, { useEffect, useState } from 'react'; 

import { NavLink, useNavigate, useLocation,Link } from "react-router-dom"; 
import logo from '../assets/logo.png'; 
import SponserMarque from './SponserMarque';

const Navbar = ({ name }) => {

    const [hasBackground, setHasBackground] = useState(false);

    const navigate = useNavigate();
    const location=useLocation();

    // Handle scroll to toggle navbar background
    useEffect(() => {
        const handleScroll = () => {
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            if (window.scrollY > vh) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (sectionId) => {
        if(location.pathname!='/'){
            navigate('/');
        }
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeMenu();
    };

    return (
        <header
            className={`fixed py-2 px-4 top-0 z-50 w-full transition-colors duration-300 ${
                hasBackground ? "bg-[#000212]" : "bg-transparent"
            }`}
        >
            <nav className="flex flex-row justify-between items-center lg:p-5 md:p-4 sm:p-5">
                <div id="header-logo" className="relative tracking-wider">
                    <NavLink to="/" className="flex cursor-pointer">
                        <img src={logo} alt="Perception" className={`max-sm:px-2 max-sm:mt-2 h-10 sm:h-14 visible `} />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div
                    className={`items-center justify-between flex w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="nav-list flex space-x-3 sm:space-x-8 font-bold">
                        <li>
                            <button
                                
                                onClick={() => navigate("/events")}
                                
                                className="nav-links block text-white rounded md:text-lg hover:text-violet-600 md:bg-transparent cursor-pointer"
                            >
                                Events
                            </button>
                        </li>
                        {/* <li>
                            <button
                                
                                onClick={() => handleNavigation("section3")}
                                className="nav-links block text-white rounded md:text-lg hover:text-violet-600 md:bg-transparent cursor-pointer"
                            >
                                Our Sponsors
                            </button>
                        </li> */}
                        {/* <li>
                            <button
                                onClick={() => handleNavigation("section4")}
                                className="nav-links block text-white rounded md:text-lg hover:text-violet-600 md:bg-transparent cursor-pointer"
                            >
                                About Us
                            </button>
                        </li> */}
                        <li>
                            <button
                                onClick={() => navigate("/merch")}
                                className="nav-links block text-white rounded md:text-lg hover:text-violet-600 md:bg-transparent cursor-pointer"
                            >
                                Merch
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => window.open("https://drive.google.com/file/d/1XghSEiR2DY2gH_GjW_SpJ3Ei8XdaINvQ/view?usp=sharing", "_blank")}
                                className="nav-links block text-white rounded md:text-lg hover:text-violet-600 md:bg-transparent cursor-pointer"
                            >
                                Brochure
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

// import React from 'react';  
// import { NavLink } from "react-router-dom"; 
// import logo from '../assets/logo.png'; 

// const Navbar = () => {
//   return (
//     <div className="w-full fixed z-50">
//       <nav
//         className="h-15 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mx-[9vw] my-[3vmax] max-w-[400px]:mx-[1vw] custom-mx"
//         id="navbar"
//       >
//         <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
//           {/* Logo */}
//           <NavLink
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
//           >
//             <img src={logo} className="h-8" alt="navbarlogo" />
//           </NavLink>

//           {/* Navigation Links */}
//           <ul className="flex font-semibold text-lg space-x-8">
//             <li>
//               <NavLink
//                 to="/events"
//                 className="nav-links text-white rounded hover:bg-gray-900 cursor-pointer"
//               >
//                 Events
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/merch"
//                 className="nav-links text-white rounded hover:bg-gray-900 cursor-pointer"
//               >
//                 Merch
//               </NavLink>
//             </li>
//             <li>
//               <button
//                 onClick={() =>
//                   window.open(
//                     "https://drive.google.com/file/d/1XghSEiR2DY2gH_GjW_SpJ3Ei8XdaINvQ/view?usp=sharing",
//                     "_blank"
//                   )
//                 }
//                 className="nav-links text-white rounded hover:bg-gray-900 cursor-pointer"
//               >
//                 Brochure
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

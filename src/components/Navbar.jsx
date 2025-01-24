import React, { useEffect, useState } from 'react'; 

import { NavLink, useNavigate, useLocation,Link } from "react-router-dom"; 
import logo from '../assets/logo.png'; 
import SponserMarque from './SponserMarque';

const Navbar = ({ name }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "" : "hidden";
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
    };

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

    // const handleNavigation = (section) => {
    //     navigate("/", { state: { section } });
    //     closeMenu();
    // };

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
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
                hasBackground ? "bg-[#000212]" : "bg-transparent"
            }`}
        >
            <nav className="flex flex-row justify-between items-center lg:p-5 md:p-4 sm:p-5">
                <div id="header-logo" className="relative tracking-wider">
                    <NavLink to="/" className="flex cursor-pointer">
                        <img src={logo} alt="Perception" className={`max-sm:px-2 max-sm:mt-2 h-10 sm:h-14 ${isMenuOpen ? 'hidden' : 'visible'}`} />
                    </NavLink>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className={`text-white md:hidden px-2 ${isMenuOpen ? 'hidden' : 'visible'}`}
                    aria-label="Toggle mobile menu"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <div
                    className={`items-center justify-between ${
                        isMenuOpen ? "flex" : "hidden"
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="nav-list hidden md:flex space-x-8 font-bold">
                        <li>
                            <button
                                
                                onClick={() => navigate("/events")}
                                
                                className="nav-links block text-white rounded hover:text-purple-400 md:bg-transparent cursor-pointer"
                            >
                                Explore Events
                            </button>
                        </li>
                        {/* <li>
                            <button
                                
                                onClick={() => handleNavigation("section3")}
                                className="nav-links block text-white rounded hover:text-purple-400 md:bg-transparent cursor-pointer"
                            >
                                Our Sponsors
                            </button>
                        </li> */}
                        {/* <li>
                            <button
                                onClick={() => handleNavigation("section4")}
                                className="nav-links block text-white rounded hover:text-purple-400 md:bg-transparent cursor-pointer"
                            >
                                About Us
                            </button>
                        </li> */}
                        <li>
                            <button
                                onClick={() => navigate("/merch")}
                                className="nav-links block text-white rounded hover:text-purple-400 md:bg-transparent cursor-pointer"
                            >
                                Merch
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("section5")}
                                className="nav-links block text-white rounded hover:text-purple-400 md:bg-transparent cursor-pointer"
                            >
                                Brochure
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            {(
                <div
                    id="mobile-menu"
                    className={`fixed transition ease-in-out duration-500 inset-0 z-50 ${isMenuOpen?"translate-x-0":" delay-200 translate-x-full"}`}
                >
                    <div
                        className={`absolute inset-0 transition transition-color bg-black duration-300 ease-in-out opacity-0 ${isMenuOpen ? " delay-500 opacity-50" : "opacity-0"}`}
                        onClick={closeMenu}
                    ></div>
                    <div className="absolute right-0 top-0 h-full w-64 bg-[#000212] text-white shadow-lg">
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <h3 id="heading" className="mt-4 ml-4 text-lg font-bold">MENU</h3>
                            <button
                                onClick={closeMenu}
                                className="mt-2 mr-2 rounded-full hover:bg-gray-800 flex"
                            >
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col p-4">
                            <button
                                onClick={() => navigate("/events")}
                                className="py-3 px-4 hover:text-purple-400 text-white "
                            >
                                Explore Events
                            </button>
                            <button
                                onClick={() => handleNavigation("/merch")}
                                className="py-3 px-4 hover:text-purple-400 text-white "
                            >
                                Merch
                            </button>
                            <button
                                onClick={() => navigate("/events")}
                                className="py-3 px-4 text-white hover:text-purple-400"
                            >
                                Brochure
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
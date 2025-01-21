import React, { useEffect, useState } from 'react'; 

import { NavLink, useNavigate, useLocation,Link } from "react-router-dom"; 
import logo from '../assets/logo.png'; 
// import { GrMenu } from "react-icons/gr";

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

    // Handle scroll to toggle navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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

    const handleNavigation = (section) => {
        navigate("/", { state: { section } });
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
                        <img src={logo} alt="Perception" className="h-10 sm:h-14" />
                    </NavLink>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className="text-white hover:text-purple-400 md:hidden"
                    aria-label="Toggle mobile menu"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                            className="h-6 w-6"
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
                                
                                className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                            >
                                Explore Events
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("section3")}
                                className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                            >
                                Our Sponsors
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("section4")}
                                className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                            >
                                About Us
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation("section5")}
                                className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                            >
                                FAQs
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 transform translate-x-0 transition-transform duration-300 ease-in-out z-50"
                >
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={closeMenu}
                    ></div>
                    <div className="absolute left-0 top-0 h-full w-64 bg-[#000212] text-white shadow-lg">
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <h3 className="text-lg font-bold">Menu</h3>
                            <button
                                onClick={closeMenu}
                                className="p-2 rounded-full hover:bg-gray-800"
                            >
                                <svg
                                    className="w-6 h-6"
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
                                onClick={() => handleNavigation("section2")}
                                className="py-3 px-4 text-white hover:bg-purple-400 rounded-md"
                            >
                                Explore Events
                            </button>
                            <button
                                onClick={() => handleNavigation("section3")}
                                className="py-3 px-4 text-white hover:bg-purple-400 rounded-md"
                            >
                                Our Sponsors
                            </button>
                            <button
                                onClick={() => handleNavigation("section4")}
                                className="py-3 px-4 text-white hover:bg-purple-400 rounded-md"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => handleNavigation("section5")}
                                className="py-3 px-4 text-white hover:bg-purple-400 rounded-md"
                            >
                                FAQs
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

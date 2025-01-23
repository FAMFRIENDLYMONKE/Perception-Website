import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaWikipediaW, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="bg-[#000212] mt-10 text-white flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-start gap-12">
                {/* Footer Left */}
                <div id="footer-left" className="flex flex-col gap-4 max-w-md">
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <img src={logo} className="w-[50px]" alt="footerlogo" />
                        </Link>
                        <div id="footer-text" className="text-justify font-oswald w-50">
                            Igniting Innovation at <br /> Odisha University of Technology & Research
                        </div>
                    </div>
                    <ul className="flex items-center space-x-3 mt-4 margin-auto">
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Odisha_University_of_Technology_and_Research"
                                title="Wikipedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                            >
                                <FaWikipediaW className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/OUTRuniversity/"
                                title="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                            >
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/outruniversity/"
                                title="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/school/outruniversity/"
                                title="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                            >
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Footer Right */}
                <div id="footer-right" className="flex flex-nowrap gap-12 justify-center md:justify-end text-right md:gap-80 lg:gap-24">
                    <div>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                target="_blank"
                                    href="https://www.outr.ac.in"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    College Website
                                </a>
                            </li>
                            <li>
                                <a
                                target="_blank"
                                    href="https://www.perceptionoutr.in"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Perception 2k24
                                </a>
                            </li>
                            <li>
                                <a
                                target="_blank"
                                    href="mailto:secretarytechnical@gmail.com"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://maps.app.goo.gl/Vrb3Gwfb9h7vJGoC7"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    How To Reach
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href=""
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Become our Partner
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <hr className="border-t border-gray-600" />
            <div className="text-center mt-4">
                <p className="text-sm">© 2025 Perception. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="bg-[#000212] mt-10 text-white flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-start gap-12">
                {/* Footer Left */}
                <div id="footer-left" className="flex flex-col gap-4 max-w-md">
                    <div className="flex items-center gap-3">
                        <Link to="/">
                            <img src={logo} className="w-11" alt="footerlogo" />
                        </Link>
                        <div id="footer-text" className="text-justify font-oswald">
                            Perception 2K25: Igniting Innovation at Odisha University of Technology & Research
                        </div>
                    </div>
                    <ul className="flex items-center space-x-3 mt-4">
                        <li>
                            <a
                                href="https://twitter.com"
                                title="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                            >
                                <FaTwitter className="w-4 h-4" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://facebook.com"
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
                                href="https://instagram.com"
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
                                href="https://linkedin.com"
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
                <div id="footer-right" className="flex flex-wrap gap-12 justify-end text-right">
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase">Company</p>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase">Help</p>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Delivery Details
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600 no-underline"
                                >
                                    Privacy Policy
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
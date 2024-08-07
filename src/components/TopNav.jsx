import React from 'react';
import { FaHome, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-lg font-bold">JPG to PDF Converter</div>
                <nav className="flex space-x-4 md:space-x-6">
                    <a href="#" className="flex items-center hover:text-gray-400 transition-colors">
                        <FaHome className="mr-1 md:mr-2" /> Home
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 transition-colors">
                        <FaGithub className="mr-1 md:mr-2" /> GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 transition-colors">
                        <FaLinkedin className="mr-1 md:mr-2" /> LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 transition-colors">
                        <FaTwitter className="mr-1 md:mr-2" /> Twitter
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default TopNav;

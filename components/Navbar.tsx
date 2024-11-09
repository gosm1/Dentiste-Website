'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '@/assets/logo1212.png'

const Navbar = () => {
    const [nav, setNav] = useState(false); // State to handle mobile menu

    const toggleMenu = () => {
        setNav(!nav); // Toggle menu visibility
    };

    const navItems = [
        { id: 1, text: 'Home' , link: '/' },
        { id: 2, text: 'À Propos' , link: '/#apropos'},
        { id: 3, text: 'Pourquoi nous' , link: '/#why-us'},
        { id: 4, text: 'Avant-Après' , link: '/#après-avant'},
        
    ];

    return (
        <nav className="z-[60] top-0 fixed bg-white 0 w-full py-3">
            <div className="container mx-auto px-4 flex justify-between items-center h-16 text-white">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <h1 className='bg-gradient-to-r from-ggreen via-bgreen to-bblue text-transparent bg-clip-text text-3xl font-bold'>Léon Durand</h1>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.slice(0, 4).map(item => (
                        <li key={item.id} className="text-gray-800 text-sm lg:text-base font-medium hover:text-bblue transition-all duration-500 cursor-pointer">
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))}
                    <li>
                    <a href='/rendez-vous'>
                        <button className="relative inline-block px-6 py-3 text-black font-medium rounded-lg bg-gradient-to-r from-ggreen to-bgreen">
                            Prendre rendez-vous
                        </button>
                    </a>
                    
                    </li>
                </ul>

                {/* Mobile Navigation Toggle */}
                <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
                    {nav ? <AiOutlineClose className='text-black' size={24} /> : <AiOutlineMenu className='text-black' size={24} />}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={`${
                    !nav ? "hidden" : "flex-col"
                    } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[290px] rounded-xl sidebar`}
            >
                {navItems.slice(0, 4).map(item => (
                    <li key={item.id} className="p-4 border-b border-gray-600 cursor-pointer hover:text-purple transition duration-300">
                        <a href={item.link}>{item.text}</a>
                    </li>
                ))}
                <li className="pt-6">
                    {/* Change the button to an anchor tag for proper navigation */}
                    <a href='/rendez-vous' className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                    <button className="relative inline-block px-6 py-3 text-black font-medium rounded-lg bg-gradient-to-r from-ggreen to-bgreen">
                        Prendre rendez-vous
                    </button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

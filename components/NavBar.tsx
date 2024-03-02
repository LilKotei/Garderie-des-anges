import React from 'react';
import Link from 'next/link';
import "../app/globals.css";

const Navbar = () => {
    return (
        <div className='shadow-2xl fixed w-full z-50 bg-white'>
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex-shrink-0">
                            <img className="h-20 w-30" src="/images/Logo.jpg" alt="Logo" />
                        </div>
                        <div className="md:hidden">
                            <button className="text-gray-800 hover:text-gray-500">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 7a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm1 5a1 1 0 100 2h18a1 1 0 100-2H1z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:flex items-center justify-center flex-grow">
                            <div className="ml-10 flex items-baseline space-x-12"> 
                                <Link href="/"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Acceuil</div></Link> 
                                <Link href="/activities"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Nos activités</div></Link> 
                                <Link href="/location"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Localisation</div></Link> 
                                <Link href="/pricing"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Nos tarifs</div></Link> 
                                <Link href="/about"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">À propos</div></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
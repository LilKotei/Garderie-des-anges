import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <img className="h-20 w-30" src="/images/Logo.jpg" alt="Logo" />
                    </div>
                    <div className="flex items-center flex-grow justify-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-12"> 
                                <Link passHref href="/"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Acceuil</div></Link> 
                                <Link passHref href="/activities"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Nos activités</div></Link> 
                                <Link passHref href="/location"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Localisation</div></Link> 
                                <Link passHref href="/pricing"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">Nos tarifs</div></Link> 
                                <Link passHref href="/about"><div className="text-blue-900 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 text-lg pb-3 font-medium cursor-pointer">À propos</div></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
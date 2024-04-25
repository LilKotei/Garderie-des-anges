import Link from "next/link";
import React from "react";

// Icons can be from any icon library you prefer
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

type FooterProps = {
  companyName: string;
  year: number;
};

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="bg-gray-100 text-center lg:text-left mt-10 mb-0">
      <div className="container p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-autos">
          <div className="mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-2.5 text-blue-900">Liens utiles</h5>
            <ul className="list-none mb-0">
              <li>
                <Link href="/services" className="text-blue-900 hover:text-blue-700">Activités</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-blue-900 hover:text-blue-700">Tarifs</Link>
              </li>
              <li>
                <Link href="/location" className="text-blue-900 hover:text-blue-700">Localisation</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-2.5 text-blue-900">Contacts</h5>
            <ul className="list-none mb-0">
              <li>
                <span className="text-blue-900 hover:text-blue-700">+225 05 05 93 11 06 / +225 07 78 01 53 61 / +225 01 40 40 66 85</span>
              </li>
              <li>
                <span className="text-blue-900 hover:text-blue-700">Kebemarcelline7@gmail.com</span>
              </li>
            </ul>
          </div>

          
        </div>
      </div>

      <div className="text-blue-900 text-center p-4 bg-gray-200">
        © {year} {companyName}. All rights reserved.
        <div className="flex flex-wrap justify-center">
            Designed by<span className="ml-1"><FaLinkedin className="mx-auto mt-1"/></span>  <span><a href="https://www.linkedin.com/in/ib-kebe/">Ibrahim Kebe</a></span>
        </div> 
      </div>
      

    </footer>
  );
};

export default Footer;

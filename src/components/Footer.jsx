import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
                         <div className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-sm">SM</span>
               </div>
               <span className="text-lg font-bold">SeekMedicine</span>
             </div>
            <p className="text-gray-300 text-sm">
              Empowering healthcare through innovative technology solutions for pharmacies and patients.
            </p>
                         <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                 <Facebook size={20} />
               </a>
               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                 <Twitter size={20} />
               </a>
               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                 <Linkedin size={20} />
               </a>
               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                 <Instagram size={20} />
               </a>
             </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                             <li>
                 <Link to="/products" className="hover:text-blue-400 transition-colors">
                   SAS Pharma Suite
                 </Link>
               </li>
               <li>
                 <Link to="/products" className="hover:text-blue-400 transition-colors">
                   SeekMedicine App
                 </Link>
               </li>
               <li>
                 <Link to="/products" className="hover:text-blue-400 transition-colors">
                   AI Health Assistant
                 </Link>
               </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
                             <li>
                 <Link to="/about" className="hover:text-blue-400 transition-colors">
                   About Us
                 </Link>
               </li>
               <li>
                 <Link to="/impact" className="hover:text-blue-400 transition-colors">
                   Our Impact
                 </Link>
               </li>
               <li>
                 <Link to="/contact" className="hover:text-blue-400 transition-colors">
                   Contact Us
                 </Link>
               </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
                             <div className="flex items-center space-x-2">
                 <Mail size={16} className="text-blue-400" />
                 <span>info@seekmedicine</span>
               </div>
               <div className="flex items-center space-x-2">
                 <Phone size={16} className="text-blue-400" />
                 <span>0920079070</span>
               </div>
               <div className="flex items-start space-x-2">
                 <MapPin size={16} className="text-blue-400 mt-1" />
                 <span>123 Healthcare Ave, Suite 100<br />Medical District, MD 12345</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SeekMedicine. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

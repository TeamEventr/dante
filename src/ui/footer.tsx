import { Link } from "@tanstack/react-router";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Footer Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link 
            to="/" 
            className="font-gothic text-center text-4xl tracking-widest text-secondary"
          >
            EVENTR
          </Link>
          <p className="text-gray-400 text-sm mt-2">Empowering your experience.</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            {/* <li><Link to="/register" className="hover:text-white">Sign Up</Link></li> */}
            <li><Link to="/host/join" className="hover:text-white">Become a Host</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:Hello.eventr@gmail.com" className="hover:text-white">Hello.eventr@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Phone className="w-4 h-4" />
            <span>+91 6363345104</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Jp nagar, Bangalore</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/eventrco.in?igsh=MTZpNG11Njg5dm1paQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/eventrcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EVENTR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

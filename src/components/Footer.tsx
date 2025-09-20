import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
              Tohfaazz
            </h3>
            <p className="text-sage-green mb-6 max-w-md">
              Premium curated gifts for corporates, weddings, and parties. We specialize in 
              creating memorable experiences through thoughtfully selected gift collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-green hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-green hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-green hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sage-green hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sage-green hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sage-green hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-green hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sage-green">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-sage-green">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@tohfaazz.com</span>
              </li>
              <li className="flex items-start text-sage-green">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-green/30 mt-8 pt-8 text-center">
          <p className="text-sage-green">
            © 2024 Tohfaazz. All rights reserved. | Crafted with care for premium gifting experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
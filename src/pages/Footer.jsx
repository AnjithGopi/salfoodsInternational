
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Food Distribution",
    "Cold Storage",
    "Quality Control",
    "Customer Support"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Sal Foods <span className="text-[#E5E1DA]">International</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Your trusted partner for premium food distribution services across the UAE and beyond. 
                Connecting quality suppliers with retailers since 1998.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#E5E1DA]" size={20} />
                <div className="text-gray-300">
                  <p>Al Qusais Industrial Area</p>
                  <p>P.O. Box 12345, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-[#E5E1DA]" size={20} />
                <div className="text-gray-300">
                  <p>+971 4 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-[#E5E1DA]" size={20} />
                <div className="text-gray-300">
                  <p>info@salfoodsinternational.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-green-400 transition-colors text-lg">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-lg">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="text-gray-400">
              © 2025 Sal Foods International. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Sal Foods <span className="text-gray-400">International</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium food distribution services across the UAE and beyond.
            </p>
          </div> */}

           <div className="flex items-center h-45 mt-1 -my-6 ml-15"> {/* Negative margin to compensate */}
              <img 
                src="/NITHU logo-01.png" 
                alt="Sal Foods International" 
                className="h-full w-auto object-contain" 
              />
            </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <MapPin className="text-gray-400" size={16} />
              <div className="text-gray-400 text-sm">
                <p>Al Qusais Industrial Area</p>
                <p>P.O. Box 12345, Dubai, UAE</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Phone className="text-gray-400" size={16} />
              <p className="text-gray-400 text-sm">+971 4 123 4567</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" size={16} />
              <p className="text-gray-400 text-sm">info@salfoodsinternational.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Sal Foods International. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
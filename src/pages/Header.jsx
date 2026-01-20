import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({isSticky}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`bg-white/50 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 ${
        isSticky ? "sticky top-0" : "static"
      }`}
    >
      {/* Added fixed height container */}
      <div className="h-22 flex items-center"> {/* Fixed height */}
        <nav className="container mx-auto px-6 w-full">
          <div className="flex justify-between items-center">
            {/* Logo Section - Overflowing but centered */}
            <div className="flex items-center h-28 mt-1 -my-6 ml-15"> {/* Negative margin to compensate */}
              <img 
                src="/NITHU logo-01.png" 
                alt="Sal Foods International" 
                className="h-full w-auto object-contain" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center  flex-1">
              <div className="flex items-center space-x-10">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-base relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-2 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-lg py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
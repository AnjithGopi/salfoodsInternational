import { useRef, useEffect } from "react";

// Sticky Background Page Component
const StickyBackgroundPage = () => {
  const contentRef = useRef(null);

  // Optional: Add scroll-based effects (e.g., fade-in for content) if needed
  useEffect(() => {
    const handleScroll = () => {
      // Add scroll-based logic here if desired (e.g., parallax or fade effects)
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", // Navy to blue gradient for luxury
        }}
        role="presentation"
      ></div>

      {/* Scrollable Content */}
      <main className="relative z-10" role="main">
        <div className="container mx-auto px-4 py-16">
          {/* Content Section 1 */}
          <section
            className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-8 transition-all duration-300"
            ref={contentRef}
          >
            <h2 className="text-4xl font-serif text-navy-900 mb-6">
              Welcome to Sal Foods International
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Sal Foods International, we empower culinary excellence through innovative solutions
              and world-class services. Our mission is to deliver unparalleled quality and
              sophistication to businesses worldwide.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              aria-label="Get in touch with Sal Foods International"
            >
              Get in Touch
            </a>
          </section>

          {/* Content Section 2 */}
          <section className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-8 transition-all duration-300">
            <h2 className="text-3xl font-serif text-navy-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We envision a world where culinary arts are elevated through sustainable practices and
              cutting-edge technology. Join us on this journey to redefine excellence.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </section>

          {/* Content Section 3 (for scrolling demonstration) */}
          <section className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl mx-auto transition-all duration-300">
            <h2 className="text-3xl font-serif text-navy-900 mb-6">Our Commitment</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our commitment to quality drives everything we do. From sourcing the finest ingredients
              to delivering exceptional service, we strive for perfection in every detail.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StickyBackgroundPage;
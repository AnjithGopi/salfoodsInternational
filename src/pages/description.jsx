const PremiumHeroSection = () => {
  return (
    <div className="space-y-8">
      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          <span className="block text-white">Fresh &</span>
          <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
            Delicious
          </span>
        </h1>
        
        {/* Premium accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-100 max-w-3xl">
        Serving authentic flavors with{" "}
        <span className="font-medium text-white">love and passion</span>
      </p>

      {/* Description */}
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl font-light">
        Experience the taste of tradition with our fresh, quality ingredients 
        carefully selected to deliver an unforgettable culinary journey that 
        honors time-tested recipes and modern excellence.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <a
          href="#contact"
          className="group relative bg-white text-black px-10 py-5 text-base font-semibold rounded-full hover:bg-gray-50 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Contact Us
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
        
        
      </div>

      {/* Premium stats or features */}
      <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
        <div className="flex items-center gap-3 text-gray-300">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <span className="text-sm font-medium">Premium Quality</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <span className="text-sm font-medium">Fresh Daily</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <span className="text-sm font-medium">Authentic Flavors</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumHeroSection;
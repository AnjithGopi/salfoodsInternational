import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";

const PremiumCTASection = () => {
  return (
    <div className="mt-16 relative overflow-hidden">
      {/* Background with multiple gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7C1A8] via-[#8DB68E] to-[#6B9B6D] opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#2D5016]/20 via-transparent to-[#4A7C1C]/10"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0  opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative text-center rounded-2xl p-12 border  border-white/20 backdrop-blur-sm">
        {/* Icon decoration */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white  leading-tight">
          Can't find what you're 
          <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            looking for?
          </span>
        </h3>
        
        <p className="mb-8 max-w-2xl mx-auto text-white/90 text-lg leading-relaxed">
          Browse our full catalog of premium food products, seasonal
          specialties, and chef-curated collections. New items added weekly!
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    
          
          <button className="group relative bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 flex items-center space-x-2 cursor-pointer">
            <a href="#products">Our Products</a>
            <ArrowRight href="#products" className="w-4 h-4 transition-transform group-hover:translate-x-1 " />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-8 flex justify-center space-x-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm text-white/80">Premium Products</div>
          </div>
          <div className="w-px bg-white/30 h-12"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Weekly</div>
            <div className="text-sm text-white/80">New Arrivals</div>
          </div>
          <div className="w-px bg-white/30 h-12"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-white/80">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCTASection;
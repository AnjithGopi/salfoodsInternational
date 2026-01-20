import { ArrowRight } from "lucide-react";

const PremiumPalappamCTA = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[#A7C1A8] via-[#8DB68E] to-[#6B9B6D] rounded-3xl p-12 text-white relative overflow-hidden">
      
      {/* Subtle glow effects (premium touch) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Experience the Tradition
        </h3>
        
        <p className="text-xl mb-8 text-white-100 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us for authentic Palappam
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button className="group relative bg-white/20 text-white justify-center text-center px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 flex items-center space-x-2 cursor-pointer">
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPalappamCTA;
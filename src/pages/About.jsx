import { forwardRef } from "react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import PalappamCTASection from "./palappam";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-full font-semibold text-sm mb-6">
            <Award className="w-4 h-4 mr-2" />
            22 Years of Excellence
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Legacy of{" "}
            <span className="bg-gradient-to-r from-[#A7C1A8] via-[#8DB68E] to-[#6B9B6D] bg-clip-text text-transparent">
              Authentic Flavors
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-bold">
            From humble beginnings to becoming a trusted name in authentic
            Palappam
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                Our Story
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  With a legacy spanning over{" "}
                  <span className="font-semibold text-orange-600">
                    22 years
                  </span>
                  , we have proudly established ourselves as a trusted name in
                  delivering authentic and high-quality Palappam to our valued
                  customers.
                </p>
                <p>
                  What started as a small venture rooted in tradition and
                  passion has grown steadily through consistent dedication to
                  excellence in taste, quality, and customer satisfaction. Our
                  Palappam has become a favorite among those who appreciate
                  genuine flavors and consistent quality.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
                Our Vision
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Today, as we expand our business operations, our goal remains
                  unchanged: to make our products accessible to a wider audience
                  while upholding the standards that have defined us since the
                  beginning.
                </p>
                <p>
                  We remain committed to innovation without compromising
                  authenticity, and we look forward to continuing to serve you
                  with the same integrity, passion, and excellence that have
                  been the cornerstone of our journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">22+</div>
                <div className="text-orange-100 font-medium">
                  Years of Excellence
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-green-100 font-medium">
                  Happy Customers
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100 font-medium">
                  Authentic Recipes
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-purple-100 font-medium">Fresh Quality</div>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-500" />
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Authenticity
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Preserving traditional recipes and methods
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-gray-600 text-sm">
                      Using only the finest ingredients
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      Evolving while maintaining our core values
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      Committed to exceeding expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PalappamCTASection />
      </div>
    </section>
  );
});

export default AboutUs;

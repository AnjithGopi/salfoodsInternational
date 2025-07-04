import React from "react";
import { Star, ShoppingCart, Heart, Clock, ChefHat, Leaf } from "lucide-react";
import PremiumCTASection from "./Premiumcta";

function Products() {
  const products = [
    {
      id: 1,
      name: "Palappam Batter",
      description:
        "Handcrafted with organic flour and traditional fermentation methods",
      price: "$8.99",
      originalPrice: "$12.99",
      rating: 4.9,
      reviews: 156,
      badges: ["Organic", "Handmade"],
      prepTime: "24 hrs",
      category: "Bakery",
      isNew: false,
      isBestseller: true,
      nutritionHighlights: ["High Fiber", "No Preservatives", "Vegan Friendly"],
    },
    {
      id: 2,
      name: "Palappam Batter",
      description:
        "Three premium sauces: Truffle Alfredo, Spicy Arrabbiata, and Basil Pesto",
      price: "$24.99",
      originalPrice: "$32.99",
      rating: 4.8,
      reviews: 89,
      badges: ["Chef's Choice", "Bundle Deal"],
      prepTime: "5 mins",
      category: "Sauces",
      isNew: true,
      isBestseller: false,
      nutritionHighlights: ["Gluten Free", "Natural Ingredients", "Low Sodium"],
    },
    {
      id: 3,
      name: "Palappam Batter",
      description:
        "Grass-fed Wagyu beef patties with our signature seasoning blend",
      price: "$18.99",
      originalPrice: "$24.99",
      rating: 4.9,
      reviews: 203,
      badges: ["Premium", "Grass-Fed"],
      prepTime: "15 mins",
      category: "Meat",
      isNew: false,
      isBestseller: true,
      nutritionHighlights: ["High Protein", "Omega-3 Rich", "Antibiotic Free"],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium food products,
            made with the finest ingredients and traditional cooking methods.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-2">
            <ChefHat className="w-6 h-6 text-orange-500" />
            <span className="text-gray-600 font-medium">
              Chef-Approved Quality
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Product Image */}
              <div className="relative ">
                <img
                  src="/appam 1.jpg"
                  alt={product.name}
                  className="w-full h-90 object-cover "
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Product Name & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Badges */}

                {/* Nutrition Highlights */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Leaf className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-gray-700">
                      Nutrition Highlights
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.nutritionHighlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="mt-16 text-center bg-[#A7C1A8] text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Browse our full catalog of premium food products, seasonal
            specialties, and chef-curated collections. New items added weekly!
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-[#D1D8BE] transition-colors cursor-pointer">
            Contact Us
          </button>
        </div> */}

        <PremiumCTASection/>
      </div>
    </section>
  );
}

export default Products;

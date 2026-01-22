
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import sendEmail from "../utils/sendEmail";
import {contact }from "../contact/Address"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message:"",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [contact.mobile,contact.mobile2],
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        contact.email,
        contact.webSite,
      ],
      color: "bg-blue-50 text-blue-600 border-blue-200",
      description: "Reach out via email for detailed inquiries",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [contact.address,contact.pincode],
      color: "bg-amber-50 text-amber-600 border-amber-200",
      description: "Visit our state-of-the-art facility",
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"],
    //   color: "bg-purple-50 text-purple-600 border-purple-200",
    //   description: "We're here when you need us",
    // },
  ];

  const inquiryTypes = [
    "Product Information",
    "Bulk Orders",
    "Partnership Opportunities",
    "Quality Certifications",
    "Private Label Services",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(e);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: "" ,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-16 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-600 lg:hidden" />
                <CheckCircle
                  size={40}
                  className="text-green-600 hidden lg:block"
                />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
                We've received your message and will get back to you within 24
                hours. Our team is excited to discuss how we can serve your food
                business needs.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#2D5016] hover:bg-[#1f3610] text-white px-6 lg:px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Grow Your
            <span className="block bg-gradient-to-r from-[#A7C1A8] via-[#8DB68E] to-[#6B9B6D] bg-clip-text text-transparent">
              Food Business
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Partner with us to access premium food products, reliable supply
            chains, and personalized service that drives your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">
                Contact Information
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`border-2 ${info.color} rounded-2xl p-4 lg:p-6 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <info.icon size={20} className="lg:hidden" />
                        <info.icon size={24} className="hidden lg:block" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm lg:text-base">
                          {info.title}
                        </h4>
                        <p className="text-xs lg:text-sm text-gray-500 mb-2 lg:mb-3">
                          {info.description}
                        </p>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-700 font-medium mb-1 text-sm lg:text-base break-words"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#6B9B6D] rounded-2xl p-6 lg:p-8 text-white shadow-xl">
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    Premium quality products with international certifications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    Reliable supply chain across Middle East and beyond
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    Personalized service and competitive pricing
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">
                    Expert team with 15+ years in food industry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 h-full">
              <div className="flex items-center space-x-3 mb-6 lg:mb-8">
                <MessageCircle className="text-[#2D5016]" size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h3>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                        placeholder="Your first name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                        placeholder="Your last name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                        placeholder="+971 50 123 4567"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 text-sm lg:text-base"
                      disabled={isSubmitting}
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 lg:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none transition-all duration-200 resize-none text-sm lg:text-base"
                    placeholder="Tell us about your requirements, order quantities, or any specific questions..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6B9B6D] hover:to-[#2D5016] text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70  text-sm lg:text-base cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="lg:hidden" />
                      <Send size={20} className="hidden lg:block" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
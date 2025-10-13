"use client";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ type: null, text: null });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage({ type: null, text: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setResponseMessage({ type: 'success', text: result.message || "Email sent successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setResponseMessage({ type: 'error', text: result.error || "Failed to send message. Please try again." });
      }

    } catch (error) {
      console.error("Fetch error:", error);
      setResponseMessage({ type: 'error', text: "Network error. Please check your connection." });
    } finally {
      setIsLoading(false);
      setTimeout(() => setResponseMessage({ type: null, text: null }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8080529797"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["bharatinfra8080@gmail.com"],
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Office No.4 latur plaza opposite of kayamkhani petrol pump ambajogai road latur maharashtra 413512"],
      color: "from-sky-500 to-blue-700",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Every Day", "24/7"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const services = [
    "Solar MW Projects",
    "Transmission Line & Bay Work",
    "Solar Krushi Pump",
    "Smart Meter Installation",
    "Precast Boundary Wall & Chainlink Fencing",
    "Civil Work & Interior",
    "Telecommunication",
    "Jal Jeevan Mission",
  ];

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-gray-50 to-sky-50/30 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full mb-4">
            <Mail className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-600">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let's Start Your Project
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className={`inline-flex p-3 bg-gradient-to-br ${info.color} rounded-xl shadow-lg mb-4`}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            {/* API Response Message Display */}
            {responseMessage.type && (
                <div 
                    className={`p-4 rounded-xl mb-4 border-l-4 ${
                        responseMessage.type === 'success' 
                        ? 'bg-green-100 border-green-500 text-green-700' 
                        : 'bg-red-100 border-red-500 text-red-700'
                    } flex items-center gap-3`}
                >
                    {responseMessage.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{responseMessage.text}</p>
                </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Jamir shaikh"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="jamir.shaikh@gmail.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+91 8669450231"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-5 h-5" />
                    </>
                )}
              </button>
            </form>
          </div>

          {/* Map and Why Choose Us */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d76.39813841640625!3d18.413319899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547b87cd8879!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Over 10+ years of industry experience",
                  "100+ successful projects completed",
                  "Expert team of certified professionals",
                  "24/7 customer support and maintenance",
                  "Competitive pricing with quality assurance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
  <div className="relative p-2.5 rounded-xl transition-transform duration-500">
    <img
      src="/images/logo1.png"
      alt="Bharat Infra Logo"
      className="h-16 w-auto object-contain invert brightness-200" // adjust h-16 as needed
    />
  </div>
</div>


              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Bharat Infrastructure
                </h3>
                <p className="text-xs text-gray-400 font-medium">Solar Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in sustainable solar energy solutions. Powering a brighter, cleaner future for India.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Solar Panel Installation",
                "Maintenance & Support",
                "Energy Consultation",
                "Solar Solutions",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Latur, Maharashtra, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-lg bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <Mail className="w-4 h-4 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <a href="mailto:bharatinfra8080@gmail.com" className="text-gray-400 hover:text-blue-500 text-sm transition-colors break-all">
                    bharatinfra8080@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bharat Infra Solar Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transform transition-all duration-300 z-40 ${
          showScrollTop ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-0"
        } hover:scale-110`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
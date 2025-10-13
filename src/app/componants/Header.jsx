"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 5);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll for links
  useEffect(() => {
    const links = document.querySelectorAll("a[data-scroll]");
    const handleClick = (e, link) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = link.getAttribute("href").replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) smoothScrollTo(targetElement);
    };

    links.forEach((link) =>
      link.addEventListener("click", (e) => handleClick(e, link))
    );

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", (e) => handleClick(e, link))
      );
    };
  }, []);

  const smoothScrollTo = (target) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 60;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime = null;

    function animationScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white shadow-lg py-4 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="#home"
            data-scroll
            className="flex items-center gap-3 group cursor-pointer"
          >
           
            <div>
             <div>
              <img
              src="/images/bharatinfralogo.png"
              alt="Bharat Infra Logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                data-scroll
                className="relative px-5 py-2.5 text-gray-700 font-medium text-sm transition-colors duration-300 hover:text-blue-600 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              data-scroll
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                data-scroll
                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              data-scroll
              className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-full text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Quote
            </a>
          </nav>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </header>
  );
}

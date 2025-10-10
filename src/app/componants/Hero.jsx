"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Sun, Leaf, Zap, Users, Award, Shield, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&h=1200&fit=crop",
      badge: "Solar Installation Experts",
      title: "Power Your Future with",
      highlight: "Solar Energy",
      description: "Transform your home or business with premium solar solutions. Save money and reduce your carbon footprint.",
      color: "yellow"
    },
    {
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&h=1200&fit=crop",
      badge: "Renewable Energy Leader",
      title: "Sustainable Solutions for",
      highlight: "Tomorrow",
      description: "Join thousands of customers saving on electricity while contributing to a cleaner planet.",
      color: "green"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&h=1200&fit=crop",
      badge: "Clean Energy Innovation",
      title: "Experience the Power of",
      highlight: "Renewable Energy",
      description: "Cutting-edge solar technology for maximum efficiency and energy independence.",
      color: "blue"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentImageIndex) {
      setIsAnimating(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const getAccentColor = (color) => {
    const colors = {
      yellow: {
        primary: "text-yellow-400",
        gradient: "from-yellow-400 via-orange-400 to-yellow-500",
        bg: "bg-yellow-400",
        border: "border-yellow-400",
        shadow: "shadow-yellow-400/30"
      },
      green: {
        primary: "text-emerald-400",
        gradient: "from-emerald-400 via-green-400 to-teal-500",
        bg: "bg-emerald-400",
        border: "border-emerald-400",
        shadow: "shadow-emerald-400/30"
      },
      blue: {
        primary: "text-cyan-400",
        gradient: "from-cyan-400 via-blue-400 to-indigo-500",
        bg: "bg-cyan-400",
        border: "border-cyan-400",
        shadow: "shadow-cyan-400/30"
      }
    };
    return colors[color];
  };

  const currentSlide = slides[currentImageIndex];
  const accentColor = getAccentColor(currentSlide.color);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black pt-20">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              index === currentImageIndex 
                ? "opacity-100 scale-110" 
                : "opacity-0 scale-100"
            }`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.7) contrast(1.1)"
              }}
            />
          </div>
        ))}

        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-black/30 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center hover:bg-black/50 hover:border-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-black/30 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center hover:bg-black/50 hover:border-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-4xl space-y-10">
            
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-3 px-5 py-2.5 bg-black/40 backdrop-blur-xl rounded-full border ${accentColor.border} border-opacity-40 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className={`w-2 h-2 ${accentColor.bg} rounded-full animate-pulse`}></div>
              <span className="text-sm font-semibold text-white tracking-wider uppercase">{currentSlide.badge}</span>
            </div>

            {/* Main Title */}
            <div
              className={`space-y-3 transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
                <span className="block text-white mb-2">{currentSlide.title}</span>
                <span className={`block bg-gradient-to-r ${accentColor.gradient} bg-clip-text text-transparent`}>
                  {currentSlide.highlight}
                </span>
              </h1>
            </div>

            {/* Divider Line */}
            <div
              className={`w-24 h-1 rounded-full bg-gradient-to-r ${accentColor.gradient} transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            ></div>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl font-light transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {currentSlide.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <a
                href="#services"
                className="group px-8 py-3.5 bg-transparent text-white font-semibold text-base rounded-full border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Video
              </a>
            </div>

            {/* Stats Section */}
            <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {[
                { icon: Users, number: "1000+", label: "Customers" },
                { icon: Award, number: "50MW+", label: "Capacity" },
                { icon: Shield, number: "7 Years", label: "Warranty" }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${accentColor.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${accentColor.primary}`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Tags - Right Side */}
      <div
        className={`absolute right-8 bottom-32 z-20 flex flex-col gap-3 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        {[
          { icon: Sun, text: "High Efficiency" },
          { icon: Zap, text: "Save 90%" },
          { icon: Leaf, text: "Eco-Friendly" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 hover:bg-black/60 hover:border-white/40 transition-all duration-300"
          >
            <item.icon className={`w-5 h-5 ${accentColor.primary}`} />
            <span className="text-sm font-semibold text-white">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentImageIndex
                ? `w-12 h-2.5 bg-gradient-to-r ${accentColor.gradient}`
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 right-12 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs text-white/60 font-semibold tracking-widest rotate-90 origin-center">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
}
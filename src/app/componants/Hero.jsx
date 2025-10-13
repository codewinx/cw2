"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [titleKey, setTitleKey] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1780",
      text: "Solar Installation & O&M Services – Powering the Future with Megawatt-Scale Solar Excellence.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509390559807-3144e7d29097?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      text: "11KV & 33KV Transmission Line Solutions – Delivering Reliable Power, One Line at a Time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1780",
      text: "Civil Construction Works – Building the Foundation for a Sustainable Future.",
    },
  ];

  // ✅ Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    setTitleKey((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    setTitleKey((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTitleKey((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.8)",
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="max-w-4xl">
            {/* Animated Company Name */}
            <div className="overflow-hidden mb-4">
              <h1
                key={titleKey}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                style={{
                  animation: "slideUp 1.5s ease-out, fadeIn 1.5s ease-out",
                }}
              >
                {["B", "H", "A", "R", "A", "T", " ", "I", "N", "F", "R", "A"].map(
                  (letter, index) => (
                    <span
                      key={`${titleKey}-${index}`}
                      className="inline-block"
                      style={{
                        animation: `letterPop 2s ease-out ${index * 0.2}s both`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  )
                )}
              </h1>
            </div>

            {/* Animated Line (💙 Changed to blue gradient) */}
            <div
              key={`line-${titleKey}`}
              className="h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-700"
              style={{
                animation: "slideRight 1s ease-out 0.5s both",
              }}
            ></div>

            {/* Changing Slide Text */}
            <div className="relative min-h-[100px] md:min-h-[120px]">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed transition-all duration-700 ${
                    index === currentImageIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.text}
                </p>
              ))}
            </div>

            {/* ✅ Static Buttons (💙 Updated to blue) */}
            <div className="flex flex-wrap gap-4 items-center mt-6">
              <button className="px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 text-base">
                Get Started
              </button>
              <button className="px-10 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/60 hover:bg-white/10 hover:border-white transition-all duration-300 text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-black/60 hover:border-white/40 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-black/60 hover:border-white/40 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-5 py-2.5 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentImageIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes letterPop {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.7);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

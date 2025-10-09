"use client";
import { useEffect, useState } from "react";
import { Sun, Target, Eye, Award, Users, Lightbulb, Heart, TrendingUp, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Sun className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Leading India's Solar Revolution
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Empowering homes and businesses with sustainable, affordable, and reliable solar energy solutions since 2010
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          
          {/* Left - Image Collage */}
          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              {/* Main large image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072"
                  alt="Solar Installation Team"
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Small overlay image */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2070"
                  alt="Happy Customer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-xl p-4 shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-xs font-semibold">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Transforming Sunlight into Sustainable Future
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At <span className="font-semibold text-orange-600">Bharat Infra</span>, we believe in the power of the sun to create a cleaner, greener tomorrow. Since our inception in 2010, we've installed over 50MW of solar capacity across India, helping thousands of families and businesses reduce their carbon footprint while saving on energy costs.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our team of certified solar experts brings cutting-edge technology and unmatched expertise to every project. From residential rooftops to large-scale commercial installations, we deliver solutions that are tailored to your needs and built to last.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {[
                { icon: Award, label: "ISO Certified" },
                { icon: Users, label: "5000+ Customers" },
                { icon: CheckCircle, label: "100% Quality" },
                { icon: Heart, label: "24/7 Support" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-orange-50 rounded-xl">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet Our Founder */}
        <div className={`bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Founder Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787"
                  alt="Company Owner"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-4xl text-white font-serif">"</span>
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Jamir Shaikh</h3>
                <p className="text-base text-orange-600 font-semibold mb-4">Founder & CEO</p>
                
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-base italic text-gray-800">
                    "Our vision is to make India a global leader in solar energy adoption. Every installation we complete brings us one step closer to a sustainable future."
                  </p>
                  
                  <p className="text-sm">
                    With over 10 years of experience in renewable energy, jamir founded Bharat Infra in 2010 with a mission to democratize solar power across India. His commitment to quality and customer satisfaction has made Bharat Infra a trusted name in the industry.
                  </p>
                  
                  <p className="text-sm">
                    Under his leadership, the company has grown from a small startup to one of India's leading solar solution providers, serving thousands of satisfied customers nationwide.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-orange-200">
                  <div className="text-xl font-bold text-orange-600">10+</div>
                  <div className="text-xs text-gray-600">Years in Energy Sector</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-orange-200">
                  <div className="text-xl font-bold text-orange-600">20+</div>
                  <div className="text-xs text-gray-600">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
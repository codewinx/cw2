"use client";
import { useEffect, useState } from "react";
import { Sun, Target, Eye, Award, Users, Lightbulb, Heart, TrendingUp, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [missionVisionVisible, setMissionVisionVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const missionVisionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMissionVisionVisible(true);
          } else {
            setMissionVisionVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const whyChooseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWhyChooseVisible(true);
          } else {
            setWhyChooseVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    const missionVisionSection = document.getElementById("mission-vision");
    const whyChooseSection = document.getElementById("why-choose");
    
    if (section) observer.observe(section);
    if (missionVisionSection) missionVisionObserver.observe(missionVisionSection);
    if (whyChooseSection) whyChooseObserver.observe(whyChooseSection);

    return () => {
      observer.disconnect();
      missionVisionObserver.disconnect();
      whyChooseObserver.disconnect();
    };
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
          
          {/* Left - Image Collage - Animates from LEFT */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
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

          {/* Right - Content - Animates from RIGHT */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
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

        {/* Mission & Vision Section */}
        <div id="mission-vision" className="grid md:grid-cols-2 gap-6 mb-16">
          
          {/* Mission Card - Animates from LEFT */}
          <div className={`relative p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg border border-orange-100 transition-all duration-1000 delay-200 ${
            missionVisionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500 rounded-xl shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To accelerate India's transition to clean energy by making solar power accessible, affordable, and reliable for every home and business. We're committed to reducing carbon emissions while empowering communities with energy independence.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card - Animates from RIGHT */}
          <div className={`relative p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-100 transition-all duration-1000 delay-300 ${
            missionVisionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500 rounded-xl shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To become India's most trusted solar energy partner, powering 100,000 homes and businesses by 2030. We envision a future where renewable energy is the norm, and every rooftop contributes to a sustainable planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="why-choose" className={`transition-all duration-1000 delay-200 ${
          whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Why Choose Bharat Infra?
            </h3>
            <p className="text-sm text-gray-600">
              Industry-leading expertise and customer satisfaction
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Lightbulb,
                title: "Smart Technology",
                desc: "Latest solar panels with IoT monitoring and AI-powered energy optimization"
              },
              {
                icon: Award,
                title: "Proven Track Record",
                desc: "15 years of excellence with 98% customer satisfaction rating"
              },
              {
                icon: TrendingUp,
                title: "Maximum ROI",
                desc: "Payback period of 3-5 years with 25+ year system lifespan"
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "150+ certified engineers and technicians across India"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 ${
                  idx % 2 === 0 
                    ? `${whyChooseVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}` 
                    : `${whyChooseVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
}
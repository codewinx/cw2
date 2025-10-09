"use client";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const services = [
    {
      title: "Solar MW Projects",
      slug: "solar-mw-projects",
      description: "Large-scale solar power plant installations with high efficiency panels and maximum energy output.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
    },
    {
      title: "Transmission Line & Bay Work",
      slug: "transmission-line-bay-work",
      description: "Professional installation and maintenance of electrical transmission infrastructure and bay systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    },
    {
      title: "Solar Krushi Pump",
      slug: "solar-krushi-pump",
      description: "Solar-powered agricultural pumps for irrigation, helping farmers save costs and increase productivity.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070",
    },
    {
      title: "Smart Meter Installation",
      slug: "smart-meter-installation",
      description: "Advanced smart metering solutions for accurate energy monitoring and efficient billing systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    },
    {
      title: "Precast Boundary Wall & Chainlink Fencing",
      slug: "precast-boundary-wall-chainlink-fencing",
      description: "Durable and secure boundary solutions including precast walls and professional chainlink fencing.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231",
    },
    {
      title: "Civil Work & Interior",
      slug: "civil-work-interior",
      description: "Complete civil construction and modern interior design services for residential and commercial spaces.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231",
    },
    {
      title: "Telecommunication",
      slug: "telecommunication",
      description: "Installation and maintenance of telecommunication infrastructure including towers and network equipment.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    },
    {
      title: "Jal Jeevan Mission",
      slug: "jal-jeevan-mission",
      description: "Water supply infrastructure projects under Jal Jeevan Mission ensuring clean water access to every household.",
      image: "https://images.unsplash.com/photo-1548264864-84e6815ba12c?q=80&w=2070",
    },
  ];

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-700">Service not found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
    </section>
  );
}
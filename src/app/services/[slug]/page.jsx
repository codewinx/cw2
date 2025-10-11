"use client";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  // You can later replace this with actual service data lookup
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-white px-6 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-700 text-lg max-w-2xl text-center">
        This is the detail page for <strong>{slug}</strong>.  
        You can display more information about this service here.
      </p>

      <button
        onClick={() => window.history.back()}
        className="mt-10 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all"
      >
        ← Back to Services
      </button>
    </div>
  );
}

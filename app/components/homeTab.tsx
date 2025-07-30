"use client";
import { useState } from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("guides");

  const tabs = [
    {
      id: "guides",
      title: "Expert Guides",
      image: "/images/guide.jpg",
      content:
        "Our team of experienced travel experts ensures a memorable and hassle-free journey wherever you go.",
    },
    {
      id: "prices",
      title: "Best Prices",
      image: "/images/price.jpg",
      content:
        "We offer competitive prices and exclusive deals you won’t find anywhere else.",
    },
    {
      id: "support",
      title: "24/7 Support",
      image: "/images/support.jpg",
      content:
        "Our customer support team is available around the clock to assist you at every step of your trip.",
    },
  ];

  const active = tabs.find((tab) => tab.id === activeTab);
  return (
    <section className="w-full mx-auto my-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

      {/* Tab buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-base cursor-pointer rounded-full font-medium border transition duration-200 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Image + Text Box */}
      <div className="flex flex-col md:flex-row md:h-[400px] md:rounded-xl overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2 w-full h-[300px] md:h-full relative">
          <Image
            src={active?.image || ""}
            alt={active?.title || "Tab Image"}
            fill
            className="object-cover"
          />
        </div>

        {/* Text Box */}
        <div className="md:w-1/2 w-full bg-gray-100 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">{active?.title}</h3>
          <p className="text-lg leading-relaxed text-gray-800">
            {active?.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

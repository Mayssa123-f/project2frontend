"use client";
import { useState } from "react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("guides");

  const tabs = [
    {
      id: "guides",
      title: "Expert Guides",
      content:
        "Our team of experienced travel experts ensures a memorable and hassle-free journey wherever you go.",
    },
    {
      id: "prices",
      title: "Best Prices",
      content:
        "We offer competitive prices and exclusive deals you won’t find anywhere else.",
    },
    {
      id: "support",
      title: "24/7 Support",
      content:
        "Our customer support team is available around the clock to assist you at every step of your trip.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>

      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium border transition duration-200 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow text-center text-gray-700 mb-10">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
};

export default WhyChooseUs;

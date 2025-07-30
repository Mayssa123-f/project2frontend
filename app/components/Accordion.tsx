"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is it called BonVoyage?",
    answer:
      "Because 'Bon Voyage' means 'Have a good trip!' in French — and that’s exactly what we want for every traveler.",
  },
  {
    question: "How can I win a free trip with BonVoyage?",
    answer:
      "We run seasonal contests! Follow us on Instagram and subscribe to our newsletter for updates on how to enter.",
  },
  {
    question: "What’s the most booked destination this year?",
    answer:
      "Bali is our top destination in 2025—beaches, culture, and good vibes all around.",
  },
  {
    question: "Can I travel solo or join a group?",
    answer:
      "Both! You can book solo adventures or join one of our fun group tours with like-minded travelers.",
  },
  {
    question: "Is there a secret BonVoyage membership club? 👀",
    answer:
      "Shhh... maybe. Subscribe to our VIP list and you might just find out 😉",
  },
];

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className=" mx-auto mt-25 mb-20 px-4 sm:px-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between cursor-pointer items-center w-full px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {item.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 mt-3 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

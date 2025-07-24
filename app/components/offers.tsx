"use client";
import Image from "next/image";
import { offers } from "../data/offers";
export default function WeeklyOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold mb-2">
          Best Weekly Offers In Each City
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={offer.image}
              alt={offer.city}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-1">
                {offer.city}
                <br />
                <span className="text-sm text-gray-500">
                  👥 {offer.checkIns} Check Ins
                </span>
              </h4>
              <h6 className="text-lg font-bold text-blue-600 mt-2">
                ${offer.price}
                <br />
                <span className="text-sm font-normal text-gray-500">
                  /person
                </span>
              </h6>

              <div className="border-t my-4"></div>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="font-semibold">Deal Includes:</li>
                {offer.details.map((detail, i) => (
                  <li key={i}>• {detail}</li>
                ))}
              </ul>

              <a
                href="/reservation"
                className="inline-block text-center bg-[#7DF9FF] text-[#0000CD] font-semibold py-2 px-4 rounded hover:bg-white hover:text-[#0000CD] border border-transparent hover:border-[#0000CD] transition"
              >
                Make a Reservation
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

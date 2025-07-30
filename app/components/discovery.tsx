import React from "react";
import Link from "next/link";

export default function Discovery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover More About Our Country
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-xl font-semibold text-blue-700">150.640 +</h4>
            <span className="text-gray-600">Total Guests Yearly</span>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-xl font-semibold text-blue-700">175.000+</h4>
            <span className="text-gray-600">Amazing Accommodations</span>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white p-4 shadow rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-semibold text-blue-700">12.560+</h4>
                <span className="text-gray-600">Amazing Places</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-700">
                  240.580+
                </h4>
                <span className="text-gray-600">
                  Different Check-ins Yearly
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore.
        </p>

        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

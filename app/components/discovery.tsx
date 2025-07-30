import React from "react";
import Link from "next/link";

export default function Discovery() {
  return (
    <div className="px-4 md:px-10 mx-auto text-center">
      {/* Heading Section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover More About Our Country
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 shadow rounded flex flex-col items-center justify-center">
          <h4 className="text-2xl font-semibold text-blue-700">150.640 +</h4>
          <span className="text-gray-600">Total Guests Yearly</span>
        </div>
        <div className="bg-white p-6 shadow rounded flex flex-col items-center justify-center">
          <h4 className="text-2xl font-semibold text-blue-700">175.000+</h4>
          <span className="text-gray-600">Amazing Accommodations</span>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white p-6 shadow rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl font-semibold text-blue-700">12.560+</h4>
              <span className="text-gray-600">Amazing Places</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl font-semibold text-blue-700">240.580+</h4>
              <span className="text-gray-600">Different Check-ins Yearly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      {/* Button */}
      <Link
        href="#"
        className="inline-block bg-blue-700 text-white px-6 py-2 mb-10 rounded hover:bg-blue-600 transition"
      >
        Discover More
      </Link>
    </div>
  );
}

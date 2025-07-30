"use client";
import { useState } from "react";

const countries = [
  { name: "Bali", price: 600 },
  { name: "France", price: 1200 },
  { name: "Kingston", price: 800 },
  { name: "Havana", price: 500 },
  { name: "Italy", price: 1100 },
  { name: "George Town", price: 700 },
];

const CountryFilter = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");

  const filtered = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice =
      price === "" ||
      (price === "low" && country.price < 700) ||
      (price === "mid" && country.price >= 700 && country.price <= 1000) ||
      (price === "high" && country.price > 1000);
    return matchesSearch && matchesPrice;
  });

  return (
    <section className="w-full mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Our Destinations
      </h2>

      {/* Centered Filters */}
      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 mb-6 w-full">
        <input
          type="text"
          placeholder="Search by country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] p-3 border rounded-lg"
        />

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full sm:w-[300px] p-3 border rounded-lg cursor-pointer"
        >
          <option value="">All Prices</option>
          <option value="low">Under $700</option>
          <option value="mid">$700–$1000</option>
          <option value="high">Above $1000</option>
        </select>
      </div>

      {/* Filtered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No destinations match your filter.
          </p>
        ) : (
          filtered.map((country) => (
            <div
              key={country.name}
              className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{country.name}</h3>
              <p className="text-gray-600">Starting from ${country.price}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CountryFilter;

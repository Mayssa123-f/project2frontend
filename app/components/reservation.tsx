"use client";
import React from "react";

export default function ReservationForm() {
  return (
    <section className="bg-white py-16 px-4 flex justify-center">
      <div className="w-full px-10 bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Top Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 border-b">
          <div className="text-center space-y-2">
            <i className="fa fa-phone text-2xl text-blue-600" />
            <h4 className="font-semibold text-lg">Make a Phone Call</h4>
            <a href="tel:+03456789" className="text-blue-500 hover:underline">
              +961 03456789
            </a>
          </div>
          <div className="text-center space-y-2">
            <i className="fa fa-envelope text-2xl text-blue-600" />
            <h4 className="font-semibold text-lg">Contact Us via Email</h4>
            <a
              href="mailto:BonVoyage@gmail.com"
              className="text-blue-500 hover:underline"
            >
              BonVoyage@gmail.com
            </a>
          </div>
          <div className="text-center space-y-2">
            <i className="fa fa-map-marker text-2xl text-blue-600" />
            <h4 className="font-semibold text-lg">Visit Our Offices</h4>
            <p>Zahle,Lebanon</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-xl font-bold text-center mb-4">
                Make Your <em className="text-blue-600">Reservation</em> Through
                This <em className="text-blue-600">Form</em>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex. John Smithee"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Ex. +xxx xxx xxx"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    <option>ex. 3 or 4 or 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Choose Your Destination
                </label>
                <select
                  name="destination"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option>ex. Switzerland, Lausanne</option>
                  <option value="Italy, Roma">Italy, Roma</option>
                  <option value="France, Paris">France, Paris</option>
                  <option value="England, London">England, London</option>
                  <option value="Switzerland, Lausanne">
                    Switzerland, Lausanne
                  </option>
                </select>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Make Your Reservation Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

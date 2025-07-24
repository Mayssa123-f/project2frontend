"use client";
import Image from "next/image";

export default function VisitCountries() {
  return (
    <section className="py-16 px-6 bg-white text-[#333]">
      <div className=" mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit One Of Our Countries Now
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow">
              <div className="md:w-1/3 h-[300px]">
                <Image
                  src="/italy.jpg"
                  alt="Switzerland"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h4 className="text-2xl font-semibold mb-1">ITALY</h4>
                <span className="text-sm text-gray-500 mb-2 block">Europe</span>
                <a
                  href="/about"
                  className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:brightness-110 transition duration-300"
                >
                  Explore More
                </a>
                <br></br>
                <br></br>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>👤 8.66 Mil People</li>
                  <li>🌍 41,290 km²</li>
                  <li>🏠 $1,100,200</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow">
              <div className="md:w-1/3 h-[300px]">
                <Image
                  src="/bali.jpg"
                  alt="Caribbean"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h4 className="text-2xl font-semibold mb-1">BALI</h4>
                <span className="text-sm text-gray-500 mb-2 block">
                  Southeast Asia
                </span>
                <a
                  href="/about"
                  className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:brightness-110 transition duration-300"
                >
                  Explore More
                </a>
                <br></br>
                <br></br>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>👤 44.48 Mil People</li>
                  <li>🌍 275,400 km²</li>
                  <li>🏠 $946,000</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[550px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

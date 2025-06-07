import React from "react";
import Navbar from "./Navbar";
import sitePlan from '/src/assets/images/sitePlan.jpg';
import bedSquare from '/src/assets/images/2 bed square.jpg';
import bedLShaped from '/src/assets/images/2 bed L shaped.png';
import bed6x3 from 'src/assets/images/6 x 3 bed.png';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src={sitePlan}
          alt="Estate Aerial View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-white/0"></div>
        <div className="absolute inset-0 bg-opacity-70 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-black mb-2">
            Caledon’s New Affordable Security Complex
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-black">
            Tailored to Your Independent Lifestyle
          </p>
        </div>
      </div>
      <section className="py-16 px-4 bg-white text-center p-30">
        <div className="max-w-6xl mx-auto ">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Exclusive Phase 1<br />Now Selling</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">House Plots From<br />R1,012,500 - R3,160,000</p>
          {/* CTA Button */}
          <button className="bg-black text-white  text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition">
            ENQUIRE NOW
          </button>
          {/* Property Cards */}
          <div className="mt-12 mb-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-gray-(#F7F7F7) rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-54 w-full overflow-hidden">
              <img src={bedSquare} alt="2 Bedroom house" className="w-full h-full object-cover rounded-t-xl"/>
              </div>
              <h3 className="font-semibold text-lg">2 Bed Square<br />Shaped Plans</h3>
              <p className="text-sm text-gray-700">(19 units available)</p>
              <p className="text-xs text-gray-500 mt-2 p-">Plots 1–9, 22–31 offer you 2 Bed Square Shaped Plan Houses</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-54 w-full overflow-hidden">
              <img src={bedLShaped} alt="2 Bedroom house" className="w-full h-full object-cover rounded-t-xl"/>
              </div>
              <h3 className="font-semibold text-lg">2 Bed L-Shaped Plans</h3>
              <p className="text-sm text-gray-700">(3 units available)</p>
              <p className="text-xs text-gray-500 mt-2">Plots 10–12 offers you 2 Bed L-Shaped Plan Houses</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-54 w-full overflow-hidden">
                <img src={bed6x3} alt="2 Bedroom house" className="w-full h-full object-cover rounded-t-xl"/>
              </div>
              <h3 className="font-semibold text-lg">6 × 3 Bed<br />Square Shaped Plans</h3>
              <p className="text-sm text-gray-700">(6 units available)</p>
              <p className="text-xs text-gray-500 mt-2">Plots 13–18 offers you 3 Bed Square Shaped Plan Houses</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#D9D9D9] p-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Virtual Walk<br />Through</h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Look at Caledon and the area <br />
            Showing what's in the area
          </p>
          <a href="" className="inline-block bg-black text-white text-xs px-6 py-2 rounded-full hover:bg-gray-800 transition"></a>
        </div>
      </section>
    </div>
  );
}

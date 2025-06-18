import React from 'react';
import { Camera, ShoppingBag, MessageCircle, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-[#F9C80E] to-yellow-500 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Find Any Product in Any<br />Market/Plaza — Fast
          </h1>
          <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium">
            Starting with Banex Plaza, Abuja
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSCgl15NIDNx-MOyajbJrob4tS-1rGzxgUO5V5lw1V_jo0yA/viewform?usp=header"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What is iMarket Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            What is iMarket?
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center leading-relaxed">
              iMarket helps buyers connect directly with sellers inside real Nigerian markets.<br />
              Snap a photo of what you want → we'll find the seller → you chat → you meet or order.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800">Skip middlemen</span>
              </div>
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800">Verified sellers only</span>
              </div>
              <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800">Indoor navigation to shop locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            How it Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-[#F9C80E] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Snap a photo or search manually</h3>
              <p className="text-gray-600">Take a picture of what you're looking for</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#F9C80E] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">View verified sellers</h3>
              <p className="text-gray-600">Browse trusted sellers with your item</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#F9C80E] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Chat and buy</h3>
              <p className="text-gray-600">Negotiate directly with the seller</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#F9C80E] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Navigate inside the market</h3>
              <p className="text-gray-600">Get directions to the exact shop location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers & Sellers Section */}
      <section className="py-16 md:py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Built for Buyers & Sellers
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#F9C80E]">Are you a seller?</h3>
              <p className="text-gray-300 leading-relaxed">
                Join iMarket early and get free exposure inside your local market.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#F9C80E]">Are you a shopper?</h3>
              <p className="text-gray-300 leading-relaxed">
                Be the first to try it — no stress, no scams.
              </p>
            </div>
          </div>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE"
            className="inline-flex items-center bg-[#F9C80E] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            See iMarket in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-64 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-center">Search Products</h3>
                <p className="text-gray-600 text-center mt-2">Snap photos to find items quickly</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 h-64 flex items-center justify-center">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-center">Chat with Sellers</h3>
                <p className="text-gray-600 text-center mt-2">Direct communication with verified sellers</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-64 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-center">Indoor Navigation</h3>
                <p className="text-gray-600 text-center mt-2">Navigate inside markets with ease</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-[#F9C80E] to-yellow-500 h-64 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-black" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-center">Snap-to-Find</h3>
                <p className="text-gray-600 text-center mt-2">AI-powered product recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            Built in 🇳🇬 by the iMarket Team | © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

'use client'

import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* 1️⃣ Clinic Info */}
        <div>
          <h3 className="text-lg font-bold text-forstRed mb-3">Forst Eye Clinic</h3>
          <p className="text-sm leading-relaxed">
            Providing trusted and affordable eye care with modern technology and qualified professionals.
          </p>
          <p className="mt-3 text-sm">
            © {new Date().getFullYear()} Forst Eye Clinic. All rights reserved.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-forstRed mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-forstRed transition">Home</a></li>
            <li><a href="/services" className="hover:text-forstRed transition">Services</a></li>
            <li><a href="/booking" className="hover:text-forstRed transition">Book Appointment</a></li>
            <li><a href="/faq" className="hover:text-forstRed transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-forstRed transition">Contact Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Our Branches */}
        <div>
          <h3 className="text-lg font-bold text-forstRed mb-3">Our Branches</h3>
          <ul className="space-y-2 text-sm">
            <li>Ogba, Lagos</li>
            <li>Ikeja</li>
            <li>Surulere</li>
            <li>Agbara</li>
            <li>Festac</li>
            <li>Lekki</li>
          </ul>
        </div>

        {/* 4️⃣ Contact & Social Media */}
        <div>
          <h3 className="text-lg font-bold text-forstRed mb-3">Get in Touch</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +234 800 000 0000</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@forsteyeclinic.com</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-forstRed text-white rounded-full hover:bg-red-700"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-forstRed text-white rounded-full hover:bg-red-700"><FaInstagram /></a>
            <a href="#" className="p-2 bg-forstRed text-white rounded-full hover:bg-red-700"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        Designed by Forst Digital Team | Powered by Next.js
      </div>
    </footer>
  )
}

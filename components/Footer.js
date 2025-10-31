'use client'

import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F23A2E] via-[#F9B935] to-[#F23A2E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* 1️⃣ Clinic Info */}
        <div>
          <h3 className="text-xl font-extrabold mb-3">Forst Eye Clinic</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Providing trusted and affordable eye care with modern technology and qualified professionals.
          </p>
          <p className="mt-4 text-xs text-white/80">
            © {new Date().getFullYear()} Forst Eye Clinic. All rights reserved.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#1A1A1A] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[#1A1A1A] transition">Services</a></li>
            <li><a href="/booking" className="hover:text-[#1A1A1A] transition">Book Appointment</a></li>
            <li><a href="/faq" className="hover:text-[#1A1A1A] transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-[#1A1A1A] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Our Branches */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Our Branches</h3>
          <ul className="space-y-2 text-sm text-white/90">
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
          <h3 className="text-lg font-semibold mb-3 text-white">Get in Touch</h3>
          <div className="space-y-2 text-sm text-white/90">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +234 800 000 0000</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@forsteyeclinic.com</p>
          </div>
          <div className="flex gap-4 mt-5">
            <a href="#" className="p-3 bg-white text-[#F23A2E] rounded-full shadow-md hover:bg-[#F9B935] hover:text-[#1A1A1A] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white text-[#F23A2E] rounded-full shadow-md hover:bg-[#F9B935] hover:text-[#1A1A1A] transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-white text-[#F23A2E] rounded-full shadow-md hover:bg-[#F9B935] hover:text-[#1A1A1A] transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/80">
        Designed by <span className="font-semibold text-white">Forst Digital Team</span> | Powered by <span className="font-semibold">Dr Godswill Alozie</span>
      </div>
    </footer>
  )
}

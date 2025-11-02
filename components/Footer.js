'use client'

import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#F23A2E]/95 via-[#F9B935]/90 to-[#FFF8E1] text-[#1A1A1A] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* 1️⃣ Clinic Info */}
        <div>
          <h3 className="text-xl font-extrabold text-[#F23A2E] mb-3">Forst Eye Clinic</h3>
          <p className="text-sm leading-relaxed text-[#1A1A1A]/80">
            Providing trusted and affordable eye care with modern technology and qualified professionals.
          </p>
          <p className="mt-4 text-xs text-[#1A1A1A]/60">
            © {new Date().getFullYear()} Forst Eye Clinic. All rights reserved.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#F23A2E]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#F9B935] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[#F9B935] transition">Services</a></li>
            <li><a href="/booking" className="hover:text-[#F9B935] transition">Book Appointment</a></li>
            <li><a href="/faq" className="hover:text-[#F9B935] transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-[#F9B935] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Our Branches */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#F23A2E]">Our Branches</h3>
          <ul className="space-y-2 text-sm text-[#1A1A1A]/80">
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
          <h3 className="text-lg font-semibold mb-3 text-[#F23A2E]">Get in Touch</h3>
          <div className="space-y-2 text-sm text-[#1A1A1A]/80">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +234 800 000 0000</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@forsteyeclinic.com</p>
          </div>
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="p-3 bg-[#F9B935] text-[#1A1A1A] rounded-full shadow-md hover:bg-[#F23A2E] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-[#F9B935] text-[#1A1A1A] rounded-full shadow-md hover:bg-[#F23A2E] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-[#F9B935] text-[#1A1A1A] rounded-full shadow-md hover:bg-[#F23A2E] hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-[#1A1A1A]/20 pt-4 text-center text-sm text-[#1A1A1A]/70">
        Designed by <span className="font-semibold text-[#F23A2E]">Forst Digital Team</span> | Powered by <span className="font-semibold text-[#F9B935]">Dr Godswill Alozie</span>
      </div>
    </footer>
  )
}

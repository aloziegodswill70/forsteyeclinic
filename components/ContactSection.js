'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-orange-50 via-white to-[#fff5e6] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#e56a00]"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-700 text-lg"
        >
          We’re here to help you see the world clearly. Get in touch with us for appointments, 
          inquiries, or professional eye care services.
        </motion.p>
      </div>

      {/* Contact Info + Form */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#e56a00]/10 rounded-full">
              <Phone className="text-[#e56a00]" size={28} />
            </div>
            <p className="text-lg text-gray-700">+234 8033435554</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#e56a00]/10 rounded-full">
              <Mail className="text-[#e56a00]" size={28} />
            </div>
            <p className="text-lg text-gray-700">firsteyeclinic@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#e56a00]/10 rounded-full">
              <MapPin className="text-[#e56a00]" size={28} />
            </div>
            <p className="text-lg text-gray-700">
              No.14 Kayode Street, Ogba, Ikeja, Lagos, Nigeria. 
            </p>
          </div>

          <div className="mt-8 text-gray-600 text-sm">
            <p>Mon – Fri: 9:00 AM – 5:00 PM</p>
            <p>Sat: 9:00 AM – 2:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e56a00]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e56a00]"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e56a00]"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-[#e56a00] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#cc5f00] transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  )
}

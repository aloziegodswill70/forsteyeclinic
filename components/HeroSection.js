'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#fff8f5] via-[#fffaf3] to-[#fff0e0] overflow-hidden">

      {/* Floating Logo Animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-16 right-16 w-36 h-36 opacity-20"
      >
        <Image
          src="/images/feclogo1.png"
          alt="Forst Eye Clinic Logo"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="text-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-[#F28C28]"
        >
          Forst Eye Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto"
        >
          Experience world-class <span className="text-[#F28C28] font-semibold">eye care</span> 
          and personalized attention from trusted professionals.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-[#F28C28] text-white font-semibold rounded-full shadow-lg hover:bg-[#e47b10] transition"
          >
            Explore Services
          </motion.a>

          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border-2 border-[#F28C28] text-[#F28C28] font-semibold rounded-full shadow-md bg-white hover:bg-orange-50 transition"
          >
            Book Appointment
          </motion.a>
        </div>
      </div>

      {/* Soft Animated Background Fade */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-t from-[#fff0e0] via-[#fffaf3] to-[#fff8f5] -z-10"
      />

      {/* Subtle Decorative Glow */}
      <div className="absolute w-72 h-72 bg-[#F28C28]/10 rounded-full blur-3xl top-10 left-10 -z-10"></div>
      <div className="absolute w-64 h-64 bg-[#c9a449]/10 rounded-full blur-2xl bottom-10 right-10 -z-10"></div>

      {/* Branch Info Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-[#F28C28] to-[#c9a449] text-white py-4 px-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-center md:text-left gap-3">
          <p className="text-sm md:text-base">
            📍 <strong>Lekki</strong> | <strong>Surulere</strong> | <strong>Yaba</strong> | <strong>Abuja</strong>
          </p>
          <a
            href="#booking"
            className="bg-white text-[#F28C28] px-5 py-2 rounded-full font-semibold hover:bg-orange-50 transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}

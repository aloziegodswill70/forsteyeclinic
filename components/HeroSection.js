'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#D94619] via-[#F2B705] to-[#F5EDED] text-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Forst Eye Clinic
          </h1>
          <p className="text-lg mb-6 text-white/90 max-w-xl mx-auto md:mx-0 leading-relaxed">
            See the world in perfect clarity. We bring you advanced optical care
            with warmth, professionalism, and state-of-the-art technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/booking"
              className="px-8 py-3 bg-white text-[#D94619] font-semibold rounded-full shadow-lg hover:bg-[#F2B705] hover:text-white transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#D94619] transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <Image
            src="/images/forsteye.png"
            alt="Eye Examination"
            width={450}
            height={450}
            className="rounded-full shadow-lg border-4 border-white"
            priority
          />
        </motion.div>
      </div>

      {/* Subtle gradient overlay for warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D94619]/30 via-transparent to-[#F2B705]/30 pointer-events-none" />

      {/* Decorative Circle Glow */}
      <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-[#F2B705]/40 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D94619]/30 rounded-full blur-3xl opacity-40" />
    </section>
  )
}

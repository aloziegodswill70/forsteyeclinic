'use client'

import { motion } from 'framer-motion'

export default function ReceptionPage() {
  return (
    <section className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Welcome to Forst Eye Clinic Reception
        </motion.h1>

        <p className="text-gray-700 mb-10">
          Our reception area is designed to ensure comfort, speed, and warmth
          from the moment you arrive. We make every visit seamless.
        </p>

        <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-orange-700 mb-3">
            What to Expect
          </h3>
          <ul className="text-left list-disc ml-6 text-gray-700 space-y-2">
            <li>Fast registration process</li>
            <li>Friendly and professional staff</li>
            <li>Guidance through billing and booking</li>
            <li>Hygienic and welcoming environment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function MissionPage() {
  return (
    <section className="min-h-screen bg-yellow-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Our Mission
        </motion.h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          To deliver compassionate, affordable, and innovative eye care that
          transforms lives. We aim to protect vision, prevent blindness, and
          promote awareness through advanced technology and professional
          service.
        </p>
      </div>
    </section>
  )
}

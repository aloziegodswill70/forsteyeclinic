'use client'

import { motion } from 'framer-motion'

export default function VisionPage() {
  return (
    <section className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Our Vision
        </motion.h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          To be the leading provider of accessible, world-class eye care
          services in Nigeria and beyond — ensuring that everyone enjoys the
          gift of clear, healthy vision.
        </p>
      </div>
    </section>
  )
}

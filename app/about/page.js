'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          About Forst Eye Clinic
        </motion.h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Forst Eye Clinic is a leading eye care center dedicated to providing
          exceptional vision services for all ages. With years of experience,
          our clinic combines modern technology, compassionate professionals,
          and a patient-first approach.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-orange-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Our Values
            </h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Integrity and compassion</li>
              <li>Professional excellence</li>
              <li>Continuous improvement</li>
              <li>Patient satisfaction</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Our Commitment
            </h3>
            <p className="text-gray-700">
              We are committed to affordable, high-quality eye care that
              restores and protects your vision — one patient at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

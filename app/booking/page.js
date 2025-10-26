'use client'

import { motion } from 'framer-motion'

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-yellow-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Book an Appointment
        </motion.h1>

        <p className="text-gray-700 mb-8">
          Schedule your next eye check-up or consultation with ease.
        </p>

        <form className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:border-orange-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:border-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:border-orange-500"
          />
          <select className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:border-orange-500">
            <option>Select Appointment Type</option>
            <option>Normal Eye Check</option>
            <option>Emergency</option>
            <option>Children Eye Exam</option>
            <option>Elderly Care</option>
          </select>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  )
}

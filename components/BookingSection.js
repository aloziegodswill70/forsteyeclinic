'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, AlertTriangle, Baby, User } from 'lucide-react'

const bookings = [
  {
    icon: <CalendarDays className="w-6 h-6 text-orange-500" />,
    title: 'Normal Appointment',
    desc: 'Book your standard eye examination with our specialists.',
    link: '/book/normal',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    title: 'Emergency Booking',
    desc: 'Get urgent attention for sudden vision or eye-related emergencies.',
    link: '/book/emergency',
  },
  {
    icon: <Baby className="w-6 h-6 text-orange-500" />,
    title: 'Child Appointment',
    desc: 'Dedicated eye care services for children below 15 years.',
    link: '/book/child',
  },
  {
    icon: <User className="w-6 h-6 text-orange-500" />,
    title: 'Elderly Appointment',
    desc: 'Specialized appointments for seniors aged 60 and above.',
    link: '/book/elderly',
  },
]

export default function BookingSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = bookings.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides])

  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-12 px-4 sm:px-10 relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-8">
        Book an Appointment
      </h2>

      <div className="max-w-6xl mx-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bookings.map((booking, i) => (
              <motion.div
                key={i}
                className={`p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center ${
                  i === currentIndex ? 'scale-105' : ''
                }`}
              >
                <div className="mb-4">{booking.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {booking.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 mb-4">
                  {booking.desc}
                </p>
                <a
                  href={booking.link}
                  className="px-5 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Building2, CalendarDays } from 'lucide-react'

const branches = [
  {
    icon: <MapPin className="w-6 h-6 text-[#D94619]" />,
    name: 'Ogba - Ikeja Branch',
    address: '12 Ogba Road, Ikeja, Lagos',
    desc: 'Our main diagnostic center equipped with advanced optical tools.',
    link: '/book/ogba',
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#D94619]" />,
    name: 'Surulere Branch',
    address: '22 Adeniran Ogunsanya Street, Surulere, Lagos',
    desc: 'Modern consultation rooms and family-friendly environment.',
    link: '/book/surulere',
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#D94619]" />,
    name: 'Agbara Branch',
    address: 'Plot 14 Agbara Estate Road, Ogun State',
    desc: 'Providing top-tier optical care for Ogun residents and visitors.',
    link: '/book/agbara',
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#D94619]" />,
    name: 'Lekki Branch',
    address: '45 Admiralty Way, Lekki Phase 1, Lagos',
    desc: 'Premium eye care with a serene and luxurious environment.',
    link: '/book/lekki',
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#D94619]" />,
    name: 'Festac Branch',
    address: '1st Avenue, Festac Town, Lagos',
    desc: 'Your trusted family eye clinic in the heart of Festac.',
    link: '/book/festac',
  },
]

export default function BranchesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = branches.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides)
    }, 7000)
    return () => clearInterval(interval)
  }, [slides])

  return (
    <section className="bg-gradient-to-b from-[#FFF8E1] via-white to-[#FDE8D6] py-16 px-4 sm:px-10 relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#D94619] mb-10">
        Our Branches
      </h2>

      <div className="max-w-6xl mx-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {branches.map((branch, i) => (
              <motion.div
                key={i}
                className={`p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center border-t-4 border-[#D94619]/70 ${
                  i === currentIndex ? 'scale-105' : ''
                }`}
              >
                <div className="mb-3">{branch.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {branch.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{branch.address}</p>
                <p className="text-gray-600 text-sm mt-3 mb-4">
                  {branch.desc}
                </p>
                <a
                  href={branch.link}
                  className="flex items-center gap-2 px-5 py-2 bg-[#D94619] text-white rounded-full font-medium hover:bg-[#F2B705] hover:text-white transition"
                >
                  <CalendarDays className="w-4 h-4" />
                  Book Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Accents */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F2B705]/40 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D94619]/20 rounded-full blur-3xl opacity-40"></div>
    </section>
  )
}

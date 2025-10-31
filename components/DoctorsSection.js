'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const doctors = [
  {
    name: 'Dr. Veronica Akuete',
    specialty: 'Consultant Optometrist',
    desc: 'Over 35 years of experience in eye examination, vision therapy, and ocular health education.',
    img: '/images/fec2.jpg',
  },
  {
    name: 'Dr. Grace Obasi',
    specialty: 'Pediatric Optometrist',
    desc: 'Specialist in child eye care, early detection of visual problems, and family counseling.',
    img: '/images/fec2.jpg',
  },
  {
    name: 'Dr. Victor Adebayo',
    specialty: 'Contact Lens Specialist',
    desc: 'Expert in modern contact lens fitting, care, and customized visual solutions.',
    img: '/images/fec2.jpg',
  },
  {
    name: 'Dr. Faith Eze',
    specialty: 'Low Vision & Glaucoma Specialist',
    desc: 'Dedicated to improving sight for patients with glaucoma and low vision conditions.',
    img: '/images/fec2.jpg',
  },
]

export default function DoctorsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const doctor = doctors[index]

  return (
    <section className="py-16 bg-[#FFF8E1] px-4">
      <h2 className="text-center text-3xl font-bold text-[#F23A2E] mb-10">
        Meet Our Doctors
      </h2>

      <div className="max-w-3xl mx-auto text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-md p-8 border border-[#F9B935]"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#F9B935] mb-6"
            />
            <h3 className="text-xl font-semibold text-[#F23A2E]">
              {doctor.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{doctor.specialty}</p>
            <p className="text-gray-700 mt-3">{doctor.desc}</p>

            <a
              href="/book/doctor"
              className="inline-block mt-6 px-5 py-2 bg-[#F9B935] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#F23A2E] hover:text-white transition"
            >
              Book an Appointment
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {doctors.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-[#F23A2E]' : 'bg-[#F9B935]'
              } transition`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

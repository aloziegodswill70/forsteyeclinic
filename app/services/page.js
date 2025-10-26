'use client'

import { motion } from 'framer-motion'
import { Eye, Glasses, Contact2, Stethoscope, Activity, Sparkles } from 'lucide-react'

const services = [
  {
    icon: <Eye className="w-12 h-12 text-[#e56a00]" />,
    title: 'Comprehensive Eye Examination',
    desc: 'We provide detailed vision testing and eye health evaluation using modern diagnostic tools to ensure your eyes stay healthy and your vision clear.',
  },
  {
    icon: <Glasses className="w-12 h-12 text-[#e56a00]" />,
    title: 'Optical Dispensing',
    desc: 'We offer stylish frames and precision lenses, designed to fit your lifestyle and enhance your visual comfort.',
  },
  {
    icon: <Contact2 className="w-12 h-12 text-[#e56a00]" />,
    title: 'Contact Lens Services',
    desc: 'Our experts provide contact lens fitting, education, and aftercare to keep your eyes safe and comfortable.',
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-[#e56a00]" />,
    title: 'Treatment of Eye Conditions',
    desc: 'From glaucoma to dry eyes, infections, and allergies — we offer personalized management for all ocular conditions.',
  },
  {
    icon: <Activity className="w-12 h-12 text-[#e56a00]" />,
    title: 'Low Vision Care',
    desc: 'We help patients with visual impairment improve quality of life using advanced low-vision aids and rehabilitation techniques.',
  },
  {
    icon: <Sparkles className="w-12 h-12 text-[#e56a00]" />,
    title: 'Children & Vision Therapy',
    desc: 'Our pediatric services detect early vision issues and provide therapy to strengthen visual skills in children.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-[#e56a00]"
        >
          Our Eye Care Services
        </motion.h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          At Forst Eye Clinic, we combine expertise, technology, and care to deliver exceptional eye health services for all ages.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-t-4 border-[#e56a00]"
            >
              <div className="flex justify-center mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#e56a00] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16">
          <motion.a
            href="/#booking"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-[#e56a00] text-white rounded-lg shadow-md hover:bg-[#cc5f00] transition"
          >
            Book an Appointment Today
          </motion.a>
        </div>
      </div>
    </main>
  )
}

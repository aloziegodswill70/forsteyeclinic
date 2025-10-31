'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye,
  Glasses,
  Activity,
  ClipboardList,
  Stethoscope,
  HeartPulse,
  Brain,
  Droplets,
  Smile,
} from 'lucide-react'

const services = [
  { icon: <Eye className="w-7 h-7 text-[#F23A2E]" />, title: "Comprehensive Eye Exam", desc: "Full visual assessment including refraction, eye health check, and consultation." },
  { icon: <Glasses className="w-7 h-7 text-[#F23A2E]" />, title: "Prescription Glasses", desc: "Get lenses precisely designed for your vision and lifestyle." },
  { icon: <Activity className="w-7 h-7 text-[#F23A2E]" />, title: "Computer Vision Care", desc: "Relief and correction for digital eye strain and screen-related fatigue." },
  { icon: <ClipboardList className="w-7 h-7 text-[#F23A2E]" />, title: "Children Eye Care", desc: "Early detection and treatment of vision problems in kids." },
  { icon: <Stethoscope className="w-7 h-7 text-[#F23A2E]" />, title: "Eye Disease Management", desc: "Diagnosis and management of conditions like glaucoma, cataract, and dry eye." },
  { icon: <HeartPulse className="w-7 h-7 text-[#F23A2E]" />, title: "Vision Therapy", desc: "Customized exercises and rehabilitation to improve eye coordination." },
  { icon: <Brain className="w-7 h-7 text-[#F23A2E]" />, title: "Neuro-Optometric Care", desc: "Support for patients recovering from stroke or traumatic brain injury." },
  { icon: <Droplets className="w-7 h-7 text-[#F23A2E]" />, title: "Contact Lens Fitting", desc: "Specialized fitting for cosmetic and medical-grade contact lenses." },
  { icon: <Smile className="w-7 h-7 text-[#F23A2E]" />, title: "Cosmetic Eye Enhancement", desc: "Eye beauty and aesthetic services including prosthetic and tinted lenses." },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = Math.ceil(services.length / 3)

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides)
    }, 8000)
    return () => clearInterval(interval)
  }, [slides])

  // Divide services into groups of 3 per slide
  const serviceGroups = []
  for (let i = 0; i < services.length; i += 3) {
    serviceGroups.push(services.slice(i, i + 3))
  }

  return (
    <section className="py-16 bg-white px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-[#F23A2E] mb-10">
        Our Core Eye Care Services
      </h2>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceGroups[currentIndex].map((service, i) => (
              <div
                key={i}
                className="bg-[#FFF8F2] border border-[#F9B935]/30 rounded-2xl shadow-md hover:shadow-xl hover:border-[#F23A2E]/40 transition p-8 flex flex-col items-center text-center"
              >
                <div className="mb-3 bg-[#F9B935]/20 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: slides }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex
                  ? 'bg-[#F9B935]'
                  : 'bg-[#F23A2E]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

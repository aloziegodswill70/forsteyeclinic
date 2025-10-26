'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Glasses, Activity, ClipboardList, Stethoscope, HeartPulse, Brain, Droplets, Smile } from 'lucide-react'

const services = [
  { icon: <Eye className="w-6 h-6 text-forstRed" />, title: "Comprehensive Eye Exam", desc: "Full visual assessment including refraction, eye health check, and consultation." },
  { icon: <Glasses className="w-6 h-6 text-forstRed" />, title: "Prescription Glasses", desc: "Get lenses precisely designed for your vision and lifestyle." },
  { icon: <Activity className="w-6 h-6 text-forstRed" />, title: "Computer Vision Care", desc: "Relief and correction for digital eye strain and screen-related fatigue." },
  { icon: <ClipboardList className="w-6 h-6 text-forstRed" />, title: "Children Eye Care", desc: "Early detection and treatment of vision problems in kids." },
  { icon: <Stethoscope className="w-6 h-6 text-forstRed" />, title: "Eye Disease Management", desc: "Diagnosis and management of conditions like glaucoma, cataract, and dry eye." },
  { icon: <HeartPulse className="w-6 h-6 text-forstRed" />, title: "Vision Therapy", desc: "Customized exercises and rehabilitation to improve eye coordination." },
  { icon: <Brain className="w-6 h-6 text-forstRed" />, title: "Neuro-Optometric Care", desc: "Support for patients recovering from stroke or traumatic brain injury." },
  { icon: <Droplets className="w-6 h-6 text-forstRed" />, title: "Contact Lens Fitting", desc: "Specialized fitting for cosmetic and medical-grade contact lenses." },
  { icon: <Smile className="w-6 h-6 text-forstRed" />, title: "Cosmetic Eye Enhancement", desc: "Eye beauty and aesthetic services including prosthetic and tinted lenses." },
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
      <h2 className="text-3xl font-bold text-forstRed mb-10">Our Core Eye Care Services</h2>

      <div className="relative overflow-hidden max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceGroups[currentIndex].map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-6 transition flex flex-col items-center text-center"
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: slides }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? 'bg-forstRed' : 'bg-gray-300'
              } transition`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

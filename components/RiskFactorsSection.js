'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const riskFactors = [
  {
    title: 'Diabetes',
    description: 'Can lead to diabetic retinopathy and gradual vision loss if unmanaged.',
    image: '/images/diabetes.jpeg',
  },
  {
    title: 'Hypertension',
    description: 'High blood pressure may damage retinal blood vessels, causing vision problems.',
    image: '/images/hypertension.jpeg',
  },
  {
    title: 'Family History',
    description: 'Inherited risk for glaucoma, cataracts, or macular degeneration.',
    image: '/images/family history.jpeg',
  },
  {
    title: 'Prolonged Screen Time',
    description: 'Leads to digital eye strain, blurred vision, and dry eyes.',
    image: '/images/screen time.jpeg',
  },
  {
    title: 'Smoking',
    description: 'Increases risk of cataracts and age-related macular degeneration.',
    image: '/images/smoking.jpeg',
  },
  {
    title: 'Aging',
    description: 'Aging increases the risk of cataracts and macular degeneration.',
    image: '/images/age.png',
  },
]

export default function RiskFactorsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % riskFactors.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const current = riskFactors[index]

  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-[#F23A2E] mb-8">
        Common Eye Risk Factors
      </h2>

      <div className="relative w-full max-w-3xl mx-auto h-80 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-[#FFF8E1] border border-[#F9B935]"
          >
            <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-[#F9B935] shadow-md">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="128px"
                className="object-cover"
                priority={index === 0}
              />
            </div>

            <h3 className="text-xl font-semibold text-[#F23A2E]">
              {current.title}
            </h3>
            <p className="mt-2 text-gray-700 max-w-sm">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle gold fade for elegance */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#FFF4CC]/40 -z-10"></div>
    </section>
  )
}

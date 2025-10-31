'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Eye, CalendarCheck, HeartPulse } from 'lucide-react'

const faqs = [
  {
    icon: <Eye className="text-[#F9B935] w-6 h-6" />,
    question: "How often should I have an eye test?",
    answer: "We recommend a comprehensive eye examination at least once every 1–2 years, even if you don’t have any vision problems."
  },
  {
    icon: <CalendarCheck className="text-[#F9B935] w-6 h-6" />,
    question: "Do I need an appointment before visiting?",
    answer: "Walk-ins are welcome, but booking online or by phone ensures faster service and less waiting time."
  },
  {
    icon: <HeartPulse className="text-[#F9B935] w-6 h-6" />,
    question: "Are your services covered by HMOs?",
    answer: "Yes! We are in partnership with over 60 HMOs nationwide, ensuring you have easy access to eye care."
  },
  {
    icon: <HelpCircle className="text-[#F9B935] w-6 h-6" />,
    question: "What are your consultation hours?",
    answer: "We are open Monday to Saturday from 8 AM – 6 PM, and on Sundays for emergencies only."
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % faqs.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="py-16 bg-white text-[#1A1A1A] px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-[#F23A2E] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleIndex(index)}
            className="bg-[#FFF8E1] rounded-2xl p-5 shadow-md hover:shadow-lg hover:border-[#F23A2E] border transition cursor-pointer flex items-start gap-3"
          >
            <div className="flex-shrink-0">{faq.icon}</div>
            <div className="text-left w-full">
              <h3 className="font-semibold text-[#F23A2E] text-lg">
                {faq.question}
              </h3>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 text-gray-700 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

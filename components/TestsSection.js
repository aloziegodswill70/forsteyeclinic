'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Eye, Activity, ZoomIn, Sun, Monitor } from 'lucide-react'

export default function TestsSection() {
  const tests = [
    {
      name: 'Visual Acuity Test',
      icon: Eye,
      desc: 'Measures how clearly you can see letters or symbols at a distance.',
      price: '₦2,000',
    },
    {
      name: 'Refraction Test',
      icon: ZoomIn,
      desc: 'Determines your exact eyeglass prescription and lens power.',
      price: '₦3,000',
    },
    {
      name: 'Tonometry',
      icon: Activity,
      desc: 'Measures eye pressure to detect early signs of glaucoma.',
      price: '₦4,000',
    },
    {
      name: 'Fundus Examination',
      icon: Sun,
      desc: 'Examines the retina, optic nerve, and blood vessels for disease signs.',
      price: '₦5,000',
    },
    {
      name: 'Computer Vision Test',
      icon: Monitor,
      desc: 'Assesses eye strain and visual function from prolonged screen use.',
      price: '₦3,500',
    },
  ]

  return (
    <section id="tests" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
          Comprehensive Eye Tests & Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          At Forst Eye Clinic, we provide a wide range of eye examinations to ensure
          accurate diagnosis and effective treatment — all handled by licensed optometrists.
        </motion.p>
      </div>

      <div className="mt-10 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {tests.map((test, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <test.icon size={40} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 text-lg">{test.name}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{test.desc}</p>
                <p className="mt-3 text-blue-700 font-bold">{test.price}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

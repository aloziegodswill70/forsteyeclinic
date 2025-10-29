'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import {
  Eye,
  Activity,
  ZoomIn,
  Sun,
  Monitor,
  Camera,
  Scan,
  Image as Fundus,
  Glasses,
  CircleDot, // ✅ Replaced invalid "Lens" icon
} from 'lucide-react'

export default function TestsSection() {
  const tests = [
    {
      name: 'Visual Acuity Test',
      icon: Eye,
      desc: 'Measures how clearly you can see letters or symbols at a distance.',
    },
    {
      name: 'Refraction Test',
      icon: ZoomIn,
      desc: 'Determines your exact eyeglass prescription and lens power.',
    },
    {
      name: 'Tonometry',
      icon: Activity,
      desc: 'Measures eye pressure to detect early signs of glaucoma.',
    },
    {
      name: 'Fundus Examination',
      icon: Sun,
      desc: 'Examines the retina, optic nerve, and blood vessels for early disease detection.',
    },
    {
      name: 'Computer Vision Test',
      icon: Monitor,
      desc: 'Assesses eye strain and visual function from prolonged screen use.',
    },
    {
      name: 'Pachymetry',
      icon: Scan,
      desc: 'Measures the thickness of your cornea, vital for glaucoma and LASIK evaluation.',
    },
    {
      name: 'OCT (Optical Coherence Tomography)',
      icon: Camera,
      desc: 'Provides high-resolution imaging of the retina and optic nerve for early disease detection.',
    },
    {
      name: 'Fundus Photography',
      icon: Fundus,
      desc: 'Captures detailed images of the retina for precise documentation and diagnosis.',
    },
    {
      name: 'Low Vision Tests',
      icon: Glasses,
      desc: 'Specialized tests for patients with reduced vision to maximize remaining sight.',
    },
    {
      name: 'Contact Lens Tests',
      icon: CircleDot, // ✅ Replaced invalid icon
      desc: 'Ensures the best lens fit and comfort tailored to your eyes and lifestyle.',
    },
  ]

  return (
    <section
      id="tests"
      className="py-16 bg-gradient-to-b from-[#FFF8E1] via-white to-[#FFE0B2]"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#E64A19]"
        >
          Comprehensive Eye Tests & Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto"
        >
          At Forst Eye Clinic, we offer a wide range of advanced diagnostic eye tests
          to help ensure accurate evaluation and personalized care.
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
                className="bg-white rounded-2xl shadow-md p-6 text-center border border-[#FFD54F] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <test.icon size={40} className="text-[#E64A19]" />
                </div>
                <h3 className="font-semibold text-[#E64A19] text-lg">
                  {test.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {test.desc}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

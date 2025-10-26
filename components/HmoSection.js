'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HmoSection() {
  const hmos = [
    '/images/axa.jpeg',
    '/images/leadway.png',
    '/images/reliance.jpeg',
    '/images/nhis.jpeg',
    '/images/avon.png',
    '/images/hygiea.jpeg',
    '/images/redcare.jpeg',
    '/images/philip.png',
    '/images/metro.png',
    '/images/bastion.jpeg',
    '/images/hallmark.jpeg',
    '/images/clearline.png',
    '/images/lifeworth.png',
    '/images/Aiico.jpeg',
    '/images/anchor.jpeg',
    '/images/hpartners.jpeg',
    '/images/nonsuch.jpeg',
  ]

  return (
    <section
      id="hmos"
      className="py-16 bg-gradient-to-b from-orange-50 via-white to-orange-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-orange-700"
        >
          Trusted by Over <span className="text-orange-600">60+ HMOs</span> and Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-gray-700"
        >
          Forst Eye Clinic is accredited by top Health Maintenance Organizations across Nigeria — 
          ensuring affordable, quality care for every patient.
        </motion.p>
      </div>

      <div className="mt-12 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {hmos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={logo}
                  alt={`HMO ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain transition duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

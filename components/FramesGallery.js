'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const frames = [
  {
    name: 'Classic Clear Frame',
    desc: 'Minimalist, lightweight acetate clear frame — ideal for everyday wear.',
    image: '/images/frame1.jpg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Classic Clear Frame.',
  },
  {
    name: 'Round Gold Metal Frame',
    desc: 'Elegant gold metal round lenses — premium style with comfort.',
    image: '/images/frame9.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Round Gold Metal Frame.',
  },
  {
    name: 'Tortoise Wayfarer Frame',
    desc: 'Bold tortoise-pattern wayfarer design — fashion & function in one.',
    image: '/images/frame10.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Tortoise Wayfarer Frame.',
  },
  {
    name: 'Slim Black Rectangle Frame',
    desc: 'Sleek black rectangular frame — perfect for a professional look.',
    image: '/images/frame4.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Slim Black Rectangle Frame.',
  },
  {
    name: 'Matte Navy Frame',
    desc: 'Trendy matte navy blue finish — adds subtle sophistication.',
    image: '/images/frame5.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Matte Navy Frame.',
  },
  {
    name: 'Vintage Brown Round Frame',
    desc: 'Retro-inspired design with light brown finish for style and comfort.',
    image: '/images/frame6.png',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Vintage Brown Round Frame.',
  },
  {
    name: 'Silver Aviator Frame',
    desc: 'Classic silver aviator frame with a modern touch — unisex style.',
    image: '/images/frame7.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Silver Aviator Frame.',
  },
  {
    name: 'Bold Red Cat Eye Frame',
    desc: 'Vibrant red cat-eye frame — statement look for confident personalities.',
    image: '/images/frame8.jpeg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Bold Red Cat Eye Frame.',
  },
]

export default function FramesGallery() {
  const controls = useAnimation()
  const scrollRef = useRef(null)

  // Auto-slide logic
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' })
      }
    }

    const interval = setInterval(scroll, 2500) // quick scroll every 2.5s
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-[#FFF8E1] px-4 sm:px-10">
      <h2 className="text-center text-3xl font-bold text-[#F23A2E] mb-8">
        Our Premium Frames
      </h2>

      <motion.div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
      >
        {frames.map((frame, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] sm:min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
          >
            <img
              src={frame.image}
              alt={frame.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{frame.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{frame.desc}</p>
              </div>
              <a
                href={`https://wa.me/2347067208592?text=${encodeURIComponent(frame.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#F9B935] text-[#1A1A1A] rounded-full text-center font-semibold hover:bg-[#F23A2E] hover:text-white transition"
              >
                Add to Cart
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Example frames (replace image URLs with real ones you download)
const frames = [
  {
    name: 'Classic Clear Frame',
    desc: 'Minimalist, lightweight acetate clear frame — ideal for everyday wear.',
    image: '/images/frames/frame1.jpg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Classic Clear Frame.'
  },
  {
    name: 'Round Gold Metal Frame',
    desc: 'Elegant gold metal round lenses — premium style with comfort.',
    image: '/images/frames/frame2.jpg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Round Gold Metal Frame.'
  },
  {
    name: 'Tortoise Wayfarer Frame',
    desc: 'Bold tortoise-pattern wayfarer design — fashion & function in one.',
    image: '/images/frames/frame3.jpg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Tortoise Wayfarer Frame.'
  },
  {
    name: 'Slim Black Rectangle Frame',
    desc: 'Sleek black rectangular frame — perfect for a professional look.',
    image: '/images/frames/frame4.jpg',
    whatsappMessage: 'Hello Forst Eye Clinic, I’d like to order the Slim Black Rectangle Frame.'
  },
]

export default function FramesGallery() {
  return (
    <section className="py-16 bg-white px-4 sm:px-10">
      <h2 className="text-center text-3xl font-bold text-[#F23A2E] mb-8">
        Our Premium Frames
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {frames.map((frame, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={frame.image}
              alt={frame.name}
              className="w-full object-cover h-48"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                {frame.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-grow">
                {frame.desc}
              </p>
              <a
                href={`https://wa.me/234000000000?text=${encodeURIComponent(frame.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#F9B935] text-[#1A1A1A] rounded-full text-center font-semibold hover:bg-[#F23A2E] hover:text-white transition"
              >
                Add to Cart (WhatsApp)
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

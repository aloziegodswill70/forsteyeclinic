'use client'

import { ShoppingCart } from 'lucide-react'

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

export default function Ecommerce() {
  return (
    <section className="py-16 bg-white px-4 sm:px-10">
      <h2 className="text-center text-3xl font-bold text-[#F23A2E] mb-10">
        Shop Our Premium Frames
      </h2>

      {/* Two-row grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {frames.map((frame, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
          >
            <img
              src={frame.image}
              alt={frame.name}
              className="w-full h-[240px] object-cover object-center"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{frame.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{frame.desc}</p>
              </div>

              <a
                href={`https://wa.me/2348186992818?text=${encodeURIComponent(frame.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 w-full
                           px-5 py-3 text-base font-semibold rounded-full
                           bg-[#F9B935] text-[#1A1A1A] hover:bg-[#F23A2E] hover:text-white
                           transition-all duration-300 ease-in-out shadow-md
                           active:scale-95"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

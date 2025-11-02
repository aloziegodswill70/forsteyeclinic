'use client'
import Link from 'next/link'
import { MapPin, Eye, CalendarCheck, HeartPulse } from 'lucide-react'

export default function HeroSection() {
  const branches = [
    { name: 'Ogba', href: '/branch/ogba' },
    { name: 'Surulere', href: '/branch/surulere' },
    { name: 'Festac', href: '/branch/festac' },
    { name: 'Lekki', href: '/branch/lekki' },
    { name: 'Agbara', href: '/branch/agbara' },
    { name: 'Book Online', href: '/booking' },
  ]

  return (
    <section className="relative w-full bg-white py-12 md:py-10 px-6 md:px-12 text-center md:text-left overflow-hidden -mt-8">
      <style jsx>{`
        @keyframes gradientBlink {
          0%, 100% {
            background-position: 0% 50%;
            opacity: 1;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.7;
          }
        }
        .gradient-blink {
          background: linear-gradient(90deg, #F23A2E, #F9B935, #F23A2E);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientBlink 3s infinite linear;
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight gradient-blink">
            Forst Eye Clinic
            <span className="block text-orange-500">Your Vision, Our Priority</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Modern, compassionate, and professional eye care across Lagos — 
            accessible online and across all our branches.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Link
              href="https://wa.me/2348033435554"
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#d72f24] transition-all"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="bg-[#F9B935] text-[#1A1A1A] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#e8a800] transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Branch Buttons */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3 justify-items-center">
            {branches.map((branch, index) => (
              <Link
                key={index}
                href={branch.href}
                className="flex flex-col items-center justify-center w-full sm:w-auto bg-[#FFF5E5] hover:bg-[#F9B935]/20 text-[#F23A2E] border border-[#F9B935]/40 rounded-xl py-3 px-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <MapPin className="text-[#F23A2E]" size={20} />
                {branch.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Features */}
        <div className="hidden md:flex flex-col gap-5 items-center">
          <div className="flex items-center gap-3 bg-[#FFF5E5] border border-[#F9B935]/40 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <Eye className="text-[#F23A2E]" size={32} />
            <div>
              <h3 className="font-semibold text-[#1A1A1A]">Advanced Vision Tests</h3>
              <p className="text-gray-600 text-sm">Pachymetry, OCT, Fundus, and more.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#FFF5E5] border border-[#F9B935]/40 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <CalendarCheck className="text-[#F9B935]" size={32} />
            <div>
              <h3 className="font-semibold text-[#1A1A1A]">Flexible Appointments</h3>
              <p className="text-gray-600 text-sm">Book any time, any branch online.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#FFF5E5] border border-[#F9B935]/40 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <HeartPulse className="text-[#F23A2E]" size={32} />
            <div>
              <h3 className="font-semibold text-[#1A1A1A]">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Your comfort and vision come first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

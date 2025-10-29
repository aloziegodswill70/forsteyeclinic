'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', color: 'bg-[#F25C05] hover:bg-[#D63C05]' },
    { href: '/reception', label: 'Reception', color: 'bg-[#F7B731] hover:bg-[#F25C05]' },
    { href: '/booking', label: 'Booking', color: 'bg-[#F25C05] hover:bg-[#D63C05]' },
    { href: '/billing', label: 'Billing', color: 'bg-[#F7B731] hover:bg-[#F25C05]' },
    { href: '/about', label: 'About', color: 'bg-[#F25C05] hover:bg-[#D63C05]' },
    { href: '/vision', label: 'Vision', color: 'bg-[#F7B731] hover:bg-[#F25C05]' },
    { href: '/mission', label: 'Mission', color: 'bg-[#F25C05] hover:bg-[#D63C05]' },
    { href: '/admin', label: 'Admin', color: 'bg-[#F7B731] hover:bg-[#F25C05]' },
  ]

  return (
    <nav className="bg-white shadow-md py-2 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/feclogo1.png"
            alt="Forst Eye Clinic Logo"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <span className="text-[#F25C05] font-extrabold tracking-wide text-lg">
            Forst Eye Clinic
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-white font-medium shadow-md transition ${link.color} ${
                pathname === link.href ? 'ring-2 ring-[#F25C05]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F25C05] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-10/12 text-center py-2 rounded-full text-white font-medium transition ${link.color} ${
                  pathname === link.href ? 'ring-2 ring-[#F25C05]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

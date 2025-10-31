'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/reception', label: 'Reception' },
    { href: '/booking', label: 'Booking' },
    { href: '/billing', label: 'Billing' },
    { href: '/about', label: 'About' },
    { href: '/vision', label: 'Vision' },
    { href: '/mission', label: 'Mission' },
    { href: '/admin', label: 'Admin' },
  ]

  return (
    <nav className="bg-[#F23A2E] shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-white font-extrabold text-lg tracking-wide">
            Forst Eye Clinic
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                pathname === link.href
                  ? 'bg-[#F9B935] text-[#1A1A1A]'
                  : 'text-white hover:bg-[#F9B935] hover:text-[#1A1A1A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F23A2E] shadow-md border-t border-[#F9B935]/40">
          <div className="flex flex-col items-center py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-10/12 text-center py-2 rounded-full font-medium transition ${
                  pathname === link.href
                    ? 'bg-[#F9B935] text-[#1A1A1A]'
                    : 'text-white hover:bg-[#F9B935] hover:text-[#1A1A1A]'
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

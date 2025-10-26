'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home', color: 'bg-orange-500 hover:bg-orange-600' },
    { href: '/reception', label: 'Reception', color: 'bg-yellow-400 hover:bg-yellow-500' },
    { href: '/booking', label: 'Booking', color: 'bg-orange-400 hover:bg-orange-500' },
    { href: '/billing', label: 'Billing', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { href: '/about', label: 'About', color: 'bg-orange-500 hover:bg-orange-600' },
    { href: '/vision', label: 'Vision', color: 'bg-yellow-400 hover:bg-yellow-500' },
    { href: '/mission', label: 'Mission', color: 'bg-orange-400 hover:bg-orange-500' },
    { href: '/admin', label: 'Admin', color: 'bg-yellow-500 hover:bg-yellow-600' },
  ]

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-300 shadow-md py-2 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/feclogo1.png"
            alt="Forst Eye Clinic Logo"
            className="w-10 h-10 rounded-full shadow-sm"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-white font-medium shadow-sm transition ${link.color} ${
                pathname === link.href ? 'ring-2 ring-white' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-500 via-yellow-400 to-orange-300 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-10/12 text-center py-2 rounded-full text-white font-medium transition ${link.color} ${
                  pathname === link.href ? 'ring-2 ring-white' : ''
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

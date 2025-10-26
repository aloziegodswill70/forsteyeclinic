'use client'

import { motion } from 'framer-motion'

export default function BillingPage() {
  return (
    <section className="min-h-screen bg-orange-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Billing & Payments
        </motion.h1>

        <p className="text-gray-700 leading-relaxed mb-10">
          At Forst Eye Clinic, we provide flexible and transparent payment
          options for all our services. You can pay in-person or through your
          registered HMO. Our billing desk ensures smooth, accurate transactions
          for every patient.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Accepted Payment Methods
            </h3>
            <ul className="text-gray-600 list-disc ml-5 space-y-1">
              <li>Cash or POS at the clinic</li>
              <li>Bank Transfers</li>
              <li>Health Maintenance Organizations (HMOs)</li>
              <li>Corporate Retainer Services</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Need Assistance?
            </h3>
            <p className="text-gray-700">
              Our billing officers are always available to help you understand
              your bill and payment breakdown.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
            >
              Contact Billing Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
